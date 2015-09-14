import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var courses = this.modelFor('courses');
    var course = courses.findBy('id', params.id);

    return Ember.RSVP.hash({
      course: course,
      lectures: this.store.query('lecture', { course_number: 404, year: 2015 })
    });
  },

  setupController: function(controller, model) {
    var activeLectures = model.lectures.filter(function(lecture) {
      return lecture.get('active') === true;
    });

    controller.set('lectures', activeLectures);
    controller.set('model', model.course);
  },

  renderTemplate(controller, model) {
    this.render('courses.course', {
      controller: controller,
      into: 'application'
    });
  }
});
