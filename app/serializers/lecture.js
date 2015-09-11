import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: 'date',

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      lectures: payload
    };

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
