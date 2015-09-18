import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindManyResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      assignments: payload
    };
    // console.log(store, primaryModelClass, payload, id, requestType)

    return this._super(store, primaryModelClass, payload, id, requestType);
  },

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    // console.log(store, primaryModelClass, payload, id, requestType);
    var markdown = payload;
    var response = {
      assignment: {
        id: id,
        markdown: markdown
      }
    };

    return this._super(store, primaryModelClass, response, id, requestType);
  }
});
