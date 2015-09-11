import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  // units: DS.hasMany('unit'),
  active: DS.attr('boolean')
});
