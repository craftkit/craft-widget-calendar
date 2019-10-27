
# Calendar widget

Fully customizable JavaScript calendar widget for Craftkit.

## Requirement

This widget requires [Craft-UIkit](https://github.com/craftkit/craft-uikit) and [Moment.js](https://momentjs.com).

## Demo

Here is a [Pull-down calendar demo](https://codepen.io/raykitajima/pen/vYYYoMv) working with [craft-widget-quicktools](https://github.com/craftkit/craft-widget-quicktools).

## Sample

Calendar with you appointment note.

```html 
<html>
<head>
    <title>Calendar demo</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
    <style>html,body { width: 100%; height: 100%; box-sizing:border-box; margin:0; padding:0; }</style>
    <script src="https://unpkg.com/@craftkit/craft-uikit/dist/craft-uikit.min.js"></script>
    <script src="https://unpkg.com/@craftkit/craft-widget-calendar/dist/craft-widget-calendar.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    
    <script>
        // prepare demo data
        var meta = {};
        var this_month = moment();
        var prev_month = this_month.clone().subtract(1,'month');
        var next_month = this_month.clone().add(1,'month');
        meta[ prev_month.date(10).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 11:00' };
        meta[ this_month.date(15).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 9:00' };
        meta[ this_month.date(24).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 15:00' };
        meta[ next_month.date(20).format('YYYY-MM-DD') ] = { class:'has_note', note:'appointment 14:00' };
        
        window.onload = function(){
            var handler = {
                handleSelectCalendarMonth : (month) => {
                    month.this_days.forEach( day => {
                        if( meta[day.iso] ){
                            day.classes.push(meta[day.iso].class); // apply has_note css class
                            day.note = meta[day.iso].note; // set metadata
                            day.renderView(); // re-render view
                        }
                    });
                },
                handleSelectCalendarDay : (day) => {
                    alert( day.note || 'Free!' );
                }
            };
            
            class MyDay extends Craft.Widget.Calendar.Day {
                constructor(options){
                    super(options);
                    this.note = '';
                }
                style(componentId){
                    return super.style(componentId) + `
                        .today { background-color: lightgreen; }
                        .has_note { background-color: #f2eb77; }
                    `;
                }
            }
            
            var calendar = new Craft.Widget.Calendar.View({
                yyyy       : this_month.format('YYYY'),
                mm         : this_month.format('MM'),
                delegate   : handler,
                Day        : MyDay,
            });
            
            Craft.Core.Bootstrap.boot({
                didBootApplication : function(options){
                    Craft.Core.Defaults.ALLOW_COMPONENT_SHORTCUT = true;
                    calendar.loadView();
                    document.getElementById('CraftRoot').appendChild(calendar.view);
                }
            });
        };
    </script>
</head>
<body id="CraftRoot">
</body>
</html>

``` 


## License

MIT

