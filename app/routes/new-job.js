import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Post a Job',
  model() {
    return this.store.createRecord('job', {
      createdAt: new Date()
    });
  },

  actions: {
    save(model) {
      if (model.get('position') && model.get('poc') && model.get('compensation') && model.get('description')) {
        model.save().then(() => {
          this.transitionTo('jobs');
        });
      } else {
        alert('Fill out all fields please');
      }
    }
  }
});
