import Vue from "vue";
import VueRouter from "vue-router";
import ListaHeroes from "../views/ListaHeroes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/todos",
    name: "ListaHeroes",
    component: ListaHeroes,
  },
  {
    path: "/dc",
    name: "ListaHeroesDC",
    component: () => import("../views/ListaHeroes.vue"),
  },
  {
    path: "/marvel",
    name: "ListaHeroesMarvel",
    component: () => import("../views/ListaHeroes.vue"),
  },
  {
    path: "/detalle-heroe/:id",
    name: "DetalleHeroe",
    component: () => import("../views/DetalleHeroe.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
