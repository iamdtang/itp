import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeFindRecordResponse (store, primaryModelClass, payload, id, requestType) {
    // console.log(store, primaryModelClass, payload, id, requestType);
    var markdown = payload;
    var response = {
      post: {
        id: id,
        markdown: markdown
      }
    };

    return this._super(store, primaryModelClass, response, id, requestType);
  }
});
