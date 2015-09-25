import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  coalesceFindRequests: true,

  // buildURL(modelName, id, snapshot, requestType, query) {
  //   console.log(modelName, id, snapshot, requestType, query);
  //   this._super(modelName, id, snapshot, requestType, query);
  // },

  urlForFindMany(ids, modelName, snapshots) {
    return 'assignments.json';
  },

  getJSONFile() {
    if (!this.cache) {
      this.cache = {};
    }

    if (this.cache['assignments.json']) {
      return this.cache['assignments.json'];
    }

    this.cache['assignments.json'] = Ember.$.getJSON('/' + this.urlForFindMany());
    return this.cache['assignments.json'];
  },

  getAssignmentContent(id) {
    if (!this.cache) {
      this.cache = {};
    }

    if (this.cache[id]) {
      return this.cache[id];
    }

    this.cache[id] = Ember.$.ajax({
      url: 'assignments/' + id + '.md'
    });

    return this.cache[id];
  },

  findMany(store, type, ids, snapshots) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.getJSONFile().then((allAssignments) => {
        // console.log(assignments, ids)
        var assignments = allAssignments.filter((assignment) => {
          if (ids.indexOf(assignment.id) > -1) {
            return true
          }
        });

        resolve(assignments);
      });
    });


    return this.buildURL()
  },

  findRecord(store, type, id, snapshot) {
    return Ember.RSVP.hash({
      assignments: this.getJSONFile(),
      assignmentContent: this.getAssignmentContent(id)
    }).then((hash) => {
      var assignment = hash.assignments.find((assignment) => {
        if (assignment.id === id) {
          return true;
        }
      });

      assignment.markdown = hash.assignmentContent;
      return assignment;
    });
  }
});
