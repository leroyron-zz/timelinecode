import { timeline } from "./timeline";
/** User: Use .scale() - to set up the GUI, scale and calendar functionality for timeline control */
export class scale {
    /**
     * @param This - The object Modal
     * @param args - Object arguments{} thrown in by User:
     */
    constructor(This: object, args: any) {
        var date = new Date()
        var options = new Array(
            {'scale': [
                {'gui': [
                    {'container': typeof document != 'undefined' ? document.body : null},
                    {'x': 0},
                    {'y': 0},
                    {'width': undefined},
                    {'height': undefined},
                    {'ctx': {}}
                ]},
                {'phase':'year'}
            ]},
            {'current': [
                {'year': date.getFullYear()}, 
                {'month': date.getMonth() + 1},
                {'day': date.getDate() + 1},
                {'hour': date.getHours()},
                {'minute': date.getMinutes()},
                {'second': date.getSeconds()},
                {'millisecond': date.getMilliseconds() / 10 >> 0},
                {'hour24Format': false}
            ]}
        )
        
        new timeline.construct(This, args, options)
    }
}
timeline.construct.addon.push({name: "scale", class: scale})