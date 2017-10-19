console.log(AFRAME);

AFRAME.registerComponent('alert', {
  schema: {
    message: {
      type: 'string',
      default: 'Default'
    }
  },
  init: function(){
    console.log(this.data.message);
    console.log(this.data);
  }
});
