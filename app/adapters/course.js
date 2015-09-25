import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  getJSONFile() {
    if (!this.cache) {
      this.cache = {};
    }

    if (this.cache['courses.json']) {
      return this.cache['courses.json'];
    }

    this.cache['courses.json'] = Ember.$.getJSON('/' + this.urlForFindMany());
    return this.cache['courses.json'];
  },

  urlForFindMany(ids, modelName, snapshots) {
    return 'courses.json';
  },

  findAll() {
    return this.getJSONFile();
  },

  findRecord(store, type, id, snapshot) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.getJSONFile().then((courses) => {
        courses.find((course) => {
          if (course.id === id) {
            resolve(course);
          }
        });
      });
    });
  }
});
