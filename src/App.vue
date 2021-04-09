<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import ListaHeroes from './views/ListaHeroes';
import DetalleHeroe from './views/DetalleHeroe';
export default {
  /*eslint-disable*/
  name: 'App',
  components: {
    ListaHeroes,
    DetalleHeroe,
  },
}
</script>

<style></style>
