var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var Foo = {
    template: '<div class="foo">' +
    '<h2>课程列表</h2>' +
    '<router-view></router-view>' +
    '</div>' +
        `
<div>
  <p>当前路径: {{$route.path}}</p>
  <p>当前路由参数: {{$route.params | json}}</p>
</div>
`
}

var Bar = Vue.extend({
    template: `<p>python</p>
    <a v-link="{ path: '/foo' }">返回</a>
`
})
var Baz = Vue.extend({
    template: `<p>js</p>
<a v-link="{ path: '/foo' }">返回</a>`
})

//var App = {};
var App = Vue.extend({})
var router = new VueRouter();

router.map({
    //http://localhost:8080/#!/
    '/foo': {
        component: Foo,
        // 在/foo下设置一个子路由
        subRoutes: {
            '/': {
                // 当匹配到 /foo 时，这个组件会被渲染到 Foo 组件的 <router-view> 中。
                // 为了简便，这里使用了一个组件的定义
                component: {
                    template: `<p>
<a v-link="{ path: '/foo/bar' }">Go to /foo/bar</a>
<a v-link="{ path: '/foo/baz' }">Go to /foo/baz</a>
</p>

`
                }
            },
            '/bar': {
                // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
                // 一个Bar组件
                component: Bar
            },
            '/baz': {
                // Baz也是一样，不同之处是匹配的路由会是/foo/baz
                component: Baz
            }
        }
    },
'/user/:username': {
    component: {
        template: '<p>用户名是{{$route.params.username}}</p>'
    }
} //http://localhost:8080/#!/user/aaa
})

router.start(App, '#app');