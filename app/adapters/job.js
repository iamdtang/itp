import DS from 'ember-data';
import env from 'itp/config/environment';

export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase(env.firebase)
});
