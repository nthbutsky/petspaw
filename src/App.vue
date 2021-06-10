<template>
  <div class="app__container">
    <Nav />
    <router-view />
    <Home />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Home from "./views/Home.vue";

export default {
  name: "App",
  components: {
    Nav,
    Home,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "css/google-fonts.css";
@import "css/css-reset.css";

#app {
  font-family: "Jost", sans-serif;

  background: #f8f8f7;
  padding-top: 1.875rem;
  height: 100vh;
}

.app__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8.5625rem;
}

@media (max-width: 500px) {
  #app {
    overflow: scroll;
    scrollbar-width: none;
  }
}
</style>