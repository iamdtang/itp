import Ember from 'ember';

export default Ember.Controller.extend({
  activeLectures: Ember.computed.filterBy('model.lectures', 'active', true),
  activeAssignments: Ember.computed.filterBy('model.assignments', 'active', true),
  actions: {
    viewCourseDetails() {
      this.set('showDetails', true);
    }
  }
});
