
export default Backbone.View.extend({
  template: JST.todo,

  tagName: 'ul',
  className: 'todo-list',

  initialize:function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
