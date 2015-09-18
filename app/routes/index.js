import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Home',
  beforeModel() {
    this.transitionTo('courses');
  }
});
