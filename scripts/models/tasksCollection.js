var Task = Backbone.Model.extend({
  defaults: {
    title: '',
    isComplete: ''
  },
});


var TasksCollection = Backbone.Collection.extend({
  url: "http://tiny-lasagna-server.herokuapp.com/collections/schnettTasks",
  model: Task
});

export default {TasksCollection};
