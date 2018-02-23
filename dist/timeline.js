"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Dev: Use .construct() - flexable object Modal builder - for users to throw in objects {} */
var timeline;
(function (timeline) {
    /** Dev: Use .addon() - Add your class to The object Modal chained modularity */
    var construct = /** @class */ (function () {
        // Object Oriented Class Constructor
        // Pair up object arguements
        /**
         * @param This - The object Modal
         * @param args - Object arguements{} thrown in by User:
         * @param options - The options [{}] set by Dev: to pair with arguements{} thrown in by User:
         */
        function construct(This, args, options) {
            var construct = function (This, args, options) {
                for (var o = 0; o < options.length; o++) {
                    var option = options[o];
                    var key = Object.keys(option)[0];
                    This[key] = option[key];
                    if (Array.isArray(option[key])) {
                        construct(This[key] = {}, args, option[key]);
                    }
                    else {
                        for (var a = 0; a < args.length; a++) {
                            var arg = args[a];
                            if (typeof arg == 'object') {
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
    }());
    timeline.construct = construct;
    /**
     * @param This - The object Modal building for chained modularity
     */
    var addon = /** @class */ (function () {
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
    }());
})(timeline = exports.timeline || (exports.timeline = {}));
