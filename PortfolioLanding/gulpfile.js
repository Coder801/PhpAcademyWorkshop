const gulp = require('gulp'); // Сборщик
const sass = require('gulp-sass'); // Библиотека SASS
const gulpImagemin = require('gulp-imagemin'); // Библиотека оптимизации изображений
const browserSync = require('browser-sync').create(); // Библиотека LiveReload

// Задача запуска сервера и отслеживание файлов
// При каждом изменении в файлах будут запускатся соотвецтвующие задачи
gulp.task('server', ['sass'], function() {
    browserSync.init({
        server: "."
    });
    gulp.watch(["./src/scss/*.scss", "./src/scss/**/*.scss"], ['sass']);
    gulp.watch('./src/img/*', ['img']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Транскомпиляция SCSS в СSS
gulp.task('sass', function() {
  return gulp.src('./src/scss/*.scss') // Берем исходные файлы
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths})) // Транскомпиляция в CSS
    .pipe(gulp.dest('./dist/css/')) // Складывает их в папку dist
    .pipe(browserSync.stream()); // Перезагружаем браузер
});

// Минификация изображений
gulp.task('img', function() {
  return gulp.src('./src/img/*') // Берем исходные файлы
    .pipe(gulpImagemin()) // Минификация изображений
    .pipe(gulp.dest('./dist/img/')); // Складывает их в папку dist
});

// Gulp задача по умолчанию
gulp.task('default', ['sass', 'img', 'server']);
