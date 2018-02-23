# TimelineCode

This project is the Typescript enhanced version of Timeline-JsCode https://github.com/leroyron/timeline-jscode and will undergo development for Browsers and NodeJS server side timeline functionality for optimal use in embedded systems.

Quick Use Install
-------

    npm install timelinecode

<del>Proposed Use:</del> (Under Development)
-------

TAKE whole known objects
- from -> CSS | Element.style | THREE.js | BABYLON.js | DRONENODE | EMBEDDED ect...
    - take -> elements | objects | network object
        - get -> (rotate, position, scale, alpha, threshold) 
            - nodes -> {x, y, z, n, s, e, w, value}
                - type &lt;number&gt;&lt;radian&gt;

Browser:
```
    <script src="js/timelinecode.js"></script>
    <script>
        var timeline1 = new TIMELINE( {name: "TL1"} ).code().access().scale()
        // *scale() optional*     

        timeline1.take( object )
        
        object.position.TL1.x( 8, "linear", 1000 ); // move X 8 in 1 sec
    </script>
```
Node:
```
    var TIMELINE = require( 'timelinecode' );
    var timeline1 = new TIMELINE( {name: "TL1"} ).code().access()
    // *no gui - no scale()*

    timeline1.take( object )

    object.vector.TL1.n( 8, "linear", 1000 ); // increase N 8 in 1 sec
```

Browser:
```
    // Timeline Code used for documents, elements, frameworks and networks
    // THREE.js, BABYLON.js 3D API, ect...
    // Google, Apple, Outlook, Calendar API, Storage Drives API ect..
    // Sync Timeline with NodeJS
```
Node:
```
    // Timeline Code for framework, embedded systems and networks
    // TWITTER API, Google Calendar JSON, API, DRONENODE ect...
    // No GUI (documents or elements)
    // Sync NodeJS with other Nodes and Browsers
```
Options:

**TIMELINE()**
```
    TIMELINE({
            name:      <string>,
            length:    <number>
        })
        // allocate name and length
```
TIMELINE()**.code()**
```
    TIMELINE.code({
            container: <document.element>,
            x:         <number>,
            y:         <number>,
            width:     <number>,
            height:    <number>,
            access:    override
        })
        // basis GUI and control
```
TIMELINE().code()**.access()**
```
    TIMELINE().code().access({
            continuance: <boolean>,
            skip:        <number>,
            rCount:      <number>,
            tCount:      <number>,
            revert:      <true>, 
            mCount:      <number>, 
            leap:        <number>, 
            reset:       <boolean>
        })
        // access and control of data
```
TIMELINE.code().access()**.scale()**

.scale() is a GUI module for browsers and other viewports *not nodeJS* 
```
    TIMELINE().code().access().scale({
            container:   <document.element>,
            x:           <number>,
            y:           <number>,
            width:       <number>,
            height:      <number>,
            phase:       <number | string>,
            year:        <number>,
            month:       <number> (1 <> 12),
            day:         <number> (1 <> 31),
            hour:        <number> (0 <> 24),
            minute:      <number> (0 <> 60),
            second:      <number> (0 <> 60),
            millisecond: <number> (0 <> 100),
            hour24Format:<boolean>
        })
        // More Custom GUI added
```

Curious about Timeline with NodeJS?
-------
Accessing sample:
```
    var MYBrowserTimeline = new TIMELINE().access()
    var findNetworkTimeline = new TIMELINE().connect({
            address: '192.168.0.1', 
            port: '5000', 
            timeline: 'timelineIWant'
        }) // error: timelineIWant not found
        
        // OR
        
        findNetworkTimeline.list().forEach(function(name, index) {

            findNetworkTimeline.connect({
                    address: '192.168.0.1', 
                    port: '5000', 
                    timeline: name
                }).await({
                        async: false, 
                        state: 'active'
                    }, function (availableTimeline) {

                        MYBrowserTimeline.sync({
                                timeline: availableTimeline
                                method: {
                                    keep: true
                                },
                                sync: {
                                    data: true, 
                                    duration: true,
                                    overwrite: true
                                }
                            })

            })
      });
```
User make local timeline to then syncs data and it's current duration play position with network timeline.
