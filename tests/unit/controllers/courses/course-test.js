import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember';

moduleFor('controller:courses/course', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('activeAssignments only contains assignments where active is true', function(assert) {
  var controller = this.subject();
  var model = Ember.Object.create({
    assignments: [
      { active: true },
      { active: true },
      { active: false },
      { active: true }
    ]
  });

  controller.set('model', model);
  assert.equal(controller.get('activeAssignments').length, 3);
});

test('activeLectures only contains lectures where active is true', function(assert) {
  var controller = this.subject();
  var model = Ember.Object.create({
    lectures: [
      { active: false },
      { active: true },
      { active: false },
      { active: true }
    ]
  });

  controller.set('model', model);
  assert.equal(controller.get('activeLectures').length, 2);
});
