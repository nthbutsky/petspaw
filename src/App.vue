<template>
  <div class="app-container">
    <div class="nav-container">
      <Nav />
    </div>
    <div class="home-container">
      <Home />
    </div>
    <router-view />
  </div>
</template>

<script>
  import Nav from "./components/Nav.vue";
  import Home from "./views/Home.vue";

  export default {
    name: "App",
    components: {
      Nav,
      Home
    },
    data() {
      return {
        api_key: "890863bc-4e50-406f-8125-708078cc84d3",
        url_base: "https://thedogapi.com/v1/",
      }
    },
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Jost', sans-serif;
    font-style: normal;
    font-size: 100%;
  }

  #app {
    background: #F8F8F7;
    padding-top: 1.875rem;
    height: 100vh;
    overflow: hidden;
  }

  .home-container {
    padding-left: 9.1875rem;
  }

  .app-container {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1440px) {
    .home-container {
      display: none;
    }
  }
</style>