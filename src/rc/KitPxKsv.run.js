
require(['baja!',
         'bajaux/events',
         'nmodule/KitPxKsv/rc/KitPxKsv',
         'jquery',
         'nmodule/KitPxKsv/rc/TestWidget',
         'hbs!nmodule/KitPxKsv/rc/template/KitPxKsv'], function (
         baja,
         events,
         KitPxKsv,
         $,
         TestWidget,
         template) {

  'use strict';

  $("#template").html(template({
    virtues: KitPxKsv.extolVirtues()
  }));

  var widget = new TestWidget(),
      comp = baja.$('baja:Component', {
        'superb': true,
        'distinguished': true,
        'whimsical': true,
        'remarkable': true,
        'splendid': true
      });

  var widgetDiv = $('#widget'),
      description = $('#description');

  widget.initialize(widgetDiv)
    .then(function () {

      widgetDiv.on(events.MODIFY_EVENT, function () {
        widget.read()
          .then(function (value) {
            description.text(value);
          });
      });

      return widget.load(comp);
    });
});

