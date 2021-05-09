<template>
  <div>
    <Search />
    <div class="voting-bg">
      <button class="back-btn" type="button" @click="$router.push('/')"></button>
      <div class="voting-label">VOTING</div>
      <img class="image" v-for="image in random_image" :key="image.url" :src="image.url">
      <div class="btn-container">
        <div class="btn likes"></div>
        <div class="btn favs"></div>
        <div class="btn dislikes"></div>
      </div>
      <div class="action-log-container">
        <div class="log"></div>
        <div class="log"></div>
        <div class="log"></div>
        <div class="log"></div>
      </div>
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
        random_image: []
      }
    },
    mounted() {
      fetch("https://api.thedogapi.com/v1/images/search", {
          method: "GET",
          headers: {
            "X-Api-Key": "890863bc-4e50-406f-8125-708078cc84d3"
          },
        })
        .then(res => res.json())
        .then(data => this.random_image = data)
        .catch(err => console.log(err.message))
    }
  }
</script>

<style scoped lang="scss">
  .voting-bg {
    width: 42.5rem;
    height: 48.875rem;
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
    transition: background .5s;
    background: #FBE0DC url("../assets/back-20.png") no-repeat center;

    &:hover {
      background: #FF868E url("../assets/back-white-20.png") no-repeat center;
    }
  }

  .voting-label {
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

  .image {
    width: 40rem;
    height: 22.5rem;
    border-radius: 1.25rem;
    margin: 0 1.25rem 0 1.25rem;
    background: no-repeat center fixed;
  }

  .btn-container {
    display: inline-block;
    width: 15rem;
    height: 5rem;
    margin-top: -2.75rem;
    margin-left: 13.25rem;
    background: #FFF;
    border-radius: 1.25rem;
  }

  .btn {
    display: inline-block;
    width: 5rem;
    height: 5rem;

  }

  .likes {
    border: 0.25rem solid #FFF;
    border-top-left-radius: 1.25rem;
    border-bottom-left-radius: 1.25rem;
    background: #97EAB9 url("../assets/like-white-30.png") no-repeat center;
    transition: background .5s;

    &:hover {
      background: rgba(151, 234, 185, 0.3) url("../assets/like-color-30.png") no-repeat center;
    }
  }

  .favs {
    border-top: 0.25rem solid #FFF;
    border-bottom: 0.25rem solid #FFF;
    background: #FF868E url("../assets/fav-white-30.png") no-repeat center;
    transition: background .5s;

    &:hover {
      background: rgba(255, 134, 142, 0.3) url("../assets/fav-30.png") no-repeat center;
    }

    &:active {
      background: #FF868E url("../assets/fav-full-white-30.png") no-repeat center;
    }
  }

  .dislikes {
    border: 0.25rem solid #FFF;
    border-top-right-radius: 1.25rem;
    border-bottom-right-radius: 1.25rem;
    background: #FFD280 url("../assets/dislike-white-30.png") no-repeat center;
    transition: background .5s;

    &:hover {
      background: rgba(255, 210, 128, 0.3) url("../assets/dislike-color-30.png") no-repeat center;
    }
  }

  .action-log-container {
    margin: 0 0 1.25rem 0;
  }
  
  .log {
    margin: 0.625rem 1.25rem;
    border-radius: 0.625rem;
    width: 40rem;
    height: 3.75rem;
    background: #F8F8F7;
  }

</style>