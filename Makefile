.PHONY: css
css:
	mkdir -p bundle
	postcss --watch  --use postcss-import --use autoprefixer css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,build/app.js'

.PHONY: js
js:
	mkdir -p build
	webpack --progress --watch js/app.js build/app.js --module-bind "js=babel" --module-bind "jsx=babel" -d

.PHONY: all
all:
	(make css & make js & make server & wait)

.PHONY: clean
clean:
	rm -r bundle
	rm -r build
