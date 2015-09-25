var gulp    = require('gulp');
    jade    = require('gulp-jade');
    sass    = require('gulp-sass');
    cssmin  = require('gulp-cssmin');
    prefix  = require('gulp-autoprefixer');
    rename  = require('gulp-rename');
    connect = require('gulp-connect');


// Definimos uma tarefa padrão, onde usando apenas o comando gulp no terminal/cmd, todas as tarefas aqui listadas serão realizadas.
gulp.task('default', ['jade', 'stylesheets', 'connect', 'watch']);

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

// Aqui é a tarefa para compilar os arquivos Jade para HTML.
// Funciona basicamente da mesma forma da tarefa de compilação do SASS.
gulp.task('jade', function() {
  gulp.src('./src/jade/**.jade')
    .pipe(connect.reload())
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});

// Essa tarefa será responsável pelo acompanhamento dos arquivos e tarefas de HTML e CSS.
// Toda mudança nesses arquivos, serão assistidos e então será disparada uma tarefa.
// Mais informações você encontra em: http://blog.da2k.com.br/2015/03/01/gulp-connect-e-livereload/
gulp.task('watch', function() {
  gulp.watch('./src/**/*.{sass,scss}', ['stylesheets'])
  gulp.watch('./src/**/*.jade', ['jade']);
});

// Aqui é onde a mágica acontece, essa é a tarefa responsável por subir nosso "servidor local".
gulp.task('connect', function() {
  connect.server({ livereload: true });
});
