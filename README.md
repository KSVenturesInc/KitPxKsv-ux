# KitPxKsv

A noteworthy Niagara module brought to you by TravisH.

#### A collection of widgets made by K&S Ventures



```javascript
  require(['/nmodule/KitPxKsv/rc/TestWidget'], function (TestWidget) {
    var widget = new TestWidget();
    widget.initialize($('#myWidgetGoesHere')).then(function () {
      return widget.load('my value');
    });
  });
```



## Building

This module builds with Gradle. The Gradle build will perform r.js optimization,
minification, and JSDoc generation. Just type: `gradlew :KitPxKsv:build`

## Development

You can do development on this module with the help of Grunt. Just cd into
the module directory and type `grunt watch` to begin; JSHint and Karma tests
will be run on every file save. You can also type `grunt jshint:src` and
`grunt karma` just to run them once.

Just type `grunt` for a listing of all options.