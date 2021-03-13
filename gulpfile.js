// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sourcemaps    = require('gulp-sourcemaps');
const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const terser        = require('gulp-terser');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
var   replace       = require('gulp-replace');
const tinypng       = require('gulp-tinypng-compress');
const webp          = require('gulp-webp');
var   htmlmin       = require('gulp-htmlmin');
var   rename        = require("gulp-rename");
var   clean         = require('gulp-clean');

// File paths
const files = { 
    scssPath        : 'src/scss/**/*.scss',
    scssPathTo      : 'dist/css/',
    jsPath          : 'src/js/**/*.js',
    jsPath_concat   : 'src/js/concat/**/*.js',
    jsPath_separate : 'src/js/separate/**/*.js',
    jsPathTo        : 'dist/js/',
    imgPath         : 'src/imgs/**/*.{png,PNG,jpg,JPG,jpeg,JPEG}',
    imgPathTo       : 'dist/imgs/',
    svgsimgPath     : 'src/imgs/**/*.svg',
    svgsimgPathTo   : 'dist/imgs/',
    gifsimgPath     : 'src/imgs/**/*.gif',
    gifsimgPathTo   : 'dist/imgs/',
    webpsimgPath    : 'src/imgs/**/*.webp',
    webpsimgPathTo  : 'dist/imgs/',
    html_r          : 'site.html'
}

// Sass task: compiles the style.scss file into style.css
function scssTask(){    
    return src(files.scssPath)
        .pipe(sourcemaps.init()) // initialize sourcemaps first
        .pipe(sass()) // compile SCSS to CSS
        .pipe(postcss([ autoprefixer(), cssnano() ])) // PostCSS plugins
        .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
        .pipe(dest(files.scssPathTo)); // put final CSS in dist folder
}

// JS task: concatenates and uglifies JS files to script.js
function jsTask_concat(){
    return src([files.jsPath_concat])
        .pipe(concat('scsseco_app.js'))
        .pipe(terser())
        .pipe(dest(files.jsPathTo));
}

function jsTask_separate(){
    return src([files.jsPath_separate])
        .pipe(terser())
        .pipe(dest(files.jsPathTo+"/scsseco_app/"));
}

function jsTaskBS(){
    return src([
            // 'node_modules/bootstrap/js/dist/*.js',
            'node_modules/bootstrap/js/dist/util.js',           // All Bootstrap’s JavaScript files depend on util.js
            'node_modules/bootstrap/js/dist/index.js',          // ?
            // 'node_modules/bootstrap/js/dist/alert.js',          // https://getbootstrap.com/docs/4.5/components/alerts/
            // 'node_modules/bootstrap/js/dist/button.js',         // https://getbootstrap.com/docs/4.5/components/buttons/#button-plugin
            // 'node_modules/bootstrap/js/dist/carousel.js',       // https://getbootstrap.com/docs/4.5/components/carousel/
            // 'node_modules/bootstrap/js/dist/collapse.js',       // https://getbootstrap.com/docs/4.5/components/collapse/
            // 'node_modules/bootstrap/js/dist/dropdown.js',       // https://getbootstrap.com/docs/4.5/components/dropdowns/
            // 'node_modules/bootstrap/js/dist/modal.js',          // https://getbootstrap.com/docs/4.5/components/modal/
                // tooltip.js must be before popover.js
            // 'node_modules/bootstrap/js/dist/tooltip.js',        // https://getbootstrap.com/docs/4.5/components/tooltips/            
            // 'node_modules/bootstrap/js/dist/popover.js',        // https://getbootstrap.com/docs/4.5/components/popovers/
            // 'node_modules/bootstrap/js/dist/scrollspy.js',      // https://getbootstrap.com/docs/4.5/components/scrollspy/
            // 'node_modules/bootstrap/js/dist/tab.js',            // https://getbootstrap.com/docs/4.5/components/navs/#javascript-behavior
            // 'node_modules/bootstrap/js/dist/toast.js',          // https://www.w3schools.com/bootstrap4/bootstrap_ref_js_toasts.asp
        ])
        .pipe(concat('bootstrap.js'))
        .pipe(terser()) 
        .pipe(dest('vendor/bootstrap/js/'));
}

function jquery(){
    return src('node_modules/jquery/dist/jquery.min.js')
        // .pipe(terser()) 
        .pipe(dest('vendor/jquery/'));
}

function popperjs(){
    return src('node_modules/popper.js/dist/umd/popper.min.js')
        // .pipe(terser()) 
        .pipe(dest('vendor/popper/'));
}

// Gsap
function gsap(){
    return src('node_modules/gsap/dist/gsap.min.js')
        // .pipe(terser()) 
        .pipe(dest('vendor/gsap/'));
}
// GSAP ScrollTrigger
function gsap_ScrollTrigger(){
    return src('node_modules/gsap/dist/ScrollTrigger.min.js')
        // .pipe(terser()) 
        .pipe(dest('vendor/gsap/'));
}
// GSAP ScrollTo
function gsap_ScrollTo(){
    return src('node_modules/gsap/dist/ScrollToPlugin.min.js')
        // .pipe(terser()) 
        .pipe(dest('vendor/gsap/'));
}

// HTML task: minify site.html to iindex.html
function htmlTask() {
    return src('site.html')
        .pipe(htmlmin({ 
            collapseWhitespace              : true,
            collapseInlineTagWhitespace     : false,
            decodeEntities                  : true,
            minifyCSS                       : true,
            minifyJS                        : true,
            removeComments                  : true
        }))
        .pipe(dest('dist/'))
}
// Rename task: rename site.html to index.html in root
function renameTask() {
    return src('dist/*.html')
        .pipe(rename('index.html'))
        .pipe(dest('.'))
}
// Delete task: delete site.html in dist folder
function deleteTask() {
    return src('dist/*.html', { read: false })
        .pipe(clean())
}

// Cachebust
var cbString = new Date().getTime();
function cacheBustTask(){
    return src(['index.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));
}

// Copy svg, gifs and webp imgs bc tinypng cannot optimize them
function copysvgs() {
    return src(files.svgsimgPath)
        .pipe(dest(files.svgsimgPathTo))
}
function copygifs() {
    return src(files.gifsimgPath)
        .pipe(dest(files.gifsimgPathTo))
}
function copywebp() {
    return src(files.webpsimgPath)
        .pipe(dest(files.webpsimgPathTo))
}

// Minify Img
function minImg() {
    return src(files.imgPath)
        .pipe(tinypng({
            key: 'DwMzjHv0DYyR5mrMBtm3cBFqQLpFp032', // bogdan.s@fxoro.com
            // key: 'ZXMw587q2Tnzc7j1BcHVLmqhS9gksVy6', // k.bobbaru@gmail.com
            sigFile: 'src/imgs/.tinypng-sigs',
            log: true
        }))
        .pipe(dest(files.imgPathTo))
}

// Webp Images
function webpimgs() {
    return src(files.imgPath)
        .pipe(webp())
        .pipe(dest(files.imgPathTo))
}

// Edit index.html - imgs src
function editHTML() {
    return src(['index.html'])
        .pipe(replace('src/', 'dist/'))
        // .pipe(replace('<img src="', '<img data-src="')) // 4 lazyload
        .pipe(dest('.'))
}

// Edit csseco-style.css - imgs src
function editCSS() {
    return src(['dist/css/*.css'])
        .pipe(replace('../../src/imgs/', '../imgs/'))
        .pipe(dest('dist/css/.'))
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.scssPath, files.jsPath, files.html_r], 
        series(
            scssTask, 
            jsTask_concat, 
            jsTask_separate, 
            htmlTask,
            renameTask,
            deleteTask
        )
    );    
}

// When the site is ready to deploy
exports.deep = series(
    jquery,
    popperjs,
    scssTask, 
    jsTask_concat, 
    jsTask_separate, 
    jsTaskBS,
    gsap,
    gsap_ScrollTrigger,
    gsap_ScrollTo,
    htmlTask,    
    renameTask,
    deleteTask,
    cacheBustTask,
    editHTML,
    editCSS
);

// Minify via Tinypng
exports.tiny = series(
    copysvgs,
    copygifs,
    copywebp,
    minImg,
    )
    
// Minify via webp
exports.webp = series(
    copysvgs,
    copygifs,
    copywebp,
    webpimgs,
)

// Export the default Gulp task so it can be run
exports.default = series(
    scssTask, 
    jsTask_concat, 
    jsTask_separate, 
    jsTaskBS,
    htmlTask,
    watchTask
);