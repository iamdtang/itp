import Ember from 'ember';

export default Ember.Controller.extend({
  activeCourses: Ember.computed.filterBy('model', 'active', true)
});
