<template>
  <div id="loading" v-if="show">
    {{text}}
    <i class='el-icon-share'></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      icon: 'el-icon-share',
      text: 'loading...'
    }
  }
}
</script>

<style lang="less" scoped>
</style>
