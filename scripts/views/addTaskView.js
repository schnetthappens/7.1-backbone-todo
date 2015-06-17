
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

    //when 'Enter' key is pressed & input is NOT empty
    if (e.keyCode === 13 && taskInput !== '') {
      this.collection.create({
        title: taskName,
        isComplete: false
      });
      this.render();
    }

    //when 'Enter' key is pressed & input IS empty
    if (e.keyCode === 13 && taskInput === '') {
      alert('Uh oh! You forgot to enter a task!');
    }


  }



});
