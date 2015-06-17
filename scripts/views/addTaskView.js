
export default Backbone.View.extend({
  template: JST['add-task'],
  tagName: 'header',
  id: 'header',

  events: {
    'keypress #new-todo': 'addTask'
  },

  initialize: function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template());
    // console.log('working');
  },


  addTask: function(e){
    var taskInput = this.$('#new-todo').val();
    var taskName = taskInput;

    if (e.keyCode === 13) {
      // console.log(taskName);

      if (taskInput === '') {
        alert('Uh oh! You forgot to enter a task!');
      }
    }
  }



});
