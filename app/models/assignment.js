import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string')
  // course: DS.belongsTo('course', { async: true })
});
