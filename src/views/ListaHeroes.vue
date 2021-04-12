<template>
  <div>
    <Navigation />

    <b-container fluid="md" class="m-5">
      <div class="doscolumnas_row">
        <Heroe
          :heroeParam="heroe"
          v-for="heroe in dataHeroesByCasa"
          :key="heroe.id"
        />
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import heroesJson from "../data/heroes.json";
import Heroe from "@/components/Heroe";

export default {
  /*eslint-disable*/
  name: "ListaHeroes",
  components: {
    Navigation,
    Heroe,
  },
  data() {
    return {
      dataHeroes: heroesJson,
      dataHeroesByCasa: [],
    };
  },
  mounted() {
    this.getHeroesByCasa();
  },
  computed: {
    getHeroesByCasa() {
      this.dataHeroesByCasa = [];
      let casa = this.$route.params.dc;
      if (casa == "dc") {
        for (const heroe of this.dataHeroes) {
          if (heroe.casa == "DC") {
            this.dataHeroesByCasa.push(heroe);
          }
        }
      } else if (casa == "marvel") {
        for (const heroe of this.dataHeroes) {
          if (heroe.casa == "Marvel") {
            this.dataHeroesByCasa.push(heroe);
          }
        }
      } else {
        for (const heroe of this.dataHeroes) {
          this.dataHeroesByCasa.push(heroe);
        }
      }
    },
  },
};
</script>

<style>
.doscolumnas_row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  margin: 5px;
}
</style>
