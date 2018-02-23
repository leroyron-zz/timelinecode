"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = require("./timeline");
/** User: Use .code() - to set up the GUI and access for the timeline */
var code = /** @class */ (function () {
    /**
     * @param This - The object Modal
     * @param args - Object arguements{} thrown in by User:
     */
    function code(This, args) {
        var options = new Array({ 'code': {} }, { 'gui': [
                { 'container': typeof document != 'undefined' ? document.body : null },
                { 'x': 0 },
                { 'y': 0 },
                { 'width': undefined },
                { 'height': undefined },
                { 'ctx': {} }
            ] }, { 'access': access });
        /**
         * User: Use .access() control the behavior and Data of timeline
         */
        function access() { new accessChain(this, arguments); return this; }
        new timeline_1.timeline.construct(This, args, options);
    }
    return code;
}());
exports.code = code;
timeline_1.timeline.construct.addon.push({ name: "code", class: code });
var accessChain = /** @class */ (function () {
    /**
     * User: Use .access() control the behavior and Data of timeline
     * @param This - The object Modal
     * @param args - Object arguements{} thrown in by User:
     */
    function accessChain(This, args) {
        var options = new Array({ 'access': [
                { 'continuance': true },
                { 'skip': 0 },
                { 'rCount': 0 },
                { 'tCount': 0 },
                { 'revert': true },
                { 'mCount': 0 },
                { 'leap': -999999 },
                { 'reset': false }
            ] });
        new timeline_1.timeline.construct(This, args, options);
    }
    return accessChain;
}());
