import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  findAll() {
    return Ember.$.getJSON('/courses.json');
  },

  findRecord(store, type, id, snapshot) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.getJSON('/courses.json').then((courses) => {
        courses.find((course) => {
          if (course.id === id) {
            resolve(course);
          }
        });
      });
    });
  }
});
