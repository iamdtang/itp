import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['-createdAt'],
  sortedJobs: Ember.computed.sort('model', 'sortProperties')
});
