<template>
  <div class="nav__container">
    <a class="logo-link" href="/">
      <img class="logo" alt="PetsPaw Logo" src="../assets/logo.png" href="/" />
    </a>

    <h1>Hi!</h1>
    <p class="welcome-line">Welcome to The Dogs Api App</p>
    <p class="start-line">Lets start using it</p>

    <div class="nav-btn__container">
      <router-link to="/voting" class="voting-link-btn">
        <div class="voting-icon"></div>
        <div class="voting-btn nav-btn">VOTING</div>
      </router-link>
      <router-link to="/breeds" class="breeds-link-btn">
        <div class="breeds-icon"></div>
        <div class="breeds-btn nav-btn">BREEDS</div>
      </router-link>
      <router-link to="/gallery" class="gallery-link-btn">
        <div class="gallery-icon"></div>
        <div class="gallery-btn nav-btn">GALLERY</div>
      </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}

.nav__container {
  width: 28.125rem;
}

.logo,
.logo-link {
  width: 6.625rem;
  height: 1.5rem;
}

h1 {
  margin-top: 3.625rem;
  width: 11.5rem;
  height: 3.625rem;
  font-style: normal;
  font-weight: 500;
  font-size: 2.75rem;
  line-height: 3.625rem;
  color: #1d1d1d;
}

.welcome-line {
  margin-top: 0.625rem;
  width: 19.25rem;
  height: 1.8125rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.8125rem;
  color: #8c8c8c;
}

.start-line {
  margin-top: 3.75rem;
  width: 16.0625rem;
  height: 1.8125rem;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.8125rem;
  color: #1d1d1d;
}

.nav-btn__container {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.voting-icon {
  height: 12.375rem;
  background: #b4b7ff url("../assets/vote-table.png") no-repeat center;
  border: 0.25rem solid rgba(255, 255, 255, 0.6);
  border-radius: 1.25rem;
  transition: border 0.5s;
  margin-bottom: 0.625rem;

  &:hover {
    border: 0.25rem solid #fff;

    &:active {
      border: 0.25rem solid #fbe0dc;
    }
  }
}

.breeds-icon {
  height: 12.375rem;
  background: #97eab9 url("../assets/pet-breeds.png") no-repeat center;
  border: 0.25rem solid rgba(255, 255, 255, 0.6);
  border-radius: 1.25rem;
  transition: border 0.5s;
  margin-bottom: 0.625rem;

  &:hover {
    border: 0.25rem solid #fff;

    &:active {
      border: 0.25rem solid #fbe0dc;
    }
  }
}

.gallery-icon {
  height: 12.375rem;
  background: #ffd280 url("../assets/images-search.png") no-repeat center;
  border: 0.25rem solid rgba(255, 255, 255, 0.6);
  border-radius: 1.25rem;
  transition: border 0.5s;
  margin-bottom: 0.625rem;

  &:hover {
    border: 0.25rem solid #fff;

    &:active {
      border: 0.25rem solid #fbe0dc;
    }
  }
}

.nav-btn {
  width: 8.625rem;
  height: 2.25rem;
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 0.125rem;
  color: #ff868e;
  text-decoration: none;
  padding: 0.625rem 0 0.625rem 0;
  background-color: #fff;
  border-radius: 0.625rem;
  transition: background-color 0.5s;

  &:hover {
    background: #fbe0dc;

    &:active {
      background: #ff868e;
      color: #fff;
    }
  }
}

.voting-icon:hover + .voting-btn {
  background: #fbe0dc;
}

.voting-icon:active + .voting-btn {
  background: #ff868e;
  color: #fff;
}

.voting-link-btn:hover .voting-icon {
  border: 0.25rem solid #fff;
}

.voting-link-btn:active .voting-icon {
  border: 0.25rem solid #fbe0dc;
}

.breeds-icon:hover + .breeds-btn {
  background: #fbe0dc;
}

.breeds-icon:active + .breeds-btn {
  background: #ff868e;
  color: #fff;
}

.breeds-link-btn:hover .breeds-icon {
  border: 0.25rem solid #fff;
}

.breeds-link-btn:active .breeds-icon {
  border: 0.25rem solid #fbe0dc;
}

.gallery-icon:hover + .gallery-btn {
  background: #fbe0dc;
}

.gallery-icon:active + .gallery-btn {
  background: #ff868e;
  color: #fff;
}

.gallery-link-btn:hover .gallery-icon {
  border: 0.25rem solid #fff;
}

.gallery-link-btn:active .gallery-icon {
  border: 0.25rem solid #fbe0dc;
}

@media (max-width: 90rem) {
  .nav-btn__container {
    flex-wrap: wrap;
  }
}
@media (max-width: 28.75rem) {
  .nav-btn__container {
    display: flex;
    flex-direction: column;
  }

  a {
    margin-bottom: 0.625rem;
  }

  .voting-icon,
  .breeds-icon,
  .gallery-icon {
    display: none;
  }

  .nav-btn {
    width: 100%;
  }
}
</style>