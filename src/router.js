import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Component from './components/Component.vue'
import Componentone from './components/Componentone.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/component",
      name: "Component",
      component: Component
    },
    {
      path: "/componentone",
      name: "Componentone",
      component: Componentone
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
