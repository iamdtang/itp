import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    return model.get('course_name');
  },

  // model(params) {
  //   var courses = this.modelFor('courses');
  //   var course = courses.findBy('id', params.id);
  //   // return this.store.find('course', params.id);
  //
  //   // return course;
  //   return Ember.RSVP.hash({
  //     course: course,
  //     lectures: this.store.query('lecture', {
  //       course_number: course.get('course_number'),
  //       year: course.get('year')
  //     })
  //   });
  // },

  model(params) {
    return this.store.findRecord('course', params.id);
  },

  // setupController: function(controller, model) {
  //   controller.set('lectures', model.lectures);
  //   controller.set('model', model.course);
  // },

  renderTemplate(controller /*, model */) {
    this.render('courses.course', {
      controller: controller,
      into: 'application'
    });
  }
});
