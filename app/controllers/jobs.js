import Ember from 'ember';

export default Ember.Controller.extend({
  sortedJobs: Ember.computed('model.length', function() {
    return this.get('model').sortBy('createdAt').reverseObjects();
  })
});
