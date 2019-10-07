
var path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname,'../dist'),
		filename: 'craft-widget-calendar.umd.js',
		library: 'Calendar',
		libraryTarget: 'umd',
	},
	externals: {
		'craft-uikit' : 'Craft'
	}
};
