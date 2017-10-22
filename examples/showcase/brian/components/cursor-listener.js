AFRAME.registerComponent('cursor-listener', {
  schema: {},
  init: function(){
    var el = this.el;

    this.el.addEventListener('raycaster-intersected', function (evt) {
      el.setAttribute('material', 'color', '#228b22');
    });

    this.el.addEventListener('mouseleave', function (evt) {
      el.setAttribute('material', 'color', '#69696');
    });
  }
});
