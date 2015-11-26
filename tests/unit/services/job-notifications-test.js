import { moduleFor, test } from 'ember-qunit';

let localStorage = window.localStorage;

moduleFor('service:job-notifications', 'Unit | Service | job notifications', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('unreadJobs is false if mostRecentJobId is undefined', function(assert) {
  var service = this.subject();
  assert.equal(service.get('unreadJobs'), false);
});

test('unreadJobs is false if the mostRecentJobId is the same as the last seen job', function(assert) {
  var service = this.subject();
  localStorage.lastSeen = 'abcd';
  service.set('mostRecentJobId', 'abcd');
  assert.equal(service.get('unreadJobs'), false);
  localStorage.removeItem('lastSeen');
});

test('unreadJobs is true if the mostRecentJobId is not the same as the last seen job', function(assert) {
  var service = this.subject();
  localStorage.lastSeen = 'abcd';
  service.set('mostRecentJobId', 'abcde');
  assert.equal(service.get('unreadJobs'), true);
  localStorage.removeItem('lastSeen');
});

test('markAsRead() writes the mostRecentJobId to local storage and resets unreadJobs', function(assert) {
  var service = this.subject();
  service.set('mostRecentJobId', 'abcde');
  service.markAsRead();
  assert.equal(localStorage.lastSeen, 'abcde');
  assert.equal(service.get('unreadJobs'), false);
  localStorage.removeItem('lastSeen');
});
