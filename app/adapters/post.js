import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  // urlForFindRecord(id, modelName, snapshot) {
  //   return 'posts/' + id + '.md';
  // },

  findRecord(store, type, id, snapshot) {
    if (!this.cache) {
      this.cache = {};
    }

    if (this.cache[id]) {
      return this.cache[id];
    }

    return this.cache[id] = Ember.$.ajax({
      url: 'posts/' + id + '.md'
    })
  }
});
