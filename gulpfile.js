var gulp = require('gulp'),    
    autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del');
/*
* Configuración de las tareas 'styles'
*/

var sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('static/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))         // versiones de navegadores que soportar
    .pipe(gulp.dest('static/css'))   // ruta destino de los archivos procesados
    .pipe(rename({suffix: '.min'}))     // agregamos el prefijo min para los archivos minimizados
    .pipe(minifycss())  // minimizamos el css
    .pipe(gulp.dest('static/css'))  // ruta destino del archivo minimizado
    .pipe(notify({ message: 'Styles task complete' }));  // avisamos al sistema que el proceso se completó.
});

gulp.task('sass:watch',['sass'], function () {
  gulp.watch('static/sass/**/*.scss');
});

gulp.task("jshint", function(){
    return gulp.src(['static/js/*.js']) // pasamos nuestros propios archivos js
        .pipe(jshint()) // los revisamos
        .pipe(jshint.reporter('default')) // pedimos a jshint que nos muestre los errores usando un revisor estándar
        .pipe(notify({ message: 'JSHints task complete' })); // notifcamos al sistema
});

gulp.task('scripts', function() {
  return gulp.src(['static/js/*.js']) // trabajaremos con el archivo de jquery y nuestros js 
    .pipe(concat('main.js')) // los concatenamos en el archivo main.js
    .pipe(gulp.dest('static/js')) // guardamos el archivo concatenado
    .pipe(rename({suffix: '.min'})) // hacemos unacopia y le agregamos el prefijo min
    .pipe(uglify()) // lo minimizamos
    .pipe(gulp.dest('static/js')) // lo guardamos
    .pipe(notify({ message: 'Scripts task complete' })); // avisamos al sistema que la tarea se completó
}); 

gulp.task('images', function() {
  return gulp.src('static/images/*') // ruta a nuestras imágenes, queremos que busque a dos niveles
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })) // proceso de optimización
    .pipe(gulp.dest('static/dist/images')) // guardamos las imágenes procesadas
    .pipe(notify({ message: 'Images task complete' })); // avisamos al sistema
});

gulp.task('clean', function(cb) {
    del(['static/css', 'static/js', 'static/images'], cb) // borramos todos los archivos procesados por las tareas previas. 
});

gulp.task('default', function() {
    gulp.start('sass', 'scripts', 'images');
});