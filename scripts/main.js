
import TaskListView from './views/taskListView';

(function(){
  'use strict';

  $(document).ready(function(){
    var taskListView = new TaskListView();
    $('#main').html(taskListView.el);

  });
})();
