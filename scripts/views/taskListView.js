
export default Backbone.View.extend({
  template: JST['task-list'],

  tagName: 'ul',
  id: 'todo-list',

  initialize:function(){
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
    return this;
  }
});
