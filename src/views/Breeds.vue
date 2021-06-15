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
      <select class="all-breeds" v-model="selected_breed">
        <option value="">All breeds</option>
        <option v-for="breeds in all_breeds" :key="breeds.name">
          {{ breeds.name }}
        </option>
      </select>
      <select class="items-limit" name="" id="">
        <option value="">Limit: 5</option>
        <option value="">Limit: 10</option>
        <option value="">Limit: 15</option>
        <option value="">Limit: 20</option>
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
          :class="{
            'photo-grid-item-1': pic.id === 1,
            'photo-grid-item-5': pic.id === 5,
            'photo-grid-item-8': pic.id === 8,
            'photo-grid-item-9': pic.id === 9,
          }"
          v-for="pic in all_breeds"
          :key="pic.image.url"
          :alt="pic.image.url"
          :style="{ 'background-image': 'url(' + pic.image.url + ')' }"
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
        console.log(this.all_breeds);
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
  height: 48.25rem;
  background: #ffffff;
  border-radius: 1.25rem;
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.back-btn {
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
  width: 9.125rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 1.25rem 0;
  background-color: #ff868e;
  color: #ffffff;
  padding: 0.625rem;
  text-align: center;
  border-radius: 0.625rem;
  letter-spacing: 0.125rem;
  font-size: 1.25rem;
}

.all-breeds {
  width: 14.125rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0 0 0 0.625rem;
  border-radius: 0.625rem;
  border: 0.125rem solid transparent;
  background: #f8f8f7;
  outline: none;
  transition: border 0.5s;
  font-size: 1rem;
  font-weight: 400;
  color: #8c8c8c;

  &:hover {
    border: 0.125rem solid #fbe0dc;
  }

  &:focus {
    border: 0.125rem solid #ff868e;
    color: #1d1d1d;
  }

  &:focus::placeholder {
    color: #1d1d1d;
    font-weight: 400;
  }
}

.items-limit {
  width: 6.3125rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0 0 0 0.625rem;
  border-radius: 0.625rem;
  border: 0.125rem solid transparent;
  background-color: #f8f8f7;
  outline: none;
  transition: border 0.5s;
  font-size: 1rem;
  font-weight: 400;
  color: #8c8c8c;

  &:hover {
    border: 0.125rem solid #fbe0dc;
  }

  &:focus {
    border: 0.125rem solid #ff868e;
    color: #1d1d1d;
  }

  &:focus::placeholder {
    color: #1d1d1d;
    font-weight: 400;
  }
}

.sort-a-z {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0.125rem solid transparent;
  outline: none;
  transition: border 0.5s;

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
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0.625rem 0.625rem 0;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: 0.125rem solid transparent;
  outline: none;
  transition: border 0.5s;

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
  display: grid;
  /* grid-template-columns: 200px 200px 200px;
  grid-auto-rows: 140px; */
  grid: auto-flow 140px / repeat(3, 200px);
  gap: 20px;
  padding: 0 20px;
}

.photo-grid {
  position: relative;
  border-radius: 1.25rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &:hover:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 134, 142, 0.6);
    border-radius: 1.25rem;
    /* mix-blend-mode: color; */
  }
  &:hover:after {
    content: "";
    position: relative;
    width: 100%;
    height: 34px;
    margin: 10px;
    background: #fff;
    border-radius: 10px;
    transition: background 0.1s;
  }
}

.photo-grid-item-1 {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}

.photo-grid-item-5 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 4;
}

.photo-grid-item-8 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 6;
}

.photo-grid-item-9 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 5;
  grid-row-end: 7;
}
</style>