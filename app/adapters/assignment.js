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

  findMany(store, type, ids, snapshots) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.getJSON('/' + this.urlForFindMany()).then((allAssignments) => {
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
  }
});
