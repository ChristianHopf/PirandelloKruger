import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SecurityGuardsView from "../views/SecurityGuardsView.vue";
// import ProjectIcarusView from "../ProjectIcarusView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/mission",
      name: "mission",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: HomeView,
    },
    {
      path: "/security-guards",
      name: "security-guards",
      component: SecurityGuardsView,
    },
    {
      path: "/project-icarus",
      name: "project-icarus",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProjectIcarusView.vue"),
    },
  ],
});

export default router;
