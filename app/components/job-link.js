import Ember from 'ember';

export default Ember.Component.extend({
  ariaRole: 'presentation',
  jobNotifications: Ember.inject.service(),
  click() {
    this.get('jobNotifications').markAsRead();
  }
});
