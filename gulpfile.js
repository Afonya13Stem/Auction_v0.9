var gulp 		= require('gulp'),
	browserSync = require('browser-sync');


var paths = {
	styles : ['app/**/*.css'],
	pages : ['app/**/*.html'],
	scripts : ['app/**/*.js']
};	

gulp.task('browser-sync',function(){

	browserSync.init({
		 server: {
        baseDir: "./app"
    },
    tunnel: false,
    notify: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
	});
});

gulp.task('watch',['browser-sync'], function(){
	gulp.watch(paths.styles, browserSync.reload);
	gulp.watch(paths.pages, browserSync.reload);
	gulp.watch(paths.scripts, browserSync.reload);
});