
import * as Craft from '@craftkit/craft-uikit';

import { Day } from './Day.js';

/** 
 * Month
 * 
 * Collect Days and its view.
 * To fill up 6 week container, This object also has a part of days in prev month and next month.
 * 
 * @packagename Craft.Widget.Calendar.Month
 * 
 * @example
 * 
 * let month = new Month({ 
 *     yyyy     : '2020', 
 *     mm       : '01',
 *     delegate : this.delegate,
 *     Day      : Craft.Widget.Calendar.Day,
 * });
 * 
 * var day = month.index['2020-01-15'];
 * day.classes.push('today');
 * day.renderView();
 * 
 */
export class Month extends Craft.UI.View {
	
	/**
	 * Month constructor
	 * 
	 * @param {Object} options - options
	 * @param {String} options.yyyy - year
	 * @param {String} options.mm - month
	 * @param {Object} options.delegate - Calendar event handler
	 * @param {Craft.Widget.Calendar.Day} options.Day - Day class
	 * @param {Craft.Widget.Calendar.StyleSheet} options.StyleSheet - StyleSheet class
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.Calendar.Month';
		
		this.delegate   = options.delegate;
		this.dayClass   = options.Day;
		this.styleSheet = options.StyleSheet;
		
		if( Number(options.yyyy) ){
			this.yyyy = ('0000'+options.yyyy).slice(-4);
		}else{
			this.yyyy = moment().format('YYYY');
		}
		
		if( Number(options.mm) ){
			this.mm = ('00'+options.mm).slice(-2);
		}else{
			this.mm = moment().format('MM');
		}
		
		this.dd = '01';
		
		this.iso = this.yyyy + '-' + this.mm;
		
		this.prev_days = []; // array of Day object to fill the first week
		this.this_days = []; // array of Day object
		this.next_days = []; // array of Day object to fill the last week
		this.days      = []; // all of Day objects
		this.index     = {}; // iso8601 : Day object
		
		this.this_month = '';
		this.prev_month = '';
		this.next_month = '';
		
		this.today = moment();
		
		this.build();
	}
	
	/** 
	 * Build Days in this month. (internal utility called from the constructor)
	 * 
	 * @protected
	 */
	build(){
		this.this_month = new moment( this.iso + '-' + this.dd );
		this.prev_month = this.this_month.clone().subtract(1,'month');
		this.next_month = this.this_month.clone().add(1,'month');
		
		// prev month
		let prev_month_last_day  = this.prev_month.endOf('month').date();
		let prev_month_rest_days = this.prev_month.endOf('month').day() === 6 ? 0 : this.prev_month.endOf('month').day() + 1;
		let prev_month_month     = this.prev_month.format('MM');
		let prev_month_year      = this.prev_month.format('YYYY');
		
		let prev_month_weekday_cursor = 0;
		for( let i=prev_month_rest_days; i>=1; i-- ){
			let weekday = prev_month_weekday_cursor  % 7;
			let day = new this.dayClass({
				delegate   : this.delegate,
				yyyy       : prev_month_year,
				mm         : prev_month_month,
				dd         : prev_month_last_day - i + 1,
				classes    : ['weekday'+weekday,'prev_month'],
				StyleSheet : this.styleSheet,
			});
			day.loadView();
			this.prev_days.push(day);
			this.days.push(day);
			this.index[day.iso] = day;
			prev_month_weekday_cursor++;
		}
		
		// this month
		let this_month_year  = this.this_month.year();
		let this_month_month = this.this_month.month() + 1;
		
		let weekday_cursor = this.this_month.weekday();
		
		for( let i=0; i<this.this_month.daysInMonth(); i++ ){
			let weekday = weekday_cursor % 7;
			let day = new this.dayClass({
				delegate   : this.delegate,
				yyyy       : this_month_year,
				mm         : this_month_month,
				dd         : i + 1,
				classes    : ['weekday'+weekday,'this_month'],
				StyleSheet : this.styleSheet,
			});
			day.loadView();
			this.this_days.push(day);
			this.days.push(day);
			this.index[day.iso] = day;
			weekday_cursor++;
		}
		
		// next month
		let next_month_month     = this.next_month.month() + 1;
		let next_month_year      = this.next_month.year();
		let next_month_rest_days = 42 - (prev_month_rest_days + this.this_month.endOf('month').date());
		
		for( let i=0; i<next_month_rest_days; i++ ){
			let weekday = weekday_cursor % 7;
			let day = new this.dayClass({
				delegate   : this.delegate,
				yyyy       : next_month_year,
				mm         : next_month_month,
				dd         : i + 1,
				classes    : ['weekday'+weekday,'next_month'],
				StyleSheet : this.styleSheet,
			});
			day.loadView();
			this.next_days.push(day);
			this.days.push(day);
			this.index[day.iso] = day;
			weekday_cursor++;
		}
		
		// mark today
		if( this.index[this.today.format('YYYY-MM-DD')] ){
			this.index[this.today.format('YYYY-MM-DD')].classes.push('today');
		}
	}
	
	/** 
	 * Lifecycle method : viewDidLoad
	 * 
	 * deploy Days
	 * 
	 * @protected
	 */
	viewDidLoad(callback){
		this.days.map( (day) => this.appendView(day) );
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return this.styleSheet.month;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `<div class="root"></div>`;
	}
}
