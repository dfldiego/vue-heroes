import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/heroes",
    name: "ListaHeroes",
    component: () => import("../views/ListaHeroes.vue"),
  },
  {
    path: "/heroes/:dc",
    name: "ListaHeroesDC",
    component: () => import("../views/ListaHeroes.vue"),
  },
  {
    path: "/heroes/:marvel",
    name: "ListaHeroesMarvel",
    component: () => import("../views/ListaHeroes.vue"),
  },
  {
    path: "/detalle-heroe/:id",
    name: "DetalleHeroe",
    component: () => import("../views/DetalleHeroe.vue"),
  },
  { path: "/", redirect: "/heroes" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
