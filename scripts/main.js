
import {TasksCollection} from './models/tasksCollection';
import TaskListView from './views/taskListView';
import AddTaskView from './views/addTaskView';

(function(){
  'use strict';

  $(document).ready(function(){

    var tasks = new TasksCollection();
    tasks.fetch().then(function(){

      var taskList = new TaskListView({collection: tasks});
      $('#main').html(taskList.el);

    });

    var addTask = new AddTaskView({collection: tasks});
    $('#header').append(addTask.el);

  });
})();
