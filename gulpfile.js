/*
	#
*/

var gulp 		= require("gulp");
var concat      = require("gulp-concat");
var merge       = require("merge-stream");
var jst         = require("gulp-jst-concat");
var rename 		= require("gulp-rename");
var sass 		= require("gulp-sass");
var bsync 		= require("browser-sync");

/*
	# Define main gulp tasks
*/

gulp.task("default", [ "copy", "jst", "js", "sass", "server"] );
gulp.task("build", [ "copy", "jst", "js", "sass"] );

/*
    ## Copy over files
*/

gulp.task( "copy", function() {

    // Copy over stuff
    var html = gulp.src( ["src/index.html"] )
                    .pipe( gulp.dest("build/") )
                    ;

    var fonts = gulp.src( ["src/assets/fonts/**/"] )
                    .pipe( gulp.dest("build/fonts") )
                    ;

    var js = gulp.src( ["src/assets/js/**/"] )
                    .pipe( gulp.dest("build/js") )
                    ;

    var img = gulp.src( ["src/assets/img/**/"] )
                    .pipe( gulp.dest("build/img") )
                    ;
    var merged = merge( html, fonts);
    merged.add(js);
    merged.add(img);


    return merged;

});


/*
    ## Bundle the JS
*/

gulp.task('js', function() {

    // Compile
    return  gulp.src(
                    [   
                        'src/app/**/*.js',
                    ]
                )
                .pipe( concat('bundle.js') )
                .pipe( gulp.dest( 'build/js/' ) )
                ;
});
gulp.task('js-watch', ['copy','js'], bsync.reload);


/*
    ## Compile tempaltes
*/

gulp.task('jst', function() {

    // Compile
    return  gulp.src(
                    [   
                        'src/app/**/*.html',
                    ]
                )
                .pipe( jst( "templates.js" , 
                            {
                                renameKeys: ['^.*app/(.*).html$', '$1']
                            }
                        ) )
                .pipe( gulp.dest( 'build/js/' ) )
                ;
});
gulp.task('jst-watch', ['jst'], bsync.reload);


/*
    ## Compile the SASS into a single CSS file
*/

gulp.task('sass', function() {

    // Compile
    return  gulp.src('src/assets/scss/index.scss')
                .pipe( sass().on( 'error', sass.logError ) )
                // .pipe( autoprefixer() )
                .pipe( rename('style.css') )
                .pipe( gulp.dest( 'build/css/' ) )
                .pipe( bsync.stream() )
                ;
});

/*
    ## Development web server and file watcher
*/

gulp.task("server", function() {

	bsync.init( {
        server: './build',
        open: false
    });

    // Watch files
    gulp.watch( 'src/app/*.js', ['js-watch'] );
    gulp.watch( 'src/app/**/*.js', ['js-watch'] );
    gulp.watch( 'src/app/**/*.html', ['jst-watch'] );
    gulp.watch( 'src/assets/scss/**/*.scss', ['sass'] );
    gulp.watch( [   'src/assets/js/**/*.js',
                    'src/assets/js/**/*.json'
                ], ["js-watch"] )

    gulp.watch( 'src/**/*.html' ).on( 'change', bsync.reload );

});