<template>
  <div>
    <Navigation @getHeroesByBuscador="setHeroesByBuscador" />

    <b-container fluid="md" class="m-5">
      <div class="doscolumnas_row" v-if="isBuscador">
        <Heroe
          :heroeParam="heroe"
          v-for="heroe in getHeroesByBuscador"
          :key="heroe.id"
        />
      </div>
      <div class="doscolumnas_row" else="!isBuscador">
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
      dataTextoBuscador: "",
      dataHeroesByBuscador: [],
      isBuscador: false,
    };
  },
  mounted() {
    this.getHeroesByCasa();
    this.getHeroesByBuscador();
  },
  methods: {
    setHeroesByBuscador(obj) {
      console.log(" obj.textoBuscador", obj.textoBuscador);
      this.dataTextoBuscador = obj.textoBuscador;
      console.log("this.dataTextoBuscador", this.dataTextoBuscador);
    },
  },
  computed: {
    getHeroesByCasa() {
      console.log("isBuscador", this.isBuscador);
      this.isBuscador = false;
      console.log("isBuscador2", this.isBuscador);
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
      return this.dataHeroesByCasa;
    },
    getHeroesByBuscador() {
      console.log("isBuscador3", this.isBuscador);
      this.isBuscador = true;
      console.log("isBuscador4", this.isBuscador);
      console.log("this.dataTextoBuscador", this.dataTextoBuscador);
      if (this.dataTextoBuscador === "") {
        this.dataHeroesByBuscador = [];
        return this.dataHeroesByBuscador;
      }

      this.dataTextoBuscador = this.dataTextoBuscador.toLocaleLowerCase();

      this.dataHeroesByBuscador = this.dataHeroes.map((heroe) => {
        if (
          heroe.nombre.toLocaleLowerCase() === this.dataTextoBuscador ||
          heroe.bio
            .toLocaleLowerCase()
            .indexOf(String(this.dataTextoBuscador)) !== -1
        ) {
          return heroe;
        }
        const poderes = heroe.poderes.map((poder) => poder.toLocaleLowerCase());
        if (poderes.includes(this.dataTextoBuscador)) {
          return heroe;
        }
      });
      console.log("this.dataHeroesByBuscador", this.dataHeroesByBuscador);

      return this.dataHeroesByBuscador;
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
