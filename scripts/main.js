
import {TasksCollection} from './models/tasksCollection';
import TaskListView from './views/taskListView';

(function(){
  'use strict';

  $(document).ready(function(){
    var tasks = new TasksCollection();
    tasks.fetch().then(function(){
      console.log(tasks);

      // var taskList = new TaskListView();
      // $('#main').html(taskList.el);

    });
  });
})();
