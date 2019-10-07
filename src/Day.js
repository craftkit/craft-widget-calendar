
import * as Craft from 'craft-uikit';

/** 
 * Day
 * 
 * Represent day.
 * 
 * @packagename Craft.Widget.Calendar.Day
 * 
 * @example
 * 
 * // You may want to design your own Day expression.
 * // This is just an example.
 * // Below case, 'has_note' css class will be defined or loaded in your delegate.handleSelectCalendarMonth.
 * 
 * class MyDay extends Craft.Widget.Calendar.Day {
 *     style(componentId){
 *         return super.style(componentId) + `
 *             .today { background-color: lightgreen; }
 *             .has_note { background-color: yellowgreen; }
 *         `;
 *     }
 * }
 * 
 * // calendar build by MyDay
 * 
 * let calendar = new Craft.Widget.Calendar.View({
 *     yyyy     : '2020',
 *     mm       : '07',
 *     delegate : this,
 *     Day      : MyDay,
 * });
 * this.appendView(calendar);
 * 
 * // instantiate MyDay directly
 * 
 * let day = new MyDay({ 
 *     delegate   : this.delegate,
 *     yyyy       : '2020',
 *     mm         : '07',
 *     dd         : '17',
 *     classes    : ['weekday0','prev_month','has_note'],
 *     StyleSheet : this.styleSheet,
 * });
 * 
 */
export class Day extends Craft.UI.View {
	
	/**
	 * Day constructor
	 * 
	 * @param {Object} options - options
	 * @param {String} options.yyyy - year
	 * @param {String} options.mm - month
	 * @param {String} options.dd - day
	 * @param {Object} options.classes - CSS classes to be applied. (CSS will be defined in your Craft.Widget.Calendar.Month[View]#styleSheet.)
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.Calendar.Day';
		
		this.delegate   = options.delegate;
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
		
		if( Number(options.dd) ){
			this.dd = ('00'+options.dd).slice(-2);
		}else{
			this.dd = moment().format('DD');
		}
		
		this.iso = this.yyyy + '-' + this.mm + '-' + this.dd;
		this.moment = moment(this.iso);
		
		this.UserData = {};
		this.classes = options.classes || [];
	}
	
	/** 
	 * click event handler
	 * @protected
	 */
	click(){
		this.delegate.handleSelectCalendarDay(this);
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return this.styleSheet.day;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root ${this.classes.join(' ')}" onclick="Craft.Core.ComponentStack.get('${componentId}').click();">
				${Number(this.dd)}
			</div>
		`;
	}
	
}
