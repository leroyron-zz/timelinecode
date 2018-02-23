# TimelineCode
This project is the Typescript enhanced version of Timeline-JsCode https://github.com/leroyron/timeline-jscode and will undergo development for Browsers and NodeJS server side timeline functionality for optimal use in embedded systems.

Quick Use Install

    npm install timelinecode

Proposed Use:
-------

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
    // No GUI (documents or elements)
    // Sync NodeJS with other Nodes and Browsers
```
The Basics
-------

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


Do you have an idea? know how to develop it? Great! I'll start you off.
- 1. A class template prepared for you:

```
    import { timeline } from "./timeline";
    /** User: Use .custom() - ... */
    export class custom {
        /**
        * @param This - The object Modal
        * @param args - Object arguments{} thrown in by User:
        */
        constructor(This: object, args: any) {
            var date = new Date()
            var options = new Array(
                {'custom1': [
                    {'gui': [
                        {'container': typeof document != 'undefined' ? 
                        document.body : null},
                        {'x': 0},
                        {'y': 0},
                        {'width': undefined},
                        {'height': undefined},
                        {'ctx': {}}
                    ]}
                ]},
                {'custom2': 'string'}
            )
            
            new timeline.construct(This, args, options)
        }
    }
    timeline.construct.addon.push({name: "custom", class: custom})
```
- 2. Change the index.ts

![Change the index.ts](https://github.com/leroyron/timelinecode/raw/master/dist/screen.png)


Library Setup
-------
Install dependencies

    npm install

Development
-------

This projects build is automated with GULP https://gulpjs.com/ and majority of code is compiled from TypeScript  https://www.typescriptlang.org/docs/handbook/gulp.html and Babel conversions are also done https://babeljs.io/ 

    npm install -g typescript
    npm install -g gulp-cli

GULP Tasks
-------
    gulp *task*
    
**library tasks:**
- lib  - " compile to js "
- lib:watch - " watch library and auto compile to js "
- lib:min - " minify to js "

**default:**
- lib:watch 
<!--
**scripts tasks:**
- html,
- js,
- css,

**image tasks:**
- sprite,

**minification tasks:**
- lib:min,
- js:min,
- css:min,

**batch tasks:**
- batch, // html, lib, sprite, js, css
- batch:watch // html, lib:watch, sprite, js, css
- batch:min // html, lib:min, sprite, js:min, css:min
- batch:clean // html, lib, sprite, js, css
-->

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
                                    keep: 
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