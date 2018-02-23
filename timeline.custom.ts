import { timeline } from "./timeline";
/** User: Use .custom() - ... */
export class custom {
    /**
    * @param This - The object Modal
    * @param args - Object arguments{} thrown in by User:
    */
    constructor(This: object, args: any) {
        var date = new Date()
        var options = new Array(
            {'custom1': [
                {'gui': [
                    {'container': typeof document != 'undefined' ? 
                    document.body : null},
                    {'x': 0},
                    {'y': 0},
                    {'width': undefined},
                    {'height': undefined},
                    {'ctx': {}}
                ]}
            ]},
            {'custom2': {}}
        )
        
        new timeline.construct(This, args, options)
    }
}
timeline.construct.addon.push({name: "custom", class: custom})