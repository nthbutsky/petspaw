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
      <button class="upload-btn">UPLOAD</button>
      <div class="gallery-settings">
        <label class="order-label text" for="order">ORDER</label>
        <select class="order-select" name="order">
          <option value="">Random</option>
          <option value="">Descending</option>
          <option value="">Ascending</option>
        </select>

        <label class="type-label text" for="type">TYPE</label>
        <select class="type-select" name="type">
          <option value="">All</option>
          <option value="">Static</option>
          <option value="">Animated</option>
        </select>

        <label class="breed-label text" for="breed">BREED</label>
        <select class="breed-select" name="breed">
          <option value="">None</option>
          <option v-for="breeds in all_breeds" :key="breeds.name">
            {{ breeds.name }}
          </option>
        </select>

        <label class="limit-label text" for="limit">LIMIT</label>
        <select class="limit-select" name="limit">
          <option value="">5 items per page</option>
          <option value="">10 items per page</option>
          <option value="">15 items per page</option>
          <option value="">20 items per page</option>
        </select>

        <button class="refresh-btn"></button>
      </div>
      <div class="gallery-grid__container">
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
  name: "Voting",
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
.gallery-bg {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 42.5rem;
  height: 48.875rem;
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
  cursor: pointer;

  &:hover {
    background: #ff868e url("../assets/back-white-20.png") no-repeat center;
  }
}

.gallery-label {
  width: 9.125rem;
  height: 2.5rem;
  margin: 1.25rem 0 1.25rem 0;
  background-color: #ff868e;
  color: #ffffff;
  padding: 0.625rem;
  text-align: center;
  border-radius: 0.625rem;
  letter-spacing: 0.125rem;
  font-size: 1.25rem;
}

.upload-btn {
  width: 8.9375rem;
  height: 2.5rem;
  margin: 1.25rem 0 1.25rem 18.8125rem;
  color: #ff868e;
  padding: 0.625rem;
  text-align: center;
  border: none;
  border-radius: 0.625rem;
  letter-spacing: 0.125rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background 0.5s;
  background: #fbe0dc url("../assets/upload-16.png") no-repeat 10% 50%;
  cursor: pointer;

  &:hover {
    background: #ff868e url("../assets/upload-white-16.png") no-repeat 10% 50%;
    color: #fbe0dc;
  }
}

.gallery-settings {
  display: grid;
  grid-template-columns: 260px 50px 260px 50px;
  grid-template-rows: 28px 40px 28px 40px;
  width: 40rem;
  height: 9.75rem;
  background: #f8f8f7;
  border-radius: 1.25rem;
  margin: 0 1.25rem 1.25rem 1.25rem;
}

/* label text for all selectors in settings menu */
.text {
  margin-left: 30px;
  font-size: 10px;
  color: #8c8c8c;
  font-weight: 500;
  line-height: 38px;
}

/* grid items pattern layout, see .gallery-settings for grid container pattern */
.order-label {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.order-select {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

.breed-label {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
}

.breed-select {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}

.type-label {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
}

.type-select {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
}

.limit-label {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
}

.limit-select {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
}

.refresh-btn {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border: 0.125rem solid transparent;
  border-radius: 0.625rem;
  transition: background 0.1s;

  background: #ffffff url("../assets/update-20.png") no-repeat center;

  &:hover {
    background: #ff868e url("../assets/update-white-20.png") no-repeat center;
  }
  &:active {
    background: #fbe0dc url("../assets/update-20.png") no-repeat center;
  }
}

.order-select,
.breed-select,
.type-select,
.limit-select {
  width: 290px;
  height: 2.5rem;
  margin-left: 20px;
  padding: 0 0 0 0.625rem;
  border-radius: 0.625rem;
  border: 0.125rem solid transparent;
  background: #ffffff;
  outline: none;
  transition: border 0.5s;
  font-size: 1rem;
  font-weight: 400;
  color: #8c8c8c;
  &.limit-select {
    width: 240px;
  }

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

.gallery-grid__container {
  display: grid;
  /* grid-template-columns: 200px 200px 200px;
  grid-auto-rows: 140px; */
  grid: auto-flow 8.75rem / repeat(3, 12.5rem);
  gap: 1.25rem;
  padding: 0 1.25rem;
}

.photo-grid {
  position: relative;
  border-radius: 1.25rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

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
    position: absolute;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: #fff url("../assets/fav-20.png") no-repeat center;
    border-radius: 10px;
    transition: background 0.1s;
  }
  &:active:after {
    background: #fff url("../assets/fav-color-20.png") no-repeat center;
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