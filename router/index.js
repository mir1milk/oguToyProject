// router/index.js
import Vue from "vue"
import VueRouter from "vue-router"
import OguFamily from "../src/components/OguFamily.vue"
import OguStore from "../src/components/OguStore.vue"
import OguStory from "../src/components/OguStory.vue"
import OguHome from "../src/components/OguHome.vue"
Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
      { path: "/", component: OguHome },
      { path: "/family", component: OguFamily },
      { path: "/store", component: OguStore },
      { path: "/story", component: OguStory }
    ],
  })
  
  export default router
