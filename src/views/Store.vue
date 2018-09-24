<template>
  <div class="store">
    <h1>Get store</h1>
    <div>
      <label for="name_input">Name</label>
      <input v-model="name" id="name_input">
      <br>
      <label for="value_input">Value</label>
      <input v-model="value" id="value_input">
    </div>
    <button @click="sendRequest">Send request</button>
    <p>{{ $store.state.store.msg }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'store',

  data() {
    return {
      name: '',
      value: null
    }
  },

  methods: {
    ...mapActions(['postStore']),

    sendRequest() {
      this.postStore({ data: { name: this.name, value: this.value }})
    }
  }
}
</script>
