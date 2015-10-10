import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  findRecord(store, type, id /*, snapshot */) {
    if (!this.cache) {
      this.cache = {};
    }

    if (this.cache[id]) {
      return this.cache[id];
    }

    return this.cache[id] = Ember.$.ajax({
      url: 'assignments/' + id + '.md'
    });
  }
});
