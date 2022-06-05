<template>
  <section class="loginBaner">
    <h1 class="loginBaner__title">
      Welcome to <br />
      Business Analytics Online
    </h1>
  </section>
</template>

<script>
export default {
  name: "LoginBaner",
};
</script>

<style lang="scss" scoped>
.loginBaner {
  background: center / cover no-repeat url("@/assets/img/png/bg.png");

  @include _320 {
    padding: 30px 20px;
  }

  @include _540 {
    padding: 50px 20px 70px;
  }

  @include _1280 {
    padding: 150px 40px 70px;
  }

  @include _1440 {
    padding: 215px 0 70px 10vw;
  }

  @include _1680 {
    padding: 215px 0 70px 15vw;
  }

  @include _1920 {
    padding: 215px 0 70px 19vw;
  }

  &__title {
    max-width: 629px;
    color: $light;

    @include _320 {
      font: 400 23px/1.57 $fontRegular;
    }

    @include _375 {
      font: 400 30px/1.57 $fontRegular;
    }

    @include _540 {
      font: 400 55px/1.57 $fontRegular;
    }
  }
}
</style>
