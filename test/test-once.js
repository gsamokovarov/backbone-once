$(document).ready(function() {

  module("Backbone.Once");

  _.each(['Model', 'Collection', 'History', 'Router', 'View'], function(kind) {
    test('Event#once propagated to ' + kind, 1, function() {
      ok(_.has(Backbone[kind].prototype, 'once'));
    });
  });

  test('Event#once event is triggered only once', 1, function() {
    var model = new Backbone.Model({bool: false});
    model.once('change:bool', function() { ok(true); });
    model.set('bool', true);
    model.set('bool', false);
    model.set('bool', true);
  });

});
