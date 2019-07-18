<template>
  <div ref="cld1">
    <p>name: {{getCount}}</p>
    <slot name="header">header</slot>
    <br>
    <slot name="default" :data="msg">{{msg}}</slot>
    <br>
    <slot name="footer">footer</slot>
    <button @click="increment">click</button>
    <hr>
    <Comp type="primary">2222</Comp>
    <hr>
    <div class="column">
      <div>22222 22222</div>
      <div>22222</div>
      <div>22222</div>
      <div>22222</div>
      <p>pppppp</p>
      <div>22222</div>
    </div>
    // chang
    <div @click="change1">{{list.name}}</div>
    222
    <!-- <dl>
      <dt>dt</dt>
      <dd>dd</dd>
      <dd>ddd</dd>
    </dl>
    <div style="resize: both;border: 1px solid red;">33</div>-->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Comp from './compent.js'
export default {
  mixins: [{
    data () {
      return {
        msg: 'mixin - data'
      }
    },
    mounted () {
      console.log('mixin mounted:' + this.msg)
      this.$loading1('加载中...')
      setTimeout(() => {
        this.$loading1({
          text: '加载完成'
        })
      }, 2000)
    }
  }],
  beforeRouteEnter (to, from, next) {
    console.log(from)
    next(vm => {
      vm.go()
    })
  },
  data () {
    return {
      msg: 'default1daf    dfa',
      list: {
        name: [1, 2],
        sex: [
          {
            la: 'dafa'
          },
          {
            la: 'daaa'
          }
        ]
      }
    }
  },
  methods: {
    change () {
      this.list.name[1] = {
        go: 'new'
      }
      this.list.sex1 = 'body'
      this.$set(this.list.name, 1, {
        go: 'new2'
      })
      console.log(this.list)
    },
    ...mapMutations({
      increment: 'operate/increment'
    }),
    go () {
      console.log('调用成功')
    }
  },
  mounted () {
    console.log('mixin mounted:' + this.msg)
    console.log(JSON.stringify(Comp))
    console.log(this.$route.meta)
    console.log('children1 mounted')
  },
  computed: {
    ...mapState({
      name: 'name',
      counter1: state => state.operate.counter1
    }),
    ...mapGetters({
      getCount: 'operate/getCount'
    })
  },
  beforeCreate () {
    console.log('children1 beforeCreate')
  },
  created () {
    console.log('children1 created')
  },
  beforeMount () {
    console.log('children1 beforeMount')
  },
  beforeUpdate () {
    console.log('children1 beforeUpdate')
  },
  updated () {
    console.log('children1 updated')
  },
  beforeDestroy () {
    console.log('children1 beforeDestroy')
  },
  destroyed () {
    console.log('children1 destroyed')
  },
  components: {
    Comp
  }
}
</script>

<style lang='less' scoped>
.column {
  column-width: 300px;
  column-gap: 15px;
  column-rule: 15px solid blue;
  div {
    border: 1px solid red;
    resize: both;
    height: 50px;
  }
  // div:first-line{
  //   color: yellow;
  //   font-size: 20px;
  // }
}

div:nth-child(1) {
  font-size: 30px;
  color: darkcyan;
  font-style: italic;
}

div:empty {
  width: 300px;
  height: 100px;
  border: 10px solid red;
  border-image: linear-gradient(left, red, green);
  border-image: -webkit-linear-gradient(left, red, green);
}

p:nth-of-type(1) {
  font-size: 30px;
  color: darkcyan;
  font-style: italic;
}

// dt+dd{
//   color: pink;
//   font-size: 50px;
// }
// dd::first-letter{
//   color: pink;
// }

// dt~dd{
//   color: green;
//    font-size: 50px;
// }
</style>
