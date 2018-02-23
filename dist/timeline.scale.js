"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = require("./timeline");
/** User: Use .scale() - to set up the GUI, scale and calendar functionality for timeline control */
var scale = /** @class */ (function () {
    /**
     * @param This - The object Modal
     * @param args - Object arguements{} thrown in by User:
     */
    function scale(This, args) {
        var date = new Date();
        var options = new Array({ 'scale': [
                { 'gui': [
                        { 'container': typeof document != 'undefined' ? document.body : null },
                        { 'x': 0 },
                        { 'y': 0 },
                        { 'width': undefined },
                        { 'height': undefined },
                        { 'ctx': {} }
                    ] },
                { 'phase': 'year' }
            ] }, { 'current': [
                { 'year': date.getFullYear() },
                { 'month': date.getMonth() + 1 },
                { 'day': date.getDate() + 1 },
                { 'hour': date.getHours() },
                { 'minute': date.getMinutes() },
                { 'second': date.getSeconds() },
                { 'millisecond': date.getMilliseconds() / 10 >> 0 },
                { 'hour24Format': false }
            ] });
        new timeline_1.timeline.construct(This, args, options);
    }
    return scale;
}());
exports.scale = scale;
timeline_1.timeline.construct.addon.push({ name: "scale", class: scale });
