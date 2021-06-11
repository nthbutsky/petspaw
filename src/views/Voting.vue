<template>
  <div class="voting__container">
    <Search />
    <div class="voting-bg">
      <button
        class="back-btn"
        type="button"
        @click="$router.push('/')"
      ></button>
      <div class="voting-label">VOTING</div>
      <div
        class="image"
        v-for="image in random_image"
        :key="image.url"
        :alt="image.url"
        :style="{ 'background-image': 'url(' + image.url + ')' }"
      ></div>
      <div class="btn__container">
        <div class="btn likes"></div>
        <div class="btn favs"></div>
        <div class="btn dislikes"></div>
      </div>
      <div class="action-log__container">
        <div class="log"></div>
        <div class="log"></div>
        <div class="log"></div>
        <div class="log"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import axios from "axios";

export default {
  name: "Voting",
  components: {
    Search,
  },
  data() {
    return {
      random_image: [],
    };
  },
  created() {
    this.getBreeds();
  },
  methods: {
    async getBreeds() {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "ac1011c3-eae8-4b98-863c-f5db417fcbdd"; // Replace this with your API Key, as it's set to defaults it will be used from now onwards

        let response = await axios.get(
          "https://api.thedogapi.com/v1/images/search"
        );
        this.random_image = response.data;
        console.log("Random image from TheDogAPI loaded!");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.voting-bg {
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
  margin: 1.25rem 0.625rem 1.25rem 1.25rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  transition: background 0.5s;
  background: #fbe0dc url("../assets/back-20.png") no-repeat center;

  &:hover {
    background: #ff868e url("../assets/back-white-20.png") no-repeat center;
  }
}

.voting-label {
  width: 9.125rem;
  height: 2.5rem;
  margin: 1.25rem 1.25rem 1.25rem 0;
  background-color: #ff868e;
  color: #ffffff;
  padding: 10px;
  text-align: center;
  border-radius: 0.625rem;
  letter-spacing: 0.125rem;
  font-size: 1.25rem;
}

.image {
  display: flex;
  width: 40rem;
  height: 22.5rem;
  border-radius: 1.25rem;
  margin: 0 1.25rem 0 1.25rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn__container {
  width: 15rem;
  height: 5rem;
  margin-top: -2.5rem;
  margin-left: 13.25rem;
  background: #fff;
  border-radius: 1.25rem;
}

.btn {
  display: inline-block;
  width: 5rem;
  height: 5rem;
}

.likes {
  border: 0.25rem solid #fff;
  border-top-left-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
  background: #97eab9 url("../assets/like-white-30.png") no-repeat center;
  transition: background 0.5s;

  &:hover {
    background: rgba(151, 234, 185, 0.3) url("../assets/like-color-30.png")
      no-repeat center;
  }
}

.favs {
  border-top: 0.25rem solid #fff;
  border-bottom: 0.25rem solid #fff;
  background: #ff868e url("../assets/fav-white-30.png") no-repeat center;
  transition: background 0.5s;

  &:hover {
    background: rgba(255, 134, 142, 0.3) url("../assets/fav-30.png") no-repeat
      center;
  }

  &:active {
    background: #ff868e url("../assets/fav-full-white-30.png") no-repeat center;
  }
}

.dislikes {
  border: 0.25rem solid #fff;
  border-top-right-radius: 1.25rem;
  border-bottom-right-radius: 1.25rem;
  background: #ffd280 url("../assets/dislike-white-30.png") no-repeat center;
  transition: background 0.5s;

  &:hover {
    background: rgba(255, 210, 128, 0.3) url("../assets/dislike-color-30.png")
      no-repeat center;
  }
}

.log {
  margin: 10px 20px;
  border-radius: 0.625rem;
  width: 40rem;
  height: 3.75rem;
  background: #f8f8f7;
}
</style>