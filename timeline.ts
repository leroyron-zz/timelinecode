/** Dev: Use .construct() - flexible object Modal builder - for users to throw in objects {} */
export namespace timeline {
    /** Dev: Use .addon() - Add your class to The object Modal chained modularity */
    export class construct {
        /** Dev: Use .push() - Add a {name: <string> and class: <class>} to Array for chained modal build  */
        static addon: Array<any> = [];
        // Object Oriented Class Constructor
        // Pair up object arguments
        /**
         * @param This - The object Modal
         * @param args - Object arguments{} thrown in by User:
         * @param options - The options [{}] set by Dev: to pair with arguments{} thrown in by User:
         */
        constructor(This: object, args: any, options: Array<any>) {
            var construct = function (This: object, args: any, options: Array<any>) {
                for (var o = 0; o < options.length; o++) {
                    var option = options[o]
                    var key = Object.keys(option)[0]
                    This[key] = option[key]
                    if (Array.isArray(option[key])) {
                        construct(This[key] = {}, args, option[key])
                    } else {
                        for (var a = 0; a < args.length; a++) {
                            var arg = args[a]
                            if (typeof arg == 'object') {
                                Object.keys(arg).forEach(function (key: any) {
                                    if (option[key]) { 
                                        This[key] = arg[key]
                                    }
                                });
                            }
                        }
                    }
                }
            }
            construct(This, args, options)
            new addon(This)
        }
    }

    /**
     * @param This - The object Modal building for chained modularity
     */
    class addon {
        /**
         * @param This - The object Modal building for chained modularity
         */
        constructor (This: object){
            for (var a = 0; a < construct.addon.length; a++) {
                if (!This[construct.addon[a].name])
                /**
                 * @param _name - The name of the addon
                 * @param _class - The class of the addon
                 */
                (function (_name, _class) {
                    /** chained name .() */
                    var methodAddonName = _name
                    /** chained class */
                    var constructClass = _class
                    /** index just incase */
                    var index = a
                    /**
                     * ...
                     */
                    This[methodAddonName] = function () {
                        // construct.addon.splice(index, 1)
                        new constructClass(this, arguments)
                        /** return modal */
                        return this
                    }
                })(construct.addon[a].name, construct.addon[a].class)
             }
        }
    }
}