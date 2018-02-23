"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = require("./timeline");
/** User: Use .custom() - ... */
var custom = /** @class */ (function () {
    /**
    * @param This - The object Modal
    * @param args - Object arguements{} thrown in by User:
    */
    function custom(This, args) {
        var date = new Date();
        var options = new Array({ 'custom1': [
                { 'gui': [
                        { 'container': typeof document != 'undefined' ?
                                document.body : null },
                        { 'x': 0 },
                        { 'y': 0 },
                        { 'width': undefined },
                        { 'height': undefined },
                        { 'ctx': {} }
                    ] }
            ] }, { 'custom2': 'string' });
        new timeline_1.timeline.construct(This, args, options);
    }
    return custom;
}());
exports.custom = custom;
timeline_1.timeline.construct.addon.push({ name: "custom", class: custom });
