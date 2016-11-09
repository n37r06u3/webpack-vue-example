<template lang="jade">
  h1 {{greeting}}
</template>

<script>
console.log('sync')
  module.exports = {
    data: function(){

      return {
        greeting: "hello sync"
      }
    }
  }
</script>

<style lang="sass?indentedSyntax=true">
  h1
    display: block
    position: absolute
    width: 500px
    height: 100px
    top: 50%
    left: 50%
    margin: -50px 0 0 -250px
    font-size: 54px
    line-height: 64px
    font-family: 'Open Sans', sans-serif
    font-weight: 300
    color: #525255
    text-align: center
</style>