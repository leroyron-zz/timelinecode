import { timeline } from "./timeline";
import "./timeline.code";
import "./timeline.scale";
import "./timeline.custom";

/** 
 * User: Use new TIMELINE() - {name:, length:}
 * @function TIMELINE - set name and/or length buffer/time of timeline
 */
/** TIMELINE entry */
export = function TIMELINE() {
    var options = new Array(
        {'name': "timeline"},
        {'length': !isNaN(arguments[0]) ? arguments[0] | 0 : 1000}
    )

    new timeline.construct(this, arguments, options)
}
