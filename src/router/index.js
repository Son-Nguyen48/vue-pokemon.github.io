import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "detail",
    component: () => import("../views/Detail/Detail.vue"),
  },
  {
    path: "/pokemon/",
    name: "pokemon-detail",
    component: () => import("../views/Detail/PokemonDetail.vue"),
    props: { pokemonDetail: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
