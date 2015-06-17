
export default Backbone.View.extend({
  template: JST['add-task'],
  tagName: 'header',
  id: 'header',


  initialize: function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template());
    // console.log('working');
  }



});
