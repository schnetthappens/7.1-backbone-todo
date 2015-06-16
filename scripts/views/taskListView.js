
export default Backbone.View.extend({

  intialize:function(){
    this.render();

  },


  render: function(){
    this.$el.html(this.template());
  }
  
});
