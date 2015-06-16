
import {TasksCollection} from './models/tasksCollection';
import TaskListView from './views/taskListView';

(function(){
  'use strict';

  $(document).ready(function(){
    var tasks = new TasksCollection();
    tasks.fetch().then(function(){

      var taskList = new TaskListView({collection: tasks});
      $('#main').html(taskList.el);

      // console.log(tasks);

    });
  });
})();
