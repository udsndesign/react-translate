var gulp   		= require('gulp'),
	open 		= require('gulp-open');

gulp.task('open', function(){
	var options = {app: 'chrome'};
	gulp.src(global.build.root+'index.html')
	.pipe(open(options));
});