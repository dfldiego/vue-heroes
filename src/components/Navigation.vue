<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/heroes" active-class="active" exact
            >Home</router-link
          >
          <router-link to="/heroes/dc" active-class="active"
            >Heroes DC</router-link
          >
          <router-link to="/heroes/marvel" active-class="active"
            >Heroes Marvel</router-link
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search()">
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Buscar por nombre,bio,poderes"
              v-model="parametroBuscador"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Buscar</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  /*eslint-disable*/
  name: "Navigation",
  data() {
    return {
      parametroBuscador: "",
    };
  },
  mounted() {},
  methods: {
    search() {
      if (this.parametroBuscador.length > 0) {
        window.location.href = "/heroes/" + this.parametroBuscador;
      } else {
        window.location.href = "/heroes/";
      }
    },
  },
};
</script>

<style>
ul a,
nav a {
  text-decoration: none !important;
  text-transform: uppercase !important;
  color: white !important;
  padding: 5px;
}
ul a:hover,
nav a:hover,
.active {
  color: #0056b3 !important;
}
</style>
