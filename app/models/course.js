import DS from 'ember-data';

export default DS.Model.extend({
  course_number: DS.attr('string'),
  course_name: DS.attr('string'),
  semester: DS.attr('string'),
  year: DS.attr('number'),
  color: DS.attr('string'),
  instructor: DS.attr('string'),
  syllabus: DS.attr('string'),
  time: DS.attr('string'),
  office_hours: DS.attr('string'),
  assignments: DS.hasMany('assignment', { async: true }),
  lectures: DS.hasMany('lecture', { async: true }),
  active: DS.attr('boolean'),
  archived: DS.attr('boolean')
});
