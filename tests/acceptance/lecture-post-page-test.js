import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'itp/tests/helpers/start-app';
import Pretender from 'pretender';

var application;
var server;

module('Acceptance | lecture post page', {
  beforeEach: function() {
    application = startApp();
    server = new Pretender(function() {
      this.get('/posts/learning-ember.md', function() {
        var response = '#### Learning Ember';
        return [200, { "Content-Type": "application/text" }, response];
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting /notes/learning-ember displays markdown as HTML', function(assert) {
  visit('/notes/learning-ember');

  andThen(function() {
    assert.equal(find('h4').html(), 'Learning Ember');
  });
});
