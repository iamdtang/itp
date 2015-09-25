import Ember from 'ember';

export default Ember.Route.extend({
  titleToken(model) {
    return model.get('name');
  },

  model(params) {
    return this.store.findRecord('assignment', params.id);
  }
});
