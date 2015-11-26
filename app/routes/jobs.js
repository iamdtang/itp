import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Jobs',
  model() {
    return this.store.findAll('job');
  },
  jobNotifications: Ember.inject.service(),
  activate() {
    this.get('jobNotifications').markAsRead();
  }
});
