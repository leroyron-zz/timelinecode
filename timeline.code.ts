import { timeline } from "./timeline";
/** User: Use .code() - to set up the GUI and access for the timeline */
export class code {
    /**
     * @param This - The object Modal
     * @param args - Object arguments{} thrown in by User:
     */
    constructor(This: object, args: any) {
        var options = new Array(
            {'code': {}},
            {'gui': [
                {'container': typeof document != 'undefined' ? document.body : null},// nodejs requires typeof 'undefined'
                {'x': 0},
                {'y': 0},
                {'width': undefined},
                {'height': undefined},
                {'ctx': {}}
            ]},
            {'access': access} 
        )
        /**
         * User: Use .access() control the behavior and Data of timeline
         */
        function access () { new accessChain(this, arguments); return this }
        
        new timeline.construct(This, args, options)
    }
}
timeline.construct.addon.push({name: "code", class: code})

class accessChain {
    /**
     * User: Use .access() control the behavior and Data of timeline
     * @param This - The object Modal
     * @param args - Object arguments{} thrown in by User:
     */
    constructor(This: object, args: any) {
        var options = new Array(
            {'access': [
                {'continuance': true},
                {'skip': 0}, 
                {'rCount': 0}, 
                {'tCount': 0}, 
                {'revert': true}, 
                {'mCount': 0}, 
                {'leap': -999999}, 
                {'reset': false}
            ]}
        )
        
        new timeline.construct(This, args, options)
    }
}