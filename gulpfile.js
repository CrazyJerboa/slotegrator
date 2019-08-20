/*
развертывание нового проекта:
1) в папке проекта выполнить:
npm init

2) установить gulp:
npm i gulp --save-dev

3) скопировать этот файл из предыдущих проектов

4) выполнить команду для быстрой установки модулей:

npm i browser-sync del gulp-autoprefixer gulp-cache gulp-concat gulp-cssnano gulp-imagemin gulp-js-import gulp-pug gulp-rename gulp-sass gulp-uglifyjs imagemin-pngquant jquery-validation --save-dev

5) выполнить команду для 4 версии gulp при наличии ошибок сборки:
npm i -g gulp-cli
*/

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglifyjs'),
    cssnano       = require('gulp-cssnano'),
    rename        = require('gulp-rename'),
    imagemin      = require('gulp-imagemin'),
    pngquant      = require('imagemin-pngquant'),
    cache         = require('gulp-cache'),
    autoprefixer  = require('gulp-autoprefixer'),
    pug           = require('gulp-pug'),
    jsImport      = require('gulp-js-import'),
    del           = require('del');

gulp.task('sass', function() {
  return gulp.src(['app/assets/sass/**/*.+(scss|sass)', 'app/templates/**/*.+(scss|sass)'])
  .pipe(sass({outputStyle: 'expanded',}).on('error', sass.logError))
  .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
    cascade: true
  }))
  .pipe(gulp.dest('app/assets/css'))
  .pipe(browserSync.reload({stream: true}));
}); //gulp sass

gulp.task('js-import', function() {
  return gulp.src('app/assets/js-dev/scripts.js')
  .pipe(jsImport())
  .pipe(gulp.dest('app/assets/js'))
  .pipe(browserSync.reload({stream: true}));
}); //gulp js-import

gulp.task('scripts', function() {
  return gulp.src([
    'app/assets/libs/device/device.js',
    'app/assets/libs/shave/shave.js',
    'app/assets/libs/tiny-slider-master/dist/tiny-slider.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/assets/js'));
}); //gulp scripts

gulp.task('clear-cache', function() {
  return cache.clearAll();
}); //gulp clear-cache **для чистки кэша, если картинки стали криво минимизироваться

gulp.task('html', function() {
  return gulp.src('app/templates/pages/**/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('app'))
  .pipe(browserSync.reload({stream: true}));
}); //gulp html

// return gulp.src('app/css/libs.css')
gulp.task('css-libs', gulp.parallel('sass', function() {
  return gulp.src([
    'app/assets/libs/bootstrap4_grid/bootstrap-grid.min.css',
    'app/assets/libs/tiny-slider-master/dist/tiny-slider.css'
  ])
  .pipe(concat('libs.min.css'))
  .pipe(cssnano())
  .pipe(gulp.dest('app/assets/css'));
})); //gulp css-libs

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
}); //gulp browser-sync

gulp.task('clean', function() {
  return del('dist/**');
}); //gulp clean

gulp.task('watch', gulp.parallel('browser-sync', 'css-libs', 'scripts', 'js-import', function() {
  gulp.watch('app/**/*.+(scss|sass)', gulp.series('sass'));
  gulp.watch('app/templates/**/*.pug', gulp.series('html'));
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/templates/**/*.js', gulp.series('js-import'));
  gulp.watch('app/js-dev/**/*.js', gulp.series('js-import'));
})); //gulp watch

// for all files
gulp.task('build_styles', function() {
  return gulp.src('app/assets/css/**/*')
  .pipe(gulp.dest('dist/assets/css'));
});
gulp.task('build_fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
  .pipe(gulp.dest('dist/assets/fonts'));
});
gulp.task('build_scripts', function() {
  return gulp.src('app/assets/js/**/*')
  .pipe(gulp.dest('dist/assets/js'));
});
gulp.task('build_html', function() {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('dist'));
});
gulp.task('build_img', function() {
  return gulp.src('app/assets/img/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{
      removeViewBox: false
    }],
    use: [pngquant()]
  })))
  .pipe(gulp.dest('dist/assets/img'));
}); //gulp build_html

gulp.task('build', gulp.series('clean', 'sass', 'scripts', 'js-import', 'build_styles', 'build_fonts', 'build_scripts', 'build_html', 'build_img')); //gulp build
