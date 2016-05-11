import Ember from 'ember';

export default Ember.Controller.extend({
  newJob: {},
  actions: {
    save(jobData, e) {
      e.preventDefault();
      jobData.createdAt = new Date();
      let job = this.store.createRecord('job', jobData);

      if (job.get('position') && job.get('poc') && job.get('compensation') && job.get('description')) {
        job.save();
        this.transitionToRoute('jobs');
      } else {
        alert('Fill out all fields please');
      }
    }
  }
});
