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
      const element = document.querySelector(".home-background-box");
      function parallax(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
          50 - (_mouseY - _h) * 0.01
        }%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.05}% ${
          50 - (_mouseY - _h) * 0.02
        }%`;
        let x = `${_depth2}, ${_depth1}`;
        console.log(x);
        element.style.backgroundPosition = x;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home__container {
  position: relative;
  width: 680px;
  height: 840px;
}

.home-background-box {
  position: absolute;
  top: 0;
  left: -100px;
  width: 850px;
  height: 900px;
  background-image: url("../assets/girl-and-pet.png"),
    url("../assets/girl-and-pet-background.png");
  background-repeat: no-repeat;
  background-position: center;
  background-position: 50% 50%;
}

@media (max-width: 1440px) {
  .home__container {
    display: none;
  }
}
</style>