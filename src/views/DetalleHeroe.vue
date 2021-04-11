<template>
  <div>
    <Navigation />

    <div class="card mb-3">
      <div class="row no-gutters">
        <b-row no-gutters>
          <b-col class="col-md-6">
            <!-- Columna con Imagen y Descripcion-->
            <b-card-img
              :src="require('../assets/img/' + heroeEncontrado.img)"
              alt="Image"
              class="rounded-0 tarjeta-img w-50"
            ></b-card-img>
            <br />
            <button class="btn btn-primary mt-4 mb-4 active">
              <router-link to="/heroes">Volver</router-link>
            </button>
          </b-col>
          <b-col class="col-md-6">
            <b-card-title>{{ heroeEncontrado.nombre }}</b-card-title>

            <p>Descripcion:</p>
            <b-card-text>{{ heroeEncontrado.bio }}</b-card-text>

            <b-card-text>
              <ul v-for="poder in heroeEncontrado.poderes" :key="poder">
                <li>{{ poder }}</li>
              </ul>
            </b-card-text>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import heroesJson from "@/data/heroes.json";

export default {
  name: "DetalleHeroe",
  components: {
    Navigation,
  },
  data() {
    return {
      heroeEncontrado: [],
      dataHeroes: heroesJson,
    };
  },
  mounted() {
    this.findOne();
  },
  methods: {
    findOne() {
      const paramId = this.$route.params.id;
      console.log(paramId);
      this.heroeEncontrado = this.dataHeroes.find(
        (heroe) => heroe.id === paramId
      );
      console.log(this.heroeEncontrado);
    },
  },
};
</script>

<style>
/**Boton Volver */
button a {
  text-decoration: none !important;
  text-transform: uppercase !important;
  color: white !important;
  padding: 5px;
}
button:hover,
.active {
  color: #0056b3 !important;
}
/**TITULO INSTRUMENTO */
.titulo {
  text-decoration: none;
  font-weight: bold;
  color: black;
  text-align: left;
}
</style>
