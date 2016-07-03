import DS from 'ember-data';

let { Model, attr } = DS;

export default Model.extend({
  course_number: attr('string'),
  course_name: attr('string'),
  semester: attr('string'),
  year: attr('number'),
  color: attr('string'),
  instructor: attr('string'),
  syllabus: attr('string'),
  time: attr('string'),
  office_hours: attr('string'),
  assignments: DS.hasMany('assignment', { async: true }),
  lectures: DS.hasMany('lecture', { async: true }),
  active: attr('boolean'),
  archived: attr('boolean'),
  discussionBoard: attr('string')
});
