<template>
  <div class="home__container">
    <div v-show="homeShow()">
      <div class="home-background-box"></div>
      <img
        class="home-girl-image"
        src="../assets/girl-and-pet.png"
        alt="Girl and Dog Image"
      />
    </div>
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
    homeShow() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home-background-box {
  width: 42.5rem;
  height: 52.5rem;
  background-color: #fbe0dc;
  border-radius: 1.25rem;
}

.home-girl-image {
  position: relative;
  width: 48.4375rem;
  height: 64rem;
  margin-top: -58.3125rem;
  margin-left: -4.0625rem;
}

@media (max-width: 1440px) {
  .home__container {
    display: none;
  }
}
</style>