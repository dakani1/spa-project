<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
    {{componentId}}
    <button @click='children1'>children1</button>
    <button @click='children2'>children2</button>
    <button @click='back'>后退</button>

    <children1>
      <template slot='header' slot-scope="go">gogo header</template>
      <template slot='default' slot-scope='info'>
        -{{ info.data }}- 000
      </template>
      <p slot='footer'>gogo header</p>
    </children1>

    getCount: {{ getCount }}  <br>
    counter: {{ counter1 }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import children1 from '@/components/children1.vue'
import children2 from '@/components/children2.vue'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['counter1']),
    getCount () {
      return this.$store.getters['getCount']
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      componentId: 'children1',
      info: {}
    }
  },
  mounted () {
    this.$store.dispatch('increment1')
    alert(111)
    debugger
  },
  methods: {
    ...mapActions(['increment1']),
    children1 () {
      this.$router.push('/children1')
    },
    children2 () {
      this.$router.push('/children2')
    },
    back () {
      history.go(-1)
    }
  },
  components: {
    children1,
    children2
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
