import DS from 'ember-data';

export default DS.Model.extend({
  position: DS.attr('string'),
  poc: DS.attr('string'),
  compensation: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date')
});
