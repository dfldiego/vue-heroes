<template>
  <div class="tarjeta__heroe">
    <div class="row">
      <div class="col">{{ heroeParam.nombre }}</div>
      <div class="col"><p>Poderes</p></div>
    </div>

    <div class="row">
      <div class="col">
        <img :src="require('@/assets/img/' + heroeParam.img)" alt="" />
      </div>
      <div class="col">
        <ul v-for="poder in heroeParam.poderes" :key="poder">
          <li>{{ poder }}</li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <router-link :to="'/detalle/' + heroeParam.id">
          <button>VER MÁS</button>
        </router-link>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Heroe",
  props: ["heroeParam"],
};
</script>

<style>
.tarjeta__heroe {
  margin: 1rem;
}

.col {
  border: 1px solid #000000;
  border-collapse: collapse;
  padding: 5px;
}
</style>
