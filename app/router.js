import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('courses', function() {
    this.route('course', {
      path: ':id'
    });
  });
  this.route('notes', { path: 'posts' }, function() {
    this.route('note', {
      path: ':id'
    });
  });
  this.route('assignment', { path: 'assignments/:id' });
  this.route('jobs', function() {});

  this.route('new-job', {
    path: 'jobs/new'
  });
});

export default Router;
