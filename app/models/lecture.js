import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  units: DS.attr(),
  active: DS.attr('boolean'),
  title:  DS.attr('string')
});
