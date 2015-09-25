import Ember from 'ember';

export default Ember.Component.extend({
  elementIsInserted: Ember.on('didInsertElement', function() {
    this.$('pre code').each(function(i, block) {
      window.hljs.highlightBlock(block);
    });
  })
});
