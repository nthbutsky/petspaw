<template>
  <div class="search-bar__container">
    <input
      type="text"
      class="search-bar"
      placeholder="Search for breeds by name"
      v-model="query"
      v-on:change="searchBreed()"
    />
    <button class="search-btn"></button>
    <button href="#" class="icon-btn like"></button>
    <button href="#" class="icon-btn fav"></button>
    <button href="#" class="icon-btn dislike"></button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search_result: [],
      query: "",
    };
  },
  methods: {
    async searchBreed() {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "ac1011c3-eae8-4b98-863c-f5db417fcbdd"; // Replace this with your API Key, as it's set to defaults it will be used from now onwards

        let response = await axios.get(
          `https://api.thedogapi.com/v1/breeds/search?q=`
        );
        this.search_result = response.data;
        console.log("Searched breed from TheDogAPI loaded!");
        console.log(this.search_result);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

// @change="emitEventChanged"
// methods: {
//     searchBreed() {
//       fetch(`https://api.thedogapi.com/v1/breeds/search?q=${this.query}`, {
//         method: "GET",
//         headers: {
//           "X-Api-Key": "890863bc-4e50-406f-8125-708078cc84d3",
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => (this.all_breeds = data))
//         .catch((err) => console.log(err.message));
//     },
//     emitEventChanged() {
//       this.$emit("CustomEventInputChanged", this.all_breeds);
//     },
//   },
// };
</script>

<style scoped lang="scss">
.search-bar__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  align-content: center;
}

.search-bar {
  width: 444px;
  height: 56px;
  margin-bottom: 0.625rem;
  border: 0.125rem solid transparent;
  border-radius: 1.25rem;
  font-size: 1rem;
  outline: none;
  padding-left: 20px;
  transition: border 0.5s;

  &:hover {
    border: 0.125rem solid #fbe0dc;

    &::placeholder {
      visibility: hidden;
    }
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

.search-btn {
  margin-left: -50px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 1.25rem;
  border: none;
  border-radius: 0.625rem;
  background: #fbe0dc url("../assets/search-20.png") no-repeat center;
  transition: background 0.5s;
  cursor: pointer;

  &:hover {
    background: url("../assets/search-white-20.png") no-repeat center;
    background-color: #ff868e;
  }
}

.icon-btn {
  width: 3.75rem;
  height: 3.75rem;
  background: #ffffff;
  border-radius: 1.25rem;
  border: none;
  margin-left: 0.625rem;
  margin-bottom: 0.625rem;
  cursor: pointer;
  padding: 0;
  transition: background 0.5s;
}

.like {
  background: #ffffff url("../assets/like-30.png") no-repeat center;

  &:hover {
    background: #fbe0dc url("../assets/like-30.png") no-repeat center;

    &:active {
      background: #ff868e url("../assets/like-white-30.png") no-repeat center;
    }
  }
}

.fav {
  background: #ffffff url("../assets/fav-30.png") no-repeat center;

  &:hover {
    background: #fbe0dc url("../assets/fav-30.png") no-repeat center;

    &:active {
      background: #ff868e url("../assets/fav-white-30.png") no-repeat center;
    }
  }
}

.dislike {
  background: #ffffff url("../assets/dislike-30.png") no-repeat center;

  &:hover {
    background: #fbe0dc url("../assets/dislike-30.png") no-repeat center;

    &:active {
      background: #ff868e url("../assets/dislike-white-30.png") no-repeat center;
    }
  }
}
</style>
