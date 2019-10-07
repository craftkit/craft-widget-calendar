
/** 
 * default CSS
 * 
 * @namespace Craft.Widget.Calendar.StyleSheet
 * @packagename Craft.Widget.Calendar.StyleSheet
 */
export var StyleSheet = {
	
	/**
	 * CSS for layouting Header, Month and Navi
	 * @protected
	 */
	calendar : `
		* { box-sizing:border-box; margin:0; padding:0; }
		:host {}
		.root {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			background-color: #fff;
		}
		.header { width:100%; margin-left:auto; margin-right:auto; }
		.month { width:100%; margin-left:auto; margin-right:auto; }
		.navi { width:100%; margin-left:auto; margin-right:auto; display:flex; }
		.prev { width:100%; cursor:pointer; text-align:right;  }
		.next { width:100%; cursor:pointer; margin-left:auto; text-align:left; }
	`,
	
	/**
	 * CSS for Header object
	 * @protected
	 */
	header : `
		.root {}
	`,
	
	/**
	 * CSS for Month object
	 * @protected
	 */
	month : `
		* { box-sizing:border-box; margin:0; padding:0; }
		:host {
			width: 100%;
		}
		.root {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	`,
	
	/**
	 * CSS for Day object
	 * @protected
	 */
	day : `
		* { box-sizing:border-box; margin:0; padding:0; }
		:host {
			width: 14.28%;
		}
		.root {
			text-align: center;
			cursor: pointer;
		}
		.root:hover {
			background-color: yellowgreen;
		}
		
		/* weekday(sunday-saturday) should be applied at first */
		
		/* sunday */
		.weekday0 {
			color: #f00;
		}
		/* monday */
		.weekday1 {
			color: #555;
		}
		/* tuesday */
		.weekday2 {
			color: #555;
		}
		/* wednesday */
		.weekday3 {
			color: #555;
		}
		/* thursday */
		.weekday4 {
			color: #555;
		}
		/* friday */
		.weekday5 {
			color: #555;
		}
		/* saturday */
		.weekday6 {
			color: #00f;
		}
		
		/* whether day is in this month or not */
		.prev_month {
			pointer-events: none;
			opacity: 0.5;
		}
		.this_month {
			pointer-events: all;
		}
		.next_month {
			pointer-events: none;
			opacity: 0.5;
		}
		
		/* mark today */
		.today {
			color: #0f0;
		}
	`
	
};
