<template>
  <div v-show="homeShow()">
    <div class="background-box"></div>
    <img
      class="girl-image"
      src="../assets/girl-and-pet.png"
      alt="Girl and Dog Image"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
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
.background-box {
  width: 42.5rem;
  height: 52.5rem;
  background-color: #fbe0dc;
  border-radius: 1.25rem;
}

.girl-image {
  position: relative;
  width: 48.4375rem;
  height: 64rem;
  margin-top: -58.3125rem;
  margin-left: -4.0625rem;
}
</style>