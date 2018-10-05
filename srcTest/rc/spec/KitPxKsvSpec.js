define(['nmodule/KitPxKsv/rc/KitPxKsv'], function (KitPxKsv) {
  'use strict';

  describe("nmodule/KitPxKsv/rc/KitPxKsv", function () {
    it("can extol its own virtues", function () {
      expect(KitPxKsv.extolVirtues()).toBe('KitPxKsv is great!');
    });
  });

});