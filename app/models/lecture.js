import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  active: DS.attr('boolean')
});
