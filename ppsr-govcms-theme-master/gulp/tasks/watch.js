'use strict';

import gulp from 'gulp';

// Watch task
gulp.task('watch', gulp.parallel((done) => {

  // Styles
  gulp.watch([
    'css/**/*.{scss,sass}',
  ])
  .on('change', gulp.series('sass', 'copy_to_server:css'));

  // JavaScript
  const js_tasks = gulp.series('copy_to_server:js');
  gulp.watch([
    'js/**/*.js',
  ])
  .on('change', js_tasks)
  .on('add', js_tasks);

  // SVG sprite
  const sprite_tasks = gulp.series('svg-sprite', 'copy_to_server:svg-sprite');
  gulp.watch([
    'images-source/svg-sprite/**/*.svg',
  ])
  .on('change', sprite_tasks)
  .on('add', sprite_tasks);

  done();
}));
