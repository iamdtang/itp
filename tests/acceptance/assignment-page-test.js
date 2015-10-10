import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'itp/tests/helpers/start-app';
import Pretender from 'pretender';

var application;
var server;

module('Acceptance | assignment page', {
  beforeEach: function() {
    application = startApp();
    server = new Pretender(function() {
      this.get('/assignments/learning-javascript.md', function() {
        var response = '### Learning JavaScript';
        return [200, { "Content-Type": "application/text" }, response];
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting /assignments/learning-javascript displays markdown as HTML', function(assert) {
  visit('/assignments/learning-javascript');

  andThen(function() {
    assert.equal(find('h3').html().trim(), 'Learning JavaScript');
  });
});
