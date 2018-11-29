'use strict';

import path from 'path';
import autoprefixer from 'autoprefixer';
import px2rem from 'postcss-pxtorem';
import notifier from 'node-notifier';

import { gulp, plugins, c, args, browserSync, notification_icon_location } from '../config/shared-vars';

const px2rem_settings = {
  rootValue: 16,
  propWhiteList: ['font', 'font-size', 'letter-spacing'],
  replace: false,
};

// Sass compilation
gulp.task('sass', () => {
  return gulp.src([
    'css/**/*.scss',
    '!css/variables-and-tools.scss'
  ])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'expanded',
      precision: 5,
      includePaths: [
        'css',
        'node_modules'
      ]
    }))
    .on('error', (error)=> {
      console.log(`\n ${c.red.bold('Sass failed to compile:')} ${c.yellow(error.message)}\n`);
      return notifier.notify({title: 'Sass Error', message: `${path.basename(error.file)} line ${error.line}`, icon: notification_icon_location+'gulp-error.png'});
    })
    .pipe(plugins.postcss([
      autoprefixer({
        grid: true,
      }),
      px2rem(px2rem_settings)
    ]))
    .pipe(plugins.sourcemaps.write('./'))
    .pipe(gulp.dest('css'))
});
