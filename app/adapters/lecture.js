import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // query(store, type, query) {
  //   let url = '/' + [
  //     query.year,
  //     query.course_number,
  //     'lectures.json'
  //   ].join('/');
  //
  //   if (!this.cache) {
  //     this.cache = {};
  //   }
  //
  //   if (!this.cache[url]) {
  //     this.cache[url] = Ember.$.getJSON(url);
  //   }
  //
  //   return this.cache[url];

    // return new Ember.RSVP.Promise((resolve, reject) => {
    //   let url = '/' + [
    //     query.year,
    //     query.course_number,
    //     'lectures.json'
    //   ].join('/');
    //
    //   $.getJSON(url).then((resp) => {
    //     resolve(resp);
    //   });
    // });
  // }
});
