const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function styles() {
    console.log('Running styles task'); // Log de depuração
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    console.log('Running images task'); // Log de depuração
    return gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}

function scripts() {
    console.log('Running scripts task'); // Log de depuração
    return gulp.src('./src/js/*.js') 
        .pipe(concat('main.js'))
        .pipe(uglify()) 
        .pipe(gulp.dest('./dist/js')); 
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/img/**/*', gulp.parallel(images));
    gulp.watch('./src/js/*.js', gulp.parallel(scripts)); 
};