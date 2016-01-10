import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    return tokens.join(' - ') + ' - ITP';
  },
  jobNotifications: Ember.inject.service(),
  activate() {
    this.get('jobNotifications').start();
  }
});
