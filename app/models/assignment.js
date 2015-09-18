import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  due: DS.attr('string'),
  active: DS.attr('boolean'),
  markdown: DS.attr('string')
  // course: DS.belongsTo('course', { async: true })
});
