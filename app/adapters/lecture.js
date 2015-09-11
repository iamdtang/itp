import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  query(store, type, query) {
    let url = '/' + [
      query.year,
      query.course_number,
      'lectures.json'
    ].join('/');

    return $.getJSON(url);

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
  }
});
