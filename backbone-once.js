(function(Backbone) {

  _.extend(Backbone.Events, {

    // Bind an event only once. When executed for the first time, it would
    // remove itself from the callbacks list.
    once: function(events, callback, context) {
      var boundOff = _.bind(this.off, this);
      var oneOffCallback = function() {
        boundOff(events, oneOffCallback);       
        callback.apply(context, arguments);
      };

      return this.on(events, oneOffCallback);
    }

  });

  // Mix `Backbone.Events` again so our `once` method gets picked up. By the
  // time the classes first mixed `Backbone.Events`, it was not defined.
  _.each(['Model', 'Collection', 'Router', 'View', 'History'], function(kind) {
    _.extend(Backbone[kind].prototype, Backbone.Events);
  });

}).call(this, Backbone);