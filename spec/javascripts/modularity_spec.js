describe('application', function() {

  describe("_.bind", function() {

    describe("first parameter:  'this'", function() {
      
      it("binds the first parameter to this.", function() {
        var func = function() { return this; };
        var bound = modularity.bind(func, {t: 'my_this'});
        var result = bound('later1');
        expect(result.t).toEqual('my_this');
      });

      it("binds the given parameter", function() {
        var bound = modularity.bind(function(arg) { return { that: this, param1: arg }; },
                               {t: 'my_this'},
                               'bound1');
        var result = bound();
        expect(result.that.t).toEqual('my_this');
        expect(result.param1).toEqual('bound1');
      });

      it("with multiple parameters", function() {
        var bound = modularity.bind(function(arg1, arg2) { return {that: this, param1: arg1, param2: arg2}; },
                               {t: 'my_this'},
                               'bound1',
                               'bound2');
        var result = bound();
        expect(result.that.t).toEqual('my_this');
        expect(result.param1).toEqual('bound1');
        expect(result.param2).toEqual('bound2');
      });

      it("allows to call the bound function with more parameters later", function() {
        var bound = modularity.bind(function(arg1, arg2) { return {that: this, param1: arg1, param2: arg2}; },
                               {t: 'my_this'},
                               'bound1');
        var result = bound('later1');
        expect(result.that.t).toEqual('my_this');
        expect(result.param1).toEqual('bound1');
        expect(result.param2).toEqual('later1');
      });
    });

    describe('additional parameters', function() {
      it("binds the given parameter", function() {
        var func = function(arg) { return arg };
        var bound = modularity.bind(func, this, 'bound1');
        expect(bound()).toEqual('bound1');
      });

      it("with multiple parameters", function() {
        var func = function(arg1, arg2) { return {param1: arg1, param2: arg2}; };
        var bound = modularity.bind(func, this, 'bound1', 'bound2');
        var result = bound();
        expect(result.param1).toEqual('bound1');
        expect(result.param2).toEqual('bound2');
      });

      it("allows to call the bound function with more parameters later", function() {
        var func = function(arg1, arg2) { return {param1: arg1, param2: arg2}; };
        var bound = modularity.bind(func, 'bound1');
        var result = bound('later1');
        expect(result.param1, 'bound1');
        expect(result.param2, 'later1');
      });
    });
  });

  describe('global events', function() {
    it('works without a data parameter', function() {
      var spy = jasmine.createSpy();
      modularity.bind_global_event('foo', spy);
      modularity.fire_global_event('foo');
      expect(spy).toHaveBeenCalled();
    });

    it('accepts a single value as the data parameter', function() {
      var spy = jasmine.createSpy();
      modularity.bind_global_event('foo', spy);
      modularity.fire_global_event('foo', 'one');
      expect(spy.mostRecentCall.args[1]).toEqual('one');
    });

    it('accepts a single value as an array', function() {
      var spy = jasmine.createSpy();
      modularity.bind_global_event('foo', spy);
      modularity.fire_global_event('foo', ['one']);
      expect(spy.mostRecentCall.args[1]).toEqual('one');
    });

    it('accepts multiple data parameters as an array', function() {
      var spy = jasmine.createSpy();
      modularity.bind_global_event('foo', spy);
      modularity.fire_global_event('foo', ['one', 'two']);
      expect(spy.mostRecentCall.args[1]).toEqual('one');
      expect(spy.mostRecentCall.args[2]).toEqual('two');
    })
  });
});
