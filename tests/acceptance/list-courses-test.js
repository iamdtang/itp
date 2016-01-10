// import Ember from 'ember';
// import { module, test } from 'qunit';
// import startApp from 'itp/tests/helpers/start-app';
// import Pretender from 'pretender';
//
// var application;
// var server;
//
// module('Acceptance | list courses', {
//   beforeEach: function() {
//     application = startApp();
//     server = new Pretender(function() {
//       this.get('/courses.json', function() {
//         var response = [
//           {
//             "id": 20151405,
//             "course_number": "405",
//             "course_name": "Professional Applications and Frameworks in Web Development",
//             "semester": "Spring",
//             "instructor": "David Tang",
//             "year": 2015,
//             "active": false
//           },
//           {
//             "id": 20153404,
//             "course_number": "404",
//             "course_name": "Modern Technologies in Web Development",
//             "semester": "Fall",
//             "year": 2015,
//           	"color": "orange",
//           	"instructor": "David Tang",
//           	"syllabus": "https://docs.google.com/document/d/1c_I5jK-VkadLhXR9YiP_pt4531TNBVKepKh8J4wDv7E/edit?usp=sharing",
//           	"time": "Wednesdays 6-8:50pm",
//           	"office_hours": "TBA",
//             "links": {
//               "assignments": "/2015/404/assignments.json",
//               "lectures": "/2015/404/lectures.json"
//             },
//             "active": true
//           },
//           {
//             "id": 20161405,
//             "course_number": "405",
//             "course_name": "Professional Applications and Frameworks in Web Development",
//             "semester": "Spring",
//             "year": 2016,
//             "active": true
//           }
//         ];
//
//         return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
//       });
//     });
//   },
//
//   afterEach: function() {
//     Ember.run(application, 'destroy');
//     server.shutdown();
//   }
// });
//
// test('visiting / redirects to /courses', function(assert) {
//   visit('/');
//
//   andThen(function() {
//     assert.equal(currentURL(), '/courses');
//   });
// });
//
// test('visiting /courses should show only active courses', function(assert) {
//   visit('/courses');
//
//   andThen(function() {
//     assert.equal(find('#course-list li').length, 2);
//   });
// });
