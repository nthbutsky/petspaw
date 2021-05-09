<template>
  <div>
    <Search />
    <div class="gallery-bg">
      <button class="back-btn" type="button" @click="$router.push('/')"></button>
      <div class="gallery-label">GALLERY</div>
    </div>
  </div>
</template>

<script>
  import Search from "../components/Search.vue"

  export default {
    name: "Voting",
    components: {
      Search
    },
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .gallery-bg {
    width: 42.5rem;
    height: 48.875rem;
    background: #FFFFFF;
    border-radius: 1.25rem;
    background: #FFFFFF;
    border-radius: 1.25rem;
  }

  .back-btn {
    float: left;
    width: 2.5rem;
    height: 2.5rem;
    margin: 1.25rem 0.625rem 1.25rem 1.25rem;
    padding: 0.625rem;
    border-radius: 0.625rem;
    border: transparent;
    background: #FBE0DC url("../assets/back-20.png") no-repeat center;

    &:hover {
      background: #FF868E url("../assets/back-white-20.png") no-repeat center;
    }
  }

  .gallery-label {
    float: left;
    width: 9.125rem;
    height: 2.5rem;
    margin-top: 1.25rem;
    background-color: #FF868E;
    color: #FFFFFF;
    padding: 0.3125rem;
    text-align: center;
    border-radius: 0.625rem;
    letter-spacing: 0.125rem;
    font-size: 1.25rem;
  }
</style>