<template>
  <div class="greetings">
    <h1>Get greetings</h1>
    <div>
      <label for="name_input">Name</label>
      <input v-model="name" id="name_input">
    </div>
    <button @click="sendRequest">Send request</button>
    <p>{{ $store.state.greetings.msg }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'greetings',

  data() {
    return {
      name: ''
    }
  },

  methods: {
    ...mapActions(['getGreetings']),

    sendRequest() {
      this.getGreetings({ params: { name: this.name }})
    }
  }
}
</script>
