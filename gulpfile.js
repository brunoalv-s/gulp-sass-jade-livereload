var gulp    = require('gulp');
    jade    = require('gulp-jade');
    sass    = require('gulp-sass');
    cssmin  = require('gulp-cssmin');
    prefix  = require('gulp-autoprefixer');
    rename  = require('gulp-rename');
    connect = require('gulp-connect');

// settings tasks
gulp.task('default', ['jade', 'jadepage', 'stylesheets', 'connect', 'watch']);

// Convert Jade files to HTML
gulp.task('jade', function() {
  gulp.src('./src/jade/**.jade')
    .pipe(connect.reload())
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});

  // Convert JadePages files
  gulp.task('jadepage', function() {
    gulp.src('./src/jade/jadepages/**.jade')
      .pipe(connect.reload())
      .pipe(jade())
      .pipe(gulp.dest('./dist/pages'));
  });

// Convert SASS/SCSS files to CSS
gulp.task('stylesheets', function() {
  gulp.src('./src/sass/**.{scss,sass}')
    .pipe(connect.reload())
    .pipe(sass())
    .pipe(cssmin())
    .pipe(prefix('last 2 versions'))
    .pipe(rename({
      basename: 'style',
      suffix: '.min',
      extname: '.css'
    }))
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.{sass,scss}', ['stylesheets'])
  gulp.watch('./src/**/*.jade', ['jade', 'jadepage']);
});

gulp.task('connect', function() {
  connect.server({ livereload: true });
});
