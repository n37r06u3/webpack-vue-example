// import Vue from 'vue'
// import App from './App.vue'
// import store from './store'
//
// new Vue({
//     el: '#app',
//     store,
//     render: h => h(App)
// })


var Vue = require('vue')
var hello = require('vue!./App.vue')
new Vue({
    el: 'body',
    components: {
        hello: hello
    }
})