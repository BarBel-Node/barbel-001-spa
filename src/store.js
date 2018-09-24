import Vue from 'vue'
import Vuex from 'vuex'
import Vapi from "vuex-rest-api"

Vue.use(Vuex)

const api = new Vapi({
		baseURL: "http://localhost:3000",
    state: {
			hello: {}
		}
  })
  .get({
    action: "getHello",
    property: "hello",
    path: "/hello"
	})
	.getStore()

export default new Vuex.Store(api)
