'use strict'
let gulp = require("gulp");
let sass = require("gulp-sass");
let jade = require("gulp-jade");

gulp.task("sass", () => {
	return gulp.src("./code/sass/**/*.sass")
		.pipe(sass())
		.pipe(gulp.dest("./dist/css"));
});

gulp.task("jade", () => {
	return gulp.src("./code/jade/*.jade")
	.pipe(jade())
	.pipe(gulp.dest("./dist/"));
});