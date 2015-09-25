var gulp    = require('gulp');
    jade    = require('gulp-jade');
    sass    = require('gulp-sass');
    cssmin  = require('gulp-cssmin');
    prefix  = require('gulp-autoprefixer');
    rename  = require('gulp-rename');
    connect = require('gulp-connect');

// settings tasks
// Definimos uma tarefa padrão, onde usando apenas o comando gulp no terminal/cmd, todas as tarefas aqui listadas serão realizadas.
gulp.task('default', ['jade', 'stylesheets', 'connect', 'watch']);

// Convert Jade files to HTML
gulp.task('jade', function() {
  gulp.src('./src/jade/**.jade')
    .pipe(connect.reload())
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});

// Aqui definimos a tarefa que vai compilar nossos arquivos SASS/SCSS (que estão no caminho definido em gulp.src) para CSS.
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
  gulp.watch('./src/**/*.jade', ['jade']);
});

gulp.task('connect', function() {
  connect.server({ livereload: true });
});
