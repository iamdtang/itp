import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindManyResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      assignments: payload
    };
    // console.log(store, primaryModelClass, payload, id, requestType)

    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
