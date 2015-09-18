import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Courses',
  model() {
    return this.store.findAll('course');
  }
});
