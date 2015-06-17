
export default Backbone.View.extend({
  template: JST['task-item'],
  tagName: 'li',

  events: {
    'click .toggle': 'markComplete',
    'click .destroy': 'destroy'
  },


  initialize: function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  markComplete: function(){
    this.$el.toggleClass('completed');
  },

  destroy: function(){
    this.model.destroy();


  }


});
