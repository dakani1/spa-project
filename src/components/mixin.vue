<template>
  <div>
    2222 {{msg11}}
  </div>
</template>
<script>
export default {
  title: 'title test',
  mixins: [{
    data () {
      return {
        msg: 'gogoo'
      }
    },
    created () {
      console.log('mixin created')
    },
    mounted () {
      console.log('mixin mounted:' + this.msg)
    }
  }],
  data () {
    return {
      msg: 'hook data msg'
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted:' + this.msg)
  }
}
</script>
<style  scoped>
div{
  border: 1px solid red;
}
</style>
