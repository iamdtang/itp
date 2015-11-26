import Ember from 'ember';

export default Ember.Service.extend({
  unreadJobs: Ember.computed('mostRecentJobId', function() {
    if (!this.get('mostRecentJobId')) {
      return false;
    }

    if (this.get('mostRecentJobId') === localStorage.lastSeen) {
      return false;
    }

    return true;
  }),
  markAsRead() {
    localStorage.lastSeen = this.get('mostRecentJobId');
    this.set('mostRecentJobId', null);
  }
});
