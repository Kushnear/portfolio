'use sctrict';


const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel')

gulp.task('sass', function(){
    return gulp.src("app/scss/**/*.sass")
        .pipe(sass())
        .pipe(autoprefixer({cascade: false}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

gulp.task('js', function() {
    browserSync.notify('Compiling internal JS');
   
    return gulp.src(['app/js/**/*.js'])
    //   .pipe(plumber({
    //     errorHandler: notify.onError(err => ({
    //       title: 'JS',
    //       message: err.message
    //     }))
    //   }))
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file',
        indent: true
      }))
    //   .pipe(sourcemaps.init())
      // .pipe(uglify())
    //   .pipe(sourcemaps.write())
      .pipe(gulp.dest('./js'))
      .pipe(browserSync.reload({ stream: true }))
   });

gulp.task("watch", function(done) {
    browserSync.init({
        server:'app/'
    })

    gulp.watch(["app/scss/**/*.sass", 'app/components/**/*.sass'], gulp.series('sass'));
    // gulp.watch("app/components/header/**/*.sass", gulp.series('sass'));
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch(['app/js/**/*.js', '!app/js/libs*.js', 'app/components/**/*.js', 'app/elements/**/*.js'],  gulp.series('js'));
});



gulp.task('default', gulp.series('sass', 'watch'));


