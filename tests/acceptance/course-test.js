import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'itp/tests/helpers/start-app';
import Pretender from 'pretender';

var application;
var server;

module('Acceptance | course', {
  beforeEach: function() {
    application = startApp();
    server = new Pretender(function() {
      this.get('/courses.json', function() {
        var response = [
          {
            "id": 20153404,
            "course_number": "404",
            "course_name": "Modern Technologies in Web Development",
            "semester": "Fall",
            "year": 2015,
          	"color": "orange",
          	"instructor": "David Tang",
          	"syllabus": "https://docs.google.com/document/d/1c_I5jK-VkadLhXR9YiP_pt4531TNBVKepKh8J4wDv7E/edit?usp=sharing",
          	"time": "Wednesdays 6-8:50pm",
          	"office_hours": "TBA",
            "links": {
              "assignments": "/2015/404/assignments.json",
              "lectures": "/2015/404/lectures.json"
            },
            "active": true
          }
        ];

        return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
      });

      this.get('/2015/404/lectures.json', function() {
        var response = [
        	{
        		"date": "10/7",
        		"units": [
        			{
        				"subject": "Intro to Angular",
        				"link": "angular-part-1"
        			},
        			{
        				"subject": "Demo",
        				"link": "https://bitbucket.org/skaterdav85/angular-1-2015/src"
        			},
        			{
        				"subject": "Midterm Project",
        				"link": ""
        			}
        		],
        		"active": 1
        	},
          {
        		"date": "10/14",
        		"units": [
        			{
        				"subject": "Intro to Angular 2",
        				"link": "angular-part-2"
        			}
        		],
        		"active": 0
        	}
        ];

        return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
      });

      this.get('/2015/404/assignments.json', function() {
        var response = [
        	{
        		"name": "Accordion (optional)",
        		"type": "NC",
        		"due": "NA",
        		"id": "accordion",
        		"links": {
        			"assignment-content": "/assignments/accordion.md"
        		},
        		"active": 1
        	},
        	{
        		"name": "Bookmark Widget",
        		"type": "A",
        		"due": "9/9",
        		"id": "bookmark-widget",
        		"links": {
        			"assignment-content": "/assignments/bookmark-widget.md"
        		},
        		"active": 1
        	},
          {
        		"name": "React",
        		"type": "A",
        		"due": "9/10",
        		"id": "react",
        		"links": {
        			"assignment-content": "/assignments/react.md"
        		},
        		"active": 0
        	}
        ];

        return [200, { "Content-Type": "application/json" }, JSON.stringify(response)];
      });
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    server.shutdown();
  }
});

test('visiting /courses/20153404 shows active assignments', function(assert) {
  visit('/courses/20153404');

  andThen(function() {
    assert.equal(find('#assignments li').length, 2);
    assert.equal(find('#assignments li a').attr('href'), '/assignments/accordion');
  });
});

test('visiting /courses/20153404 shows active lectures', function(assert) {
  visit('/courses/20153404');

  andThen(function() {
    assert.equal(find('.lecture').length, 1);
  });
});

test('an active lecture shows all units', function(assert) {
  visit('/courses/20153404');

  andThen(function() {
    assert.equal(find('.lecture-unit').length, 3);
    assert.equal(find('.lecture-unit').eq(0).find('a').attr('href'), '/notes/angular-part-1');
    assert.equal(find('.lecture-unit').eq(1).find('a').attr('href'), 'https://bitbucket.org/skaterdav85/angular-1-2015/src');
    assert.equal(find('.lecture-unit').eq(2).text().trim(), 'Midterm Project');
  });
});

test('clicking on course details reveals more info', function(assert) {
  visit('/courses/20153404');
  assert.equal(find('#course-details a#syllabus').length, 0);
  click('#view-course-details');

  andThen(function() {
    assert.equal(find('#course-details a#syllabus').length, 1);
  });
});
