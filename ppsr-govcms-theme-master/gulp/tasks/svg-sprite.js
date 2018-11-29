
import { gulp, plugins, c, args } from '../config/shared-vars';

gulp.task('svg-sprite', () => {
	const sourceFolder = 'images-source/svg-sprite';
	const dest = 'images';
	const fileName = 'svg-sprite';
	const finalDest = [dest, `${fileName}.svg`].join('/');

	//letting the user know what is going on
	console.log(`
  ${c.bold.yellow('Generated SVG sprite')}

  Converted all svgs from here: ${c.yellow(sourceFolder)}
  Into an svg sprite that can be found here: ${c.yellow(finalDest)}

  Use an SVG from the sprite by using this in your html:
  ${c.green(`<svg focusable="false"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/${finalDest}#svg-${c.yellow('[file-name]')}"></use></svg>`)}
`);

	return gulp.src(['.', sourceFolder, '**/*.svg'].join('/'))

		//convert svg files in the "images-source/svg-sprite" folder into a single svg-sprite.svg file
		.pipe(plugins.svgSymbols({
			id: 'svg-%f',
			title: '%f icon',//default title can be overridden by providing a title in the svg
			templates: ['default-svg'],
		}))

		//ensure it's file name is "svg-sprite"
		.pipe(plugins.rename(path => path.basename = fileName))

		//minify the svg-sprite
		.pipe(plugins.svgmin({
			plugins: [
				{ cleanupIDs: false },
				{ removeViewBox: false },
			]
		}))

		//output svg-sprite file
		.pipe(gulp.dest(dest));

});
