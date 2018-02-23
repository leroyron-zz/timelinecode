(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.TIMELINE = f()}})(function(){var define,module,exports;return (function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var timeline_1 = require("./timeline");
require("./timeline.code");
require("./timeline.scale");
require("./timeline.custom");
module.exports = function TIMELINE() {
    var options = new Array({ 'name': "timeline" }, { 'length': !isNaN(arguments[0]) ? arguments[0] | 0 : 1000 });
    new timeline_1.timeline.construct(this, arguments, options);
};

},{"./timeline":5,"./timeline.code":2,"./timeline.custom":3,"./timeline.scale":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = require("./timeline");
/** User: Use .code() - to set up the GUI and access for the timeline */
var code = /** @class */function () {
    /**
     * @param This - The object Modal
     * @param args - Object arguements{} thrown in by User:
     */
    function code(This, args) {
        var options = new Array({ 'code': {} }, { 'gui': [{ 'container': typeof document != 'undefined' ? document.body : null }, { 'x': 0 }, { 'y': 0 }, { 'width': undefined }, { 'height': undefined }, { 'ctx': {} }] }, { 'access': access });
        /**
         * User: Use .access() control the behavior and Data of timeline
         */
        function access() {
            new accessChain(this, arguments);return this;
        }
        new timeline_1.timeline.construct(This, args, options);
    }
    return code;
}();
exports.code = code;
timeline_1.timeline.construct.addon.push({ name: "code", class: code });
var accessChain = /** @class */function () {
    /**
     * User: Use .access() control the behavior and Data of timeline
     * @param This - The object Modal
     * @param args - Object arguements{} thrown in by User:
     */
    function accessChain(This, args) {
        var options = new Array({ 'access': [{ 'continuance': true }, { 'skip': 0 }, { 'rCount': 0 }, { 'tCount': 0 }, { 'revert': true }, { 'mCount': 0 }, { 'leap': -999999 }, { 'reset': false }] });
        new timeline_1.timeline.construct(This, args, options);
    }
    return accessChain;
}();

},{"./timeline":5}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = require("./timeline");
/** User: Use .custom() - ... */
var custom = /** @class */function () {
    /**
    * @param This - The object Modal
    * @param args - Object arguements{} thrown in by User:
    */
    function custom(This, args) {
        var date = new Date();
        var options = new Array({ 'custom1': [{ 'gui': [{ 'container': typeof document != 'undefined' ? document.body : null }, { 'x': 0 }, { 'y': 0 }, { 'width': undefined }, { 'height': undefined }, { 'ctx': {} }] }] }, { 'custom2': {} });
        new timeline_1.timeline.construct(This, args, options);
    }
    return custom;
}();
exports.custom = custom;
timeline_1.timeline.construct.addon.push({ name: "custom", class: custom });

},{"./timeline":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timeline_1 = require("./timeline");
/** User: Use .scale() - to set up the GUI, scale and calendar functionality for timeline control */
var scale = /** @class */function () {
    /**
     * @param This - The object Modal
     * @param args - Object arguements{} thrown in by User:
     */
    function scale(This, args) {
        var date = new Date();
        var options = new Array({ 'scale': [{ 'gui': [{ 'container': typeof document != 'undefined' ? document.body : null }, { 'x': 0 }, { 'y': 0 }, { 'width': undefined }, { 'height': undefined }, { 'ctx': {} }] }, { 'phase': 'year' }] }, { 'current': [{ 'year': date.getFullYear() }, { 'month': date.getMonth() + 1 }, { 'day': date.getDate() + 1 }, { 'hour': date.getHours() }, { 'minute': date.getMinutes() }, { 'second': date.getSeconds() }, { 'millisecond': date.getMilliseconds() / 10 >> 0 }, { 'hour24Format': false }] });
        new timeline_1.timeline.construct(This, args, options);
    }
    return scale;
}();
exports.scale = scale;
timeline_1.timeline.construct.addon.push({ name: "scale", class: scale });

},{"./timeline":5}],5:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
/** Dev: Use .construct() - flexable object Modal builder - for users to throw in objects {} */
var timeline;
(function (timeline) {
    /** Dev: Use .addon() - Add your class to The object Modal chained modularity */
    var construct = /** @class */function () {
        // Object Oriented Class Constructor
        // Pair up object arguements
        /**
         * @param This - The object Modal
         * @param args - Object arguements{} thrown in by User:
         * @param options - The options [{}] set by Dev: to pair with arguements{} thrown in by User:
         */
        function construct(This, args, options) {
            var construct = function construct(This, args, options) {
                for (var o = 0; o < options.length; o++) {
                    var option = options[o];
                    var key = Object.keys(option)[0];
                    This[key] = option[key];
                    if (Array.isArray(option[key])) {
                        construct(This[key] = {}, args, option[key]);
                    } else {
                        for (var a = 0; a < args.length; a++) {
                            var arg = args[a];
                            if ((typeof arg === "undefined" ? "undefined" : _typeof(arg)) == 'object') {
                                Object.keys(arg).forEach(function (key) {
                                    if (option[key]) {
                                        This[key] = arg[key];
                                    }
                                });
                            }
                        }
                    }
                }
            };
            construct(This, args, options);
            new addon(This);
        }
        /** Dev: Use .push() - Add a {name: <string> and class: <class>} to Array for chained modal build  */
        construct.addon = [];
        return construct;
    }();
    timeline.construct = construct;
    /**
     * @param This - The object Modal building for chained modularity
     */
    var addon = /** @class */function () {
        /**
         * @param This - The object Modal building for chained modularity
         */
        function addon(This) {
            for (var a = 0; a < construct.addon.length; a++) {
                if (!This[construct.addon[a].name])
                    /**
                     * @param _name - The name of the addon
                     * @param _class - The class of the addon
                     */
                    (function (_name, _class) {
                        /** chained name .() */
                        var methodAddonName = _name;
                        /** chained class */
                        var constructClass = _class;
                        /** index just incase */
                        var index = a;
                        /**
                         * ...
                         */
                        This[methodAddonName] = function () {
                            // construct.addon.splice(index, 1)
                            new constructClass(this, arguments);
                            /** return modal */
                            return this;
                        };
                    })(construct.addon[a].name, construct.addon[a].class);
            }
        }
        return addon;
    }();
})(timeline = exports.timeline || (exports.timeline = {}));

},{}]},{},[1])(1)
});

//# sourceMappingURL=timelinecode.js.map
