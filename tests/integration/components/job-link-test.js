import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';


moduleForComponent('job-link', 'Integration | Component | job link', {
  integration: true
});

test('it does not render the unread notifications bubble', function(assert) {
  assert.expect(1);
  this.render(hbs`{{job-link}}`);
  assert.equal(this.$('.unread-count').length, 0);
});

test('it renders the unread notifications bubble', function(assert) {
  assert.expect(1);
  let jobNotifications = Ember.Service.extend({
    unreadJobs: 5
  });

  this.register('service:job-notifications', jobNotifications);
  this.render(hbs`{{job-link}}`);
  assert.equal(this.$('.unread-count').length, 1);
});
