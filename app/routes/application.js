import Ember from 'ember';

export default Ember.Route.extend({
  title(tokens) {
    return tokens.join(' - ') + ' - ITP';
  },
  jobNotifications: Ember.inject.service(),
  activate() {
    this.store.query('job', {
      orderBy: 'createdAt',
      limitToLast: 1
    }).then((jobs) => {
      this.get('jobNotifications').set('mostRecentJobId', jobs.objectAt(0).get('id'));
    });
  }
});
