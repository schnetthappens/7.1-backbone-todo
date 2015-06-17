import TaskItemView from './taskItemView';


export default Backbone.View.extend({
  tagName: 'ul',
  id: 'todo-list',


  initialize: function(){
    this.render();
    this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
    this.renderChildren();
  },

  //creates children views
  renderChildren: function(){
    _.invoke(this.children || [], 'remove');

    this.children = this.collection.map((child) => {
      var view = new TaskItemView({
        model: child
      });
      this.$el.prepend(view.el);
      return view;
    }.bind(this));

    return this;

  },

    remove: function(){
      _.invoke(this.children || [], 'remove');
      Backbone.View.prototype.remove.apply(this, arguments);
    }

});
