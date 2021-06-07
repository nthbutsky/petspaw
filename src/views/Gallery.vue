<template>
  <div>
    <Search />
    <div class="gallery-bg">
      <button
        class="back-btn"
        type="button"
        @click="$router.push('/')"
      ></button>
      <div class="gallery-label">GALLERY</div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  name: "Voting",
  components: {
    Search,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.gallery-bg {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 42.5rem;
  height: 48.875rem;
  background: #ffffff;
  border-radius: 1.25rem;
}

.back-btn {
  display: flex;
  flex-wrap: wrap;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 1.25rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  transition: background 0.5s;
  background: #fbe0dc url("../assets/back-20.png") no-repeat center;

  &:hover {
    background: #ff868e url("../assets/back-white-20.png") no-repeat center;
  }
}

.gallery-label {
  display: flex;
  flex-wrap: wrap;
  width: 9.125rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  background-color: #ff868e;
  color: #ffffff;
  padding: 0.3125rem 1.875rem;
  text-align: center;
  border-radius: 0.625rem;
  letter-spacing: 0.125rem;
  font-size: 1.25rem;
}
</style>