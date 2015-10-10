import DS from 'ember-data';
import Ember from 'ember';

export default DS.Adapter.extend({
  createCache: Ember.on('init', function() {
    if (!this.cache) {
      this.cache = {};
    }
  }),

  getJSONFile() {
    if (this.cache['courses.json']) {
      return this.cache['courses.json'];
    }

    this.cache['courses.json'] = Ember.$.getJSON('/' + this.urlForFindMany());
    return this.cache['courses.json'];
  },

  urlForFindMany(/* ids, modelName, snapshots */) {
    return 'courses.json';
  },

  findAll() {
    return this.getJSONFile();
  },

  findHasMany(store, snapshot, url) {
    var lastSlash = url.lastIndexOf('/') + 1;
    var key = url.substring(lastSlash, url.indexOf('.json'));

    return Ember.$.ajax({
      url: url,
      dataType: 'json'
    }).then(function(data) {
      var response = {};
      response[key] = data;
      return response;
    });
  },

  findRecord(store, type, id /*, snapshot */) {
    return new Ember.RSVP.Promise((resolve) => {
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
