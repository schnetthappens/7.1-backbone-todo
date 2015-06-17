
export default Backbone.View.extend({
  template: JST['task-item'],
  tagName: 'li',

  events: {
    'click .toggle': 'markComplete'
  },


  initialize: function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
  },

  markComplete: function(){
    this.$el.addClass('completed');
  }


});
