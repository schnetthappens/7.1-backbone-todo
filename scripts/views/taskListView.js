
export default Backbone.View.extend({
  template: JST.todo,

  tagName: 'ul',
  id: 'todo-list',

  initialize:function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template());
    return this;
  }
});
