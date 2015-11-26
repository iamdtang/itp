import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

let localStorage = window.localStorage;

moduleFor('service:job-notifications', 'Unit | Service | job notifications', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('unreadJobs is false if mostRecentJob is undefined', function(assert) {
  var service = this.subject();
  assert.equal(service.get('unreadJobs'), false);
});

test('unreadJobs is false if the mostRecentJob is the same as the last seen job', function(assert) {
  var service = this.subject();
  localStorage.lastSeen = 'abcd';
  service.set('mostRecentJob', Ember.Object.create({ id: 'abcd' }));
  assert.equal(service.get('unreadJobs'), false);
  localStorage.removeItem('lastSeen');
});

test('unreadJobs is true if the mostRecentJob is not the same as the last seen job', function(assert) {
  var service = this.subject();
  localStorage.lastSeen = 'abcd';
  service.set('mostRecentJob', Ember.Object.create({ id: '1234' }));
  assert.equal(service.get('unreadJobs'), true);
  localStorage.removeItem('lastSeen');
});

test('markAsRead() writes the mostRecentJob id to local storage and sets unreadJobs to false', function(assert) {
  var service = this.subject();
  service.set('mostRecentJob', Ember.Object.create({ id: 'abcde' }));
  service.markAsRead();
  assert.equal(localStorage.lastSeen, 'abcde');
  assert.equal(service.get('unreadJobs'), false);
  localStorage.removeItem('lastSeen');
});

test('mostRecentJob is null if latestJobs.length is not defined', function(assert) {
  var service = this.subject();
  assert.equal(service.get('mostRecentJob'), null);
});

test('mostRecentJob is the first element in the array', function(assert) {
  var service = this.subject();
  var Model = Ember.Object.extend({
    toJSON() {} // something is logged to the console, that is why this is here
  });

  service.set('latestJobs', [
    Model.create({ id: 123, position: 'p1' }),
    Model.create({ id: 444, position: 'p2' }),
    Model.create({ id: 777, position: 'p3' })
  ]);

  assert.equal(service.get('mostRecentJob.id'), 123);
});
