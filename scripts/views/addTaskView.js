
export default Backbone.View.extend({
  template: JST['add-task'],


  initialize: function(){
    this.render();
  },


  render: function(){
    this.$el.html(this.template());
    // console.log('working');
  }



});
