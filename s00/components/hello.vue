<template>
  <h1>{{greeting}}</h1>
</template>

<script>
  module.exports = {
    data: function(){
      return {
        greeting: "hello"
      }
    }
  }
</script>

<style>
h1{
  color:green;
}
</style>
