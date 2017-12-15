const gulp = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

gulp.task('default', () => {
  return gulp.src('app/moe.js')
    .pipe(babel({
      presets: ['stage-2']
    }))
    .pipe(concat('moe.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
})
