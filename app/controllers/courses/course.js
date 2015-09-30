import Ember from 'ember';

export default Ember.Controller.extend({
  activeLectures: Ember.computed.filterBy('lectures', 'active', true),
  actions: {
    viewCourseDetails() {
      this.set('showDetails', true);
    }
  }
});
