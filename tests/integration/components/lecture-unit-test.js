import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';


moduleForComponent('lecture-unit', 'Integration | Component | lecture unit', {
  integration: true
});

test('it renders the subject if no link is provided', function(assert) {
  var unit = Ember.Object.create({
    subject: 'Constructor functions'
  });

  this.set('unit', unit);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lecture-unit unit=unit}}`);
  assert.equal(this.$().text().trim(), 'Constructor functions');

  // Template block usage:
  // this.render(hbs`
  //   {{#lecture-unit}}
  //     template block text
  //   {{/lecture-unit}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});

test('it renders a link to the notes if provided', function(assert) {
  var unit = Ember.Object.create({
    link: 'constructors',
    subject: 'Constructor functions'
  });

  this.set('unit', unit);

  this.render(hbs`{{lecture-unit unit=unit}}`);
  assert.equal(this.$('a').length, 1);
  assert.equal(this.$('a').text().trim(), 'Constructor functions');
});
