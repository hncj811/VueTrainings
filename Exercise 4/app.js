new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      shrink: true,
      highlight: false
    },
    float: 'float',
    userClass: '',
    progressBar:{
      width: '0px',
      backgroundColor: 'green'
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval( function() {
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
        vm.effectClasses.highlight = !vm.effectClasses.highlight;
      }, 1000);
    },
    updateProgress: function() {
      var vm = this;
      var width =0;
      setInterval( function() {
        width += 10;
        vm.progressBar.width = width + 'px';
      }, 1000);
    }
  }
});
