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
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost", sans-serif;
  font-style: normal;
  font-size: 100%;
}

#app {
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