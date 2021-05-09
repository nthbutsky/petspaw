<template>
  <div class="container">
    <a class="logo-link" href="/">
      <img class="logo" alt="PetsPaw Logo" src="../assets/logo.png" href="/" />
    </a>

    <h1>Hi intern!</h1>
    <p class="welcome-line">Welcome to MSI 2021 Front-end test</p>
    <p class="start-line">Lets start using The Dogs API</p>

    <div class=nav-container>
      <img class="voting-icon" src="../assets/vote-table.png" alt="Voting Icon">
      <img class="breeds-icon" src="../assets/pet-breeds.png" alt="Breeds Icon">
      <img class="gallery-icon" src="../assets/images-search.png" alt="Gallery Icon">

      <router-link to="/voting" class="voting-btn nav-btn">VOTING</router-link>
      <router-link to="/breeds" class="breeds-btn nav-btn">BREEDS</router-link>
      <router-link to="/gallery" class="gallery-btn nav-btn">GALLERY</router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.container {
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

  .voting-icon {
    background: #b4b7ff;
    border: 0.25rem solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    transition: border .5s;

    &:hover {
      border: 0.25rem solid #FFF;

      &:active {
        border: 0.25rem solid #fbe0dc;
      }
    }
  }

  .breeds-icon {
    background: #97eab9;
    border: 0.25rem solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    transition: border .5s;

    &:hover {
      border: 0.25rem solid #FFF;

      &:active {
        border: 0.25rem solid #fbe0dc;
      }
    }
  }

  .gallery-icon {
    background: #ffd280;
    border: 0.25rem solid rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    transition: border .5s;

    &:hover {
      border: 0.25rem solid #fff;

      &:active {
        border: 0.25rem solid #fbe0dc;
      }
    }
  }

  .nav-container {
    margin-top: 1.25rem;
    width: 27.875rem;
    display: grid;
    grid-template-columns: 8.625rem 8.625rem 8.625rem;
    grid-template-rows: 12.375rem 2.25rem;
    column-gap: 1rem;
    row-gap: 0.625rem;
    align-items: stretch;
    justify-items: stretch;
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
    transition: background-color .5s;

    &:hover {
      background: #fbe0dc;

      &:active {
        background: #ff868e;
        color: #fff;
      }
    }
  }

  .voting-btn:hover~.voting-icon {
    border: 0.25rem solid #fff;
  }

  .voting-btn:active~.voting-icon {
    border: 0.25rem solid #fbe0dc;
  }

  .breeds-btn:hover~.breeds-icon {
    border: 0.25rem solid #fff;
  }

  .breeds-btn:active~.breeds-icon {
    border: 0.25rem solid #fbe0dc;
  }

  .gallery-btn:hover~.gallery-icon {
    border: 0.25rem solid #fff;
  }

  .gallery-btn:active~.gallery-icon {
    border: 0.25rem solid #fbe0dc;
  }

//  @media (max-width: 1440px) {
//   .container {
//     display: none;
//   }
// }

</style>