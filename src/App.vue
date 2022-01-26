<template>
  <div id="app">
    通过$store获取state: {{ $store.state.count }}
    通过mapState获取state: {{ count }}
    <button @click="$store.commit('increment')">+</button>
    <button @click="increment">mapMutations+</button>
    <button @click="dispatchIncrement">dispatchIncrement+</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex"
export default {
  name: 'App',
  computed: {
    ...mapState([ 'count' ]),
    ...mapGetters([ 'doneTodos' ])
  },
  mounted () {
    console.log(this.count)
    console.log(this.doneTodos)
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions({
      add: 'increment'
    }),
    dispatchIncrement () {
      this.$store.dispatch('increment')
    }
  }
}
</script>
