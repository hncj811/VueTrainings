import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});
Vue.filter('add-length', function(value) {
    var len = value.length;
    var suffix = ' (' + len.toString() + ')';
    return value+ suffix;
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    },
});

new Vue({
  el: '#app',
  render: h => h(App)
})
