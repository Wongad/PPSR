'use strict';

import gulp from 'gulp';
import fs from 'fs';

//Pulls in all gulp subtasks before trying to run the main default gulp task
fs.readdirSync('./gulp/tasks')
	.filter(file => (/\.(js)$/i).test(file))
	.forEach(file => require('./gulp/tasks/' + file));

// Default task. Run by typing "gulp" into a command prompt
gulp.task('default', gulp.series(
	'sass',
	'svg-sprite',
	'copy_to_server',
	'watch'
));
