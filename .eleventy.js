const htmlmin = require('html-minifier');

module.exports = function (config) {
	// html minify
	if (process.env.NODE_ENV == 'production') {
		config.addTransform('htmlmin', function (content, outputPath) {
			if (outputPath.endsWith('.html')) {
				let minified = htmlmin.minify(content, {
					useShortDoctype: true,
					removeComments: true,
					collapseWhitespace: true,
					minifyjs: { quote_style: 1 },
					preventAttributesEscaping: true,
					quoteCharacter: "'",
				});
				return minified;
			}

			return content;
		});
	}

	config.addPassthroughCopy('src/assets/images');
	config.addPassthroughCopy('src/assets/js');
	config.addPassthroughCopy({'node_modules/fullpage.js/vendors/scrolloverflow.min.js' : 'assets/js/scrolloverflow.min.js'});
	config.addPassthroughCopy({'node_modules/fullpage.js/dist/fullpage.min.css' : 'assets/css/fullpage.min.css'});
	config.addPassthroughCopy({'node_modules/fullpage.js/dist/fullpage.min.js': '/assets/js/fullpage.min.js'});
	config.addPassthroughCopy('src/assets/lightbox-plus-jquery.min.js');
	config.addPassthroughCopy('src/assets/lightbox.min.css');
	config.addPassthroughCopy({'src/assets/lightbox' : 'images'});
	return {
		passthroughFileCopy: true,
		markdownTemplateEngine: 'njk',
		templateFormats: ['html', 'njk', 'md'],
		dir: {
			input: 'src',
		},
	};
};
