var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);
var sync = require('vue!./components/sync.vue')

//var App = {};
var App = Vue.extend({})
var router = new VueRouter();

router.map({
    //http://localhost:8080/#!/
    '/async': {
        component: function (resolve) {
            require(['vue!./components/async.vue'], resolve)
        }},
    '/async2': {
        component: function (resolve) {
            require(['vue!./components/async2.vue'], resolve)
        }},
    '/sync': {
        component: sync
    }
})

router.start(App, '#app');