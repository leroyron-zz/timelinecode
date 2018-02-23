"use strict";
var timeline_1 = require("./timeline");
require("./timeline.code");
require("./timeline.scale");
require("./timeline.custom");
module.exports = function TIMELINE() {
    var options = new Array({ 'name': "timeline" }, { 'length': !isNaN(arguments[0]) ? arguments[0] | 0 : 1000 });
    new timeline_1.timeline.construct(this, arguments, options);
};
