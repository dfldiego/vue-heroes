<template>
  <div>
    <Navigation />

    <b-container fluid="md" class="m-5">
      <div class="doscolumnas_row">
        <Heroe
          :heroeParam="heroe"
          v-for="heroe in getHeroesByCasa"
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
  methods: {
    filtroHeroes(parametro) {
      this.dataHeroesByCasa = [];
      let isPoder = false;
      console.log("parametroFiltro", parametro);
      this.dataHeroesByCasa = this.dataHeroes.filter((heroe) => {
        /* debugger; */
        heroe.poderes.filter((poder) => {
          if (poder.toLowerCase().includes(parametro.toLowerCase())) {
            this.isPoder = true;
          }
        });

        if (heroe.nombre.toLowerCase().includes(parametro.toLowerCase())) {
          return heroe;
        } else if (heroe.bio.toLowerCase().includes(parametro.toLowerCase())) {
          return heroe;
        } else if (this.isPoder) {
          this.isPoder = false;
          return heroe;
        }
      });
      console.log("this.dataHeroesByCasaFiltroBuscador", this.dataHeroesByCasa);
      return this.dataHeroesByCasa;
    },
  },
  computed: {
    getHeroesByCasa() {
      this.dataHeroesByCasa = [];
      const parametro = this.$route.params.param;
      console.log("parametro", parametro);
      if (
        parametro === undefined ||
        parametro == null ||
        parametro == "dc" ||
        parametro == "marvel"
      ) {
        let casa = this.$route.params.param;
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
        return this.dataHeroesByCasa;
      } else {
        this.dataHeroesByCasa = this.filtroHeroes(parametro);
        return this.dataHeroesByCasa;
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
