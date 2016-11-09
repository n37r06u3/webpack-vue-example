<!--<template>-->
    <!--<div>-->
        <!--<Display></Display>-->
        <!--<Increment></Increment>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->

<!--import Display from './Display.vue'-->
<!--import Increment from './IncrementButton.vue'-->
<!--import store from './store' // import 我们刚刚创建的 store-->
<!--console.log(11111)-->
<!--export default {-->
  <!--components: {-->
    <!--Display: Display,-->
    <!--Increment: Increment-->
  <!--},-->
  <!--store: store // 在根组件加入 store，让它的子组件和 store 连接-->
<!--}-->
<!--</script>-->


<template>
    <h3>Count is {{ counterValue }}</h3>
    <button @click='increment'>Increment +1</button>
</template>

<script>
var store = require('./store')
var getCount = require('./getters')
import * as actions from './actions'
  module.exports = {
    data: function(){
      return {
        greeting: "hello"
      }
    },
    store: store,
     vuex: {
    getters: {
      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
      counterValue: getCount
    },
       actions: actions
  }
  }
</script>
