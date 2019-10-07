
import * as Craft from 'craft-uikit';

import { Month } from './Month.js';
import { Day } from './Day.js';
import { StyleSheet } from './StyleSheet.js';

/** 
 * View
 * 
 * View is a Facade for calendar elements.
 * 
 * And also, View and its sub-class has responsibility for layouting Calendar and handling event like: "go to next month".
 * 
 * @packagename Craft.Widget.Calendar.View
 * 
 * @example
 * 
 * // sample of Calendar consumer:
 * 
 * class Page extends Craft.UI.DefaultRootViewController {
 *     
 *     viewDidLoad(callback){
 *         this.calendar = new Craft.Widget.Calendar.View({
 *             yyyy     : '2020',
 *             mm       : '07',
 *             delegate : this,
 *             Day      : Craft.Widget.Calendar.Day,
 *         });
 *         this.appendView(this.calendar);
 *     }
 *     
 *     loadCalendarMetaDataFor(yyyy,mm,callback){
 *         callback({ '2020-07-15' : {class:'holiday'} });
 *     }
 *     
 *     handleSelectCalendarMonth(month){
 *         loadCalendarMetaDataFor(month.yyyy,month.mm, (meta) => {
 *             Object.keys(meta).forEach( iso => {
 *                 let day = this.calendar.month.index[iso] // get Day object (skip checking Day existence)
 *                 day.classes.push(meta[iso].class);       // if hit, the meta data should have class 'holiday'
 *                 day.renderView();                        // ok, lets update view
 *             });
 *         });
 *     }
 *     
 *     handleSelectCalendarDay(day){
 *         window.location = `//${day.iso}.html`; // go to selected page
 *     }
 * }
 * 
 * // sample of customized View
 * 
 * class MyCalendarView extends Craft.Widget.Calendar.View {
 *     viewDidLoad(callback){
 *         this.appendView({ target:this.shadow.getElementById('navi'), component:new MyPrev({delegate:this}) });
 *         this.appendView({ target:this.shadow.getElementById('navi'), component:new MyNext({delegate:this}) });
 *         super.viewDidLoad(callback);
 *     }
 *     updateHeader(){
 *         this.shadow.getElementById('header').innerHTML = this.month.yyyy + '/' + this.month.mm; // YYYY/MM instead of default YYYY-MM
 *     }
 *     template(componentId){
 *         return `
 *             <div class="root">
 *                 <div id="header" class="header"></div>
 *                 <div id="month" class="month"></div>
 *                 <div id="navi" class="navi"></div>
 *             </div>
 *         `;
 *     }
 * }
 * 
 * class MyPrev extends Craft.UI.View {
 *     constructor(options){
 *         super();
 *         this.delegate = options.delegate;
 *     }
 *     template(componentId){
 *         return `
 *             <div class="root" onclick="${componentId}.delegate.prev();"> ＜${componentId}.month.prev_month.format('MM') </div>
 *         `;
 *     }
 * }
 * 
 * class MyNext extends Craft.UI.View {
 *     template(componentId){
 *         return `
 *             <div class="root" onclick="${componentId}.delegate.next();"> ${componentId}.month.next_month.format('MM')＞ </div>
 *         `;
 *     }
 * }
 * 
 */
export class View extends Craft.UI.View {
	
	/**
	 * Calendar constructor
	 * 
	 * @param {Object} options - options
	 * @param {String} options.yyyy - Year
	 * @param {String} options.mm - Month
	 * @param {Object} options.delegate - Calendar event handler
	 * @param {Craft.Widget.Calendar.Day} options.Day - Day class (optional)
	 */
	constructor(options){
		super();
		this.packagename = 'Craft.Widget.Calendar.View';
		if( !options ){ options = {}; }
		
		this.delegate   = options.delegate;
		this.dayClass   = options.Day || Day;
		this.styleSheet = options.StyleSheet || StyleSheet;
		
		if( Number(options.yyyy) ){
			this.yyyy = ('0000'+String(options.yyyy)).slice(-4);
		}else{
			this.yyyy = moment().format('YYYY');
		}
		
		if( Number(options.mm) ){
			this.mm = ('00'+String(options.mm)).slice(-2);
		}else{
			this.mm = moment().format('MM');
		}
		
		this.index = {}; // { YYYY-MM : Month object }
		
		let this_month = new Month({
			delegate   : this.delegate,
			yyyy       : this.yyyy,
			mm         : this.mm,
			Day        : this.dayClass,
			StyleSheet : this.styleSheet,
		});
		this.month = this_month;
		this.index[ this.yyyy + '-' + this.mm ] = this.month;
	}
	
	/**
	 * Lifecycle method : viewDidLoad
	 * 
	 * Create Month.
	 * 
	 * @protected
	 */
	viewDidLoad(callback){
		this.delegate.handleSelectCalendarMonth(this.index[ this.yyyy + '-' + this.mm ]);
		
		this.appendView({
			target    : this.shadow.getElementById('month'),
			component : this.index[ this.yyyy + '-' + this.mm ]
		});
		
		this.updateHeader();
		
		if(callback){ callback(); }
	}
	
	/**
	 * move to previous month
	 * @public
	 */
	prev(){
		let prev_month = this.month.prev_month;
		let this_month = '';
		let prev_month_yyyy = prev_month.format('YYYY');
		let prev_month_mm   = prev_month.format('MM');
		let prev_month_yyyymm = prev_month_yyyy + '-' + prev_month_mm
		if( this.index[ prev_month_yyyymm ] ){
			this_month = this.index[ prev_month_yyyymm ];
		}else{
			this_month = new Month({
				delegate   : this,
				yyyy       : prev_month_yyyy,
				mm         : prev_month_mm,
				Day        : this.dayClass,
				StyleSheet : this.styleSheet,
			});
			this.index[ prev_month_yyyymm ] = this_month;
		}
		this.removeView(this.month);
		
		this.delegate.handleSelectCalendarMonth(this_month);
		
		this.month = this_month;
		this.appendView({
			target    : this.shadow.getElementById('month'),
			component : this.month
		});
		
		this.updateHeader();
	}
	
	/**
	 * move to next month
	 * @public
	 */
	next(){
		let next_month = this.month.next_month;
		let this_month = '';
		let next_month_yyyy = next_month.format('YYYY');
		let next_month_mm   = next_month.format('MM');
		let next_month_yyyymm = next_month_yyyy + '-' + next_month_mm
		if( this.index[ next_month_yyyymm ] ){
			this_month = this.index[ next_month_yyyymm ];
		}else{
			this_month = new Month({
				delegate   : this,
				yyyy       : next_month_yyyy,
				mm         : next_month_mm,
				Day        : this.dayClass,
				StyleSheet : this.styleSheet,
			});
			this.index[ next_month_yyyymm ] = this_month;
		}
		this.removeView(this.month);
		
		this.delegate.handleSelectCalendarMonth(this_month);
		
		this.month = this_month;
		this.appendView({
			target    : this.shadow.getElementById('month'),
			component : this.month
		});
		this.delegate.handleSelectCalendarMonth(this_month);
		
		this.updateHeader();
	}
	
	/** 
	 * update Header
	 * 
	 * Should be called just after you change month.
	 * This is default behavior. To implement your own header design, override this method.
	 * 
	 * @public
	 */
	updateHeader(){
		this.shadow.getElementById('header').innerHTML = this.month.iso;
	}
	
	/** 
	 * style
	 * @protected
	 */
	style(componentId){
		return this.styleSheet.calendar;
	}
	
	/** 
	 * template
	 * @protected
	 */
	template(componentId){
		return `
			<div class="root">
				<div id="header" class="header"></div>
				<div id="month" class="month"></div>
				<div id="navi" class="navi">
					<div id="prev" class="prev" onclick="Craft.Core.ComponentStack.get('${componentId}').prev();"> ← <i class="fa fa-arrow-left fa-fw"></i></div>
					<div id="next" class="next" onclick="Craft.Core.ComponentStack.get('${componentId}').next();"> → <i class="fa fa-arrow-right fa-fw"></i></div>
				</div>
			</div>
		`;
	}

}
