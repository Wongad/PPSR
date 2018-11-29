
import gulp from 'gulp';
import sftp from 'gulp-sftp';
import { args, c } from '../config/shared-vars';
import fileExists from 'file-exists';

let hasLogged = false;

const project_letter = args.b ? 'b' : args.c ? 'c' : 'a';

function authorisation_exists(){
	if (!fileExists.sync('gulp/config/authorisation.js')) {
		if (!hasLogged) {
			console.log(
`
  ${c.red('Error:')}
  ${c.yellow('"gulp/config/authorisation.js" file not found')}
  Skipping upload step
`);
			hasLogged = true;
		}
		return false;
	}
	return true;
}

function copy_files_to_server(done, dir, src){
	if (authorisation_exists()){
		const server = {
			remotePath: `/data/webs/afsa-ppsr-${project_letter}/sites/default/themes/site/${dir}`,
			callback: ()=> hasLogged = false,
		}

		// Intentionally left out of git for security
		// Create a file called "authorisation.js" in this format:
		// export default { host: 'hostname', user: 'username', pass: 'password' }
		const authorisation = require('../config/authorisation').default;
		Object.assign(server, authorisation);

		return gulp.src(src)
		.pipe(sftp(server))
	}
	done();
}

//copy css to sftp can1dev
gulp.task('copy_to_server:css', function (done) {
	return copy_files_to_server(done, 'css', [
		'css/**/*.css',
		'css/**/*.map'
	])
});

//copy js to sftp can1dev
gulp.task('copy_to_server:js', function (done) {
	return copy_files_to_server(done, 'js', 'js/**/*.js')
});

//copy svg-sprite to sftp can1dev
gulp.task('copy_to_server:svg-sprite', function (done) {
	return copy_files_to_server(done, 'images', 'images/svg-sprite.svg');
});

function set_logged(state) {
	return done => {
		hasLogged = state;
		done();
	}
}

// Copy all to sftp can1dev
gulp.task('copy_to_server', gulp.series(
	set_logged(false),
	gulp.parallel(
		'copy_to_server:css',
		'copy_to_server:js',
		'copy_to_server:svg-sprite'
	),
	set_logged(false)
));
