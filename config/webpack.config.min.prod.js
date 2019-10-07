
var path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.min.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-calendar.min.js',
		library: 'Calendar',
		libraryTarget: 'window',
		globalObject: 'window'
	},
	externals: {
		'craft-uikit' : 'Craft',
	}
};
