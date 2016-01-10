import env from 'itp/config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  firebase: new Firebase(env.firebase)
});
