
import { View } from './src/View.js';
import { Month } from './src/Month.js';
import { Day } from './src/Day.js';
import { StyleSheet } from './src/StyleSheet.js';

const Packages = {
	View       : View,
	Month      : Month,
	Day        : Day,
	StyleSheet : StyleSheet,
};

Packages.inject = function(Craft){
	Craft.Widget = Craft.Widget || {};
	if( !Craft.Widget.Calendar ){
		Craft.Widget.Calendar = Packages;
	}
};

export default Packages;

