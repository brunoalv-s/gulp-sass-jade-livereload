# Gulp-SASS-Jade-LiveReload
Kit de desenvolvimento inicial, projeto automatizado de build com o GulpJS. Configurado com SASS, Jade e LiveReload.

## Como usar
Gulp funciona com o [NodeJS](https://nodejs.org/), você precisará tê-lo instalado no seu computador além do [GulpJS](gulpjs.com) (de preferência de forma global). Você pode ter mais detalhes da instalação do NodeJs e do uso básico do Gulp [Aqui](http://tableless.com.br/gulp-o-novo-automatizador/) ou [Aqui](http://blog.caelum.com.br/bye-bye-grunt-js-hello-gulp-js/).

### Install modules e Run
Acesse via terminal a pasta do seu projeto e dê:
```sh
$ npm install
```
Isso fará com que todos as dependências listadas em *package.json*, como o próprio *gulp*, *gulp-connect*, *gulp-sass* e *etc...*

Abra o arquivo *gulpfile.js* e faça as modificações necessárias para o seu projeto, o que provavelmente será apenas nos diretórios dos seus arquivos (Ex: "*gulp.src('./caminho/html/arquivo.html)'* e *gulp.dest('./dist')*").
```sh
gulp.task('jade', function() {
  gulp.src('./src/jade/**.jade')
    .pipe(connect.reload())
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});
```

Após as alterações necessárias para o seu projeto, volte ao terminal e chame a tarefa padrão do gulp.
```sh
$ gulp
```
Ele vai rodar todas as tarefas listadas como default no seu *gulpfile.js*, e no fim vai assistir os arquivos definidos no próprio *gulpfile.js* além de subir um "servidor" local.

![image](https://raw.githubusercontent.com/brunoalv-s/gulp-sass-jade-livereload/master/images/gulp-screen.PNG)

Você poderá abrir o navegador e acessar pelo endereço: *http://localhost:8080 (verifique o url pelo próprio terminal)*, todas as mudanças feitas nos arquivos assistidos serão mostradas automaticamente no navegador.

#### Dicas

Pode parecer óbvio, mas percebi que poucas pessoas usam o LiveReload em outros dispositivos enquanto desenvolvem seus sites. Mas com o "servidor local" que o *gulp-connect*, você pode utilizar a Rede Wifi e testar seus sites em dispositivos móveis por exemplo.
```sh
http://seuip:8080
no meu caso
http://192.168.0.6:8080
```
