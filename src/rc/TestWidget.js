
/**
 * A module defining `TestWidget`.
 *
 * @module nmodule/KitPxKsv/rc/TestWidget
 */
define(['bajaux/Widget',
        'bajaux/mixin/subscriberMixIn',
        'jquery',
        'Promise',
        'hbs!nmodule/KitPxKsv/rc/template/TestWidget-structure',
		    'nmodule/KitPxKsv/rc/template/d3-min',
		    'nmodule/KitPxKsv/rc/template/liquidGauge',
        'css!nmodule/KitPxKsv/rc/KitPxKsv'], function (
        BaseEditor,
        subscriberMixin,
        $,
        Promise,
        tplTestWidgetStructure,
		    d3js,
		    liquidGauge) {
  'use strict';


/**
  Creates widget constructor and configures prototype chain
  This is going to remain almost 100% the same regardless of
  the widget being created
*/
  var TestWidget = function TestWidget() {
	  var that = this;
	
	BaseEditor.apply(this, arguments);
	
	that.properties()
	.add('title', 'Placeholder')
	.add({
		name: 'colorTest',
		value: 'white',
		typeSpec: 'gx:Color'
	});
	
  /** remember to call super constructor. Javascript won't do this for you */

    
    subscriberMixin(this);
  };

  TestWidget.prototype = Object.create(BaseEditor.prototype);
  TestWidget.prototype.constructor = TestWidget;
  
  TestWidget.prototype.gauge1 = null;

/**
  This defines a function that will return our widget size, formatted as an array
  with 2 entries, [height, width]
*/

function getSize(widget) {
  var jq = widget.jq;
  var sizeArray = [null, null];
  
  sizeArray[0] = jq.height;
  sizeArray[1] = jq.width;
  return sizeArray;
}

/**
  doInitialize is our setup function; This will need to set up
  our basic HTML structure, initialize any widgets, and other
  preparatory work done before we start putting in live values
*/
  TestWidget.prototype.doInitialize = function (dom) {
    var that = this;
	  dom.html('<svg id="liquidGauge"></svg><style>.liquidFillGaugeText {font-family: Helvetica; font-weight: bold;}</style>');
	  
	  console.log(that);
	  console.log(getSize(TestWidget.prototype));
	
    var config1 = liquidFillGaugeDefaultSettings();
    config1.minValue = 0;
    config1.maxValue = 100;
	  var gauge1 = loadLiquidFillGauge("liquidGauge", 55, config1);
	  TestWidget.prototype.gauge1 = gauge1;
  };

/**
  This is the function we run when we load in values; We will usually have
  to add a subscriber and update function within this
*/
  TestWidget.prototype.doLoad = function (value) {
    var that = this;
    var input = this.jq().find('input');
    
    function update() {
      TestWidget.prototype.gauge1.update(parseInt(value.getOut().getValueDisplay()));
    }
    this.getSubscriber().attach('changed', update);
    update();
  };

  TestWidget.prototype.doRead = function () {
  };

/**
  Finally, we return the constructor function, and it is applied to the widget object
*/
  return TestWidget;
});
