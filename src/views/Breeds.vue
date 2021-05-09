<template>
  <div class="container">
    <Search />
    <div class="breeds-bg">
      <div class="breeds-nav__container">
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
      </div>

      <div class="breeds-grid__container">
        <div
          class="photo-grid"
          v-for="pics in all_breeds"
          :key="pics.image.url"
          :alt="pics.image.url"
          :style="{ 'background-image': 'url(' + pics.image.url + ')' }"
        ></div>
      </div>
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
    return {
      all_breeds: [],
      selected_breed: {},
    };
  },
  mounted() {
    fetch("https://api.thedogapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "X-Api-Key": "890863bc-4e50-406f-8125-708078cc84d3",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.all_breeds = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped lang="scss">
.breeds-bg {
  width: 42.5rem;
  height: 48.875rem;
  background: #ffffff;
  border-radius: 1.25rem;
  overflow: scroll;
  padding: 0.625rem 0.625rem 1rem 0.625rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.back-btn {
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.625rem 0.625rem 1.25rem 0.625rem;
  padding: 0.625rem;
  border-radius: 0.625rem;
  border: transparent;
  background: #fbe0dc url("../assets/back-20.png") no-repeat center;
  transition: background 0.5s;

  &:hover {
    background: #ff868e url("../assets/back-white-20.png") no-repeat center;
  }
}

.breeds-label {
  float: left;
  width: 9.125rem;
  height: 2.5rem;
  margin-top: 0.625rem;
  background-color: #ff868e;
  color: #ffffff;
  padding: 0.3125rem;
  text-align: center;
  border-radius: 0.625rem;
  letter-spacing: 0.125rem;
  font-size: 1.25rem;
}

.select-all-breeds {
  float: left;
  width: 14.125rem;
  height: 2.5rem;
  margin: 0.625rem;
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
  float: left;
  width: 6.3125rem;
  height: 2.5rem;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
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
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
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
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
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

.photo-grid {
  height: 140px;
  width: 30%;
  border-radius: 1.25rem;
  margin: 0.625rem;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    background-color: rgba(255, 134, 142, 0.6);
  }
}

.card-tall {
  height: 17.5rem;
}

.card-wide {
  width: 25rem;
}

.breeds-grid__container {
  display: flex;
  flex-wrap: wrap;
}

.breeds-nav__container {
  display: flex;
}
</style>