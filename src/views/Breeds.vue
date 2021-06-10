<template>
  <div class="breeds__container">
    <Search />
    <div class="breeds-bg">
      <button
        class="back-btn"
        type="button"
        @click="$router.push('/')"
      ></button>
      <div class="breeds-label">BREEDS</div>
      <select class="select-all-breeds" v-model="selected_breed">
        <option value="">All breeds</option>
        <option v-for="breeds in all_breeds" :key="breeds.name">
          {{ breeds.name }}
        </option>
      </select>
      <select class="items-limit" name="" id="">
        <option value="">Limit:</option>
      </select>
      <button
        class="sort-a-z"
        type="button"
        @click="$router.push('/')"
      ></button>
      <button
        class="sort-z-a"
        type="button"
        @click="$router.push('/')"
      ></button>
      <div class="breeds-grid__container">
        <div
          class="photo-grid"
          v-for="pics in all_breeds"
          :key="pics.image.url"
          :alt="pics.image.url"
          :style="{ 'background-image': 'url(' + pics.image.url + ')' }"
          @CustomEventInputChanged="passSearchResults"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import axios from "axios";

export default {
  name: "Breeds",
  components: {
    Search,
  },
  data() {
    return {
      all_breeds: [],
      selected_breed: {},
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

        let response = await axios.get("https://api.thedogapi.com/v1/breeds");
        this.all_breeds = response.data;
        console.log("All breeds from TheDogAPI loaded!");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.breeds-bg {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 42.5rem;
  height: 48.875rem;
  background: #ffffff;
  border-radius: 1.25rem;
  overflow: scroll;
  /* padding: 0.625rem 0.625rem 1rem 0.625rem; */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
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
.breeds-label {
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

.select-all-breeds {
  display: flex;
  flex-wrap: wrap;
  width: 14.125rem;
  height: 2.5rem;
  margin: 0.625rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0 0 0 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  background: #f8f8f7;
  outline: none;

  &:hover {
    border: 0.125rem solid #fbe0dc;
    padding-left: 0.5rem;
  }

  &:focus {
    border: 0.125rem solid #ff868e;
    color: #1d1d1d;
    padding-left: 0.5rem;
  }

  &:focus::placeholder {
    color: #1d1d1d;
    font-weight: 400;
  }
}

.items-limit {
  display: flex;
  flex-wrap: wrap;
  width: 6.3125rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0 0 0 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  background-color: #f8f8f7;
  outline: none;

  &:hover {
    border: 0.125rem solid #fbe0dc;
    padding-left: 0.5rem;
  }

  &:focus {
    border: 0.125rem solid #ff868e;
    color: #1d1d1d;
    padding-left: 0.5rem;
  }

  &:focus::placeholder {
    color: #1d1d1d;
    font-weight: 400;
  }
}

.sort-a-z {
  display: flex;
  flex-wrap: wrap;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  outline: none;
  background: #f8f8f7 url("../assets/sort-20.png") no-repeat center;

  &:hover {
    border: 0.125rem solid #fbe0dc;
    background: #f8f8f7 url("../assets/sort-color-20.png") no-repeat center;
  }

  &:focus {
    border: 0.125rem solid #ff868e;
  }
}

.sort-z-a {
  display: flex;
  flex-wrap: wrap;
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  outline: none;
  background: #f8f8f7 url("../assets/sort-revert-20.png") no-repeat center;

  &:hover {
    border: 0.125rem solid #fbe0dc;
    background: #f8f8f7 url("../assets/sort-revert-color-20.png") no-repeat
      center;
  }

  &:focus {
    border: 0.125rem solid #ff868e;
  }
}

.breeds-grid__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.photo-grid {
  height: 8.75rem;
  width: 200px;
  border-radius: 1.25rem;
  margin: 10px;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    background-image: rgba(255, 134, 142, 0.6);
  }
}

.card-tall {
  height: 17.5rem;
}

.card-wide {
  width: 25rem;
}

@media (min-width: 500px) {
  .app__container {
    display: none;
  }
}
</style>