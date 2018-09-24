import Vue from 'vue'
import Vuex from 'vuex'
import Vapi from "vuex-rest-api"

Vue.use(Vuex)

const api = new Vapi({
		baseURL: "http://localhost:3000",
    state: {
			hello: {},
			greetings: {},
			store: {}
		}
  })
  .get({
    action: "getHello",
    property: "hello",
    path: "/hello"
  })
  .get({
    action: "getGreetings",
    property: "greetings",
		path: "/greetings",
		queryParams: true
  })
  .post({
    action: "postStore",
    property: "store",
    path: "/store"
  })
  .getStore()

export default new Vuex.Store(api)
