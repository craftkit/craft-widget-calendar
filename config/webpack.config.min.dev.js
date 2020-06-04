
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.min.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-calendar.min.dev.js',
		library: 'Calendar',
		libraryTarget: 'window',
		globalObject: 'window'
	},
	externals: {
		'@craftkit/craft-uikit' : 'Craft',
	}
};
