angular.module("outline", [])

.constant("name", "monk-sails-seed")

.constant("private", true)

.constant("version", "0.0.0")

.constant("description", "a Sails application")

.constant("keywords", [])

.constant("dependencies", {
	"include-all": "~0.1.3",
	"rc": "~0.5.0",
	"sails": "~0.11.4",
	"sails-disk": "~0.10.0"
})

.constant("devDependencies", {
	"browser-sync": "*",
	"coffee-script": "*",
	"gulp": "*",
	"gulp-angular-templatecache": "*",
	"gulp-coffee": "*",
	"gulp-concat": "*",
	"gulp-html-replace": "*",
	"gulp-if": "*",
	"gulp-inject": "*",
	"gulp-jade": "*",
	"gulp-minify-css": "*",
	"gulp-ng-annotate": "*",
	"gulp-ng-constant": "*",
	"gulp-plumber": "*",
	"gulp-replace": "*",
	"gulp-sass": "*",
	"gulp-uglify": "*",
	"gulp-util": "*",
	"gulp-watch": "*",
	"main-bower-files": "*",
	"yargs": "*"
})

.constant("scripts", {
	"debug": "node debug app.js",
	"start": "node app.js"
})

.constant("main", "app.js")

.constant("repository", {
	"type": "git",
	"url": "git://github.com/leibniz/bud.git"
})

.constant("author", "leibniz")

.constant("license", "")

;