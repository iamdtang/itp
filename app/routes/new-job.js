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
      // refactor this validation
      if (model.get('position') && model.get('poc') && model.get('compensation') && model.get('description')) {
        model.save().then(() => {
          this.refresh();
        });
      } else {
        alert('Fill out all fields please');
      }
    }
  }
});
