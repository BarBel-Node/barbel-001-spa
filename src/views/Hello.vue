<template>
  <div class="hello">
    <h1>Get hello</h1>
    <p>{{ $store.state.hello.msg }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'hello',

  methods: {
    ...mapActions(['getHello']),
  },

  mounted () {
      this.getHello()
  }
}
</script>
