import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service(),

  start() {
    this._findLatestJobs().then((latestJobs) => {
      this.set('latestJobs', latestJobs);
    });
  },

  mostRecentJob: Ember.computed('latestJobs.length', function() {
    if (this.get('latestJobs')) {
      console.log('new job', this.get('latestJobs').objectAt(0).toJSON());
      return this.get('latestJobs').objectAt(0);
    }
  }),

  unreadJobs: Ember.computed('mostRecentJob', {
    get() {
      if (!this.get('mostRecentJob')) {
        return false;
      }

      if (this.get('mostRecentJob.id') === localStorage.lastSeen) {
        return false;
      }

      return true;
    },
    set(key, value) {
      return value;
    }
  }),

  markAsRead() {
    localStorage.lastSeen = this.get('mostRecentJob.id');
    this.set('unreadJobs', false);
  },

  _findLatestJobs() {
    return this.get('store').query('job', {
      orderBy: 'createdAt',
      limitToLast: 1
    });
  }
});
