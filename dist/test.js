var TIMELINE = require('./');
var timeline1 = new TIMELINE().code().access()// *no gui - no scale()*
            
var timeline2 = new TIMELINE({
    length: 1000
}).code({
    //container: , // no container - no gui
    x: 0,
    y: 0,
    width: undefined,
    height: undefined
}).access({
    continuance: true,
    skip: 0,
    rCount: 0, 
    tCount: 0, 
    revert: true, 
    mCount: 0, 
    leap: -999999, 
    reset: false
})/*.scale({ // scale is gui, not for node
    //container: ,
    x: 0,
    y: 0,
    width: undefined,
    height: undefined,
    phase: 'year',
    year: 2020, 
    month: 12,
    day: 12,
    hour: 24,
    minute: 0,
    second: 0,
    millisecond: 0,
    hour24Format: false
})*/

var timelineCustom = new TIMELINE().custom()

console.log(JSON.stringify(timelineCustom))
	
debugger
/* 
.TIMELINE() DEFAULT
            length = 10000 - 10 secs

.code()     DEFAULT
            gui.container = document.body,
            gui.x = 0,
            gui.y = 0,
            gui.width = undefined,
            gui.height = undefined
            .access()   DEFAULT
                        access.continuance = true,
                        access.skip = 0, 
                        access.rCount = 0, 
                        access.tCount = 0, 
                        access.revert = true, 
                        access.mCount = 0, 
                        access.leap = -999999, 
                        access.reset = false

.scale()    DEFAULT
            scale.gui.container = document.body,
            scale.gui.x = 0,
            scale.gui.y = 0,
            scale.gui.width = undefined,
            scale.gui.height = undefined
            phase = 'year',
            current.year = (current), 
            current.month = (current),
            current.day = (current),
            current.hour = (current),
            current.minute = (current),
            current.second = (current),
            current.millisecond = (current),
            current.hour24Format = false
*/