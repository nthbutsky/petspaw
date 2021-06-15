<template>
  <div class="home__container" v-if="showHome()">
    <div class="home-background-box" v-bind="toParallax()"></div>
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
    toParallax() {
      document.addEventListener("mousemove", parallax);
      function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
          50 - (_mouseY - _h) * 0.01
        }%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.05}% ${
          50 - (_mouseY - _h) * 0.05
        }%`;
        let x = `${_depth2}, ${_depth1}`;
        console.log(x);
        document.querySelector(
          ".home-background-box"
        ).style.backgroundPosition = x;
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
  position: absolute;
  top: 0;
  left: -6.25rem;
  width: 53.125rem;
  height: 56.25rem;
  background-image: url("../assets/girl-and-pet.png"),
    url("../assets/girl-and-pet-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
}

@media (max-width: 90rem) {
  .home__container {
    display: none;
  }
}
</style>