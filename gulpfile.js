// Initialize modules
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

var resourcesOptimization = gulp.series(optimizeImages);

// Sass task: compiles the style.scss file into style.css
gulp.task('sass', function(){
    return gulp.src('src/scss/*.scss')
        .pipe(sass()) // compile SCSS to CSS
        .pipe(cssnano()) // minify CSS
        .pipe(gulp.dest('src/dist')) // put final CSS in dist folder
        .pipe(browserSync.stream());
});

// JS task: concatenates and uglifies JS files to script.js
gulp.task('js-commons', function(){
    return gulp.src('src/js/commons/*js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/dist'))
        .pipe(browserSync.stream());
});

gulp.task('js-forms-contact', function(){
    return gulp.src('src/js/contact-forms/*.js')
        .pipe(concat('contact.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/dist'))
        .pipe(browserSync.stream());
});

gulp.task('js-cookies', function(){
    return gulp.src('src/js/cookies/*.js')
        .pipe(concat('cookies.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/dist'))
        .pipe(browserSync.stream());
});


gulp.task('serve', function() {
    browserSync.init();

    gulp.watch('src/scss/**/*.scss', gulp.series("sass"));
    gulp.watch('src/js/commons/*.js', gulp.series("js-commons")); 
    gulp.watch('src/js/contact-forms/*.js', gulp.series("js-forms-contact")); 
    gulp.watch('src/js/cookies/*.js', gulp.series("js-cookies")); 
    gulp.watch("./**/*.php").on('change', browserSync.reload);

});

function optimizeImages(done){
    gulp.src('src/imagenes/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('src/imagenes'))
    done();
    }

// Default task
gulp.task('build', resourcesOptimization);
gulp.task('default', gulp.series('sass', 'js-commons', 'js-forms-contact', 'js-cookies',resourcesOptimization, 'serve' ));
