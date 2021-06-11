<template>
  <div class="home__container" v-if="showHome()">
    <div class="home-background-box"></div>
    <img
      class="home-girl-image"
      src="../assets/girl-and-pet.png"
      alt="Girl and Dog Image"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    showHome() {
      if (this.$route.path === "/") {
        return true;
      } else {
        document.querySelector(".home__container").style.display = "none";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home__container {
  position: relative;
  width: 42.5rem;
  height: 52.5rem;
}
.home-background-box {
  position: relative;
  width: 42.5rem;
  height: 52.5rem;
  background-color: #fbe0dc;
  border-radius: 1.25rem;
}

.home-girl-image {
  position: absolute;
  width: 48.4375rem;
  margin-top: -850px;
  margin-left: -72px;
}

@media (max-width: 1440px) {
  .home__container {
    display: none;
  }
}
</style>