import Ember from 'ember';

export default Ember.Component.extend({
  isExternal: Ember.computed('unit.link', function() {
    let link = this.get('unit.link');

    if (link && link.match(/https?:\/\//)) {
      return true;
    }

    return false;
  })
});
