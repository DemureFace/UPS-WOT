<template>
  <div class="loginAnaliticsList">
    <p class="loginAnaliticsList__description">{{ description }}</p>

    <ul class="loginAnaliticsList__list">
      <li
        v-for="item in list"
        :key="item.title"
        class="loginAnaliticsList__item"
      >
        <h5 class="loginAnaliticsList__title">{{ item.title }}</h5>
        <p class="loginAnaliticsList__text small">{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import analiticsData from "@/data/analiticsList.json";

export default {
  name: "LoginAnaliticsList",

  data() {
    return {
      description: analiticsData?.description || "",
      list: analiticsData?.list || [],
    };
  },
};
</script>

<style lang="scss" scoped>
.loginAnaliticsList {
  max-width: 664px;

  @include _768 {
    max-width: 900px;
  }

  @include _1280 {
    max-width: 664px;
  }

  &__description {
    font: 500 16px/25px $fontMedium;
    color: $dark;
    margin-bottom: 15px;
  }

  &__item {
    padding-left: 38px;

    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }

  &__title {
    position: relative;
    margin-bottom: 10px;
    &::before {
      content: "";
      position: absolute;
      width: 23px;
      height: 17px;
      top: 50%;
      left: -38px;
      transform: translateY(-50%);
      background: center / cover no-repeat
        url("@/assets/img/svg/icons/check.svg");
    }
  }
}
</style>
