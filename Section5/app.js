var vm1 = new Vue({
  el: '#app1', //refers to html code of this instance
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$refs.heading.innerText = 'Something Else';

setTimeout( function(){
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000);

var vm2 = new Vue({
  el: '#app2',
  methods: {
    onChange: function() {
      vm1.updateTitle('Changed from Vue instance #2')
    }
  }
});

var vm3 = new Vue({
  template: '<h1>Hello!<h1>'
});

vm3.$mount('#app3');
document.getElementById('app3').appendChild(vm3.$el);

Vue.component('hello',{
  template: '<h1>Hello!<h1>'
})