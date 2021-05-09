<template>
  <div class="container">
    <input
      type="text"
      class="search-bar"
      placeholder="Search for breeds by name"
    />
    <div class="search-icon"></div>
    <a href="#" class="icon like"></a>
    <a href="#" class="icon fav"></a>
    <a href="#" class="icon dislike"></a>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  width: 29.375rem;
  height: 3.75rem;
  margin-bottom: 0.625rem;
  border: transparent;
  border-radius: 1.25rem;
  padding: 1.25rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.5s;

  &:hover {
    border: 0.125rem solid #fbe0dc;
    padding: 1.125rem;

    &::placeholder {
      visibility: hidden;
    }
  }

  &:focus {
    border: 0.125rem solid #ff868e;
    color: #1d1d1d;
    padding: 1.125rem;
  }

  &:focus::placeholder {
    color: #1d1d1d;
    font-weight: 400;
  }
}

.search-icon {
  display: inline-block;
  margin-left: -3.125rem;
  margin-bottom: -0.9375rem;
  margin-right: 0.625rem;
  padding: 1.25rem;
  border-radius: 0.625rem;
  background: #fbe0dc url("../assets/search-20.png") no-repeat center;
  transition: background 0.5s;

  &:hover {
    background: url("../assets/search-white-20.png") no-repeat center;
    background-color: #ff868e;
  }
}

.icon {
  float: right;
  width: 3.75rem;
  height: 3.75rem;
  background: #ffffff;
  border-radius: 1.25rem;
  padding: 0.9375rem;
  margin-left: 0.625rem;
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