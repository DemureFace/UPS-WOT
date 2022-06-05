<template>
  <section class="loginAnalitics">
    <LoginAnaliticsList />
    <LoginForm />
  </section>
</template>

<script>
import LoginAnaliticsList from "./LoginAnaliticsList.vue";
import LoginForm from "./LoginForm.vue";

export default {
  name: "LoginAnalitics",

  components: {
    LoginAnaliticsList,
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.loginAnalitics {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1165px;
  margin: 0 auto;
  padding: 20px;

  @include _1280 {
    padding: 40px;
    flex-direction: row;
  }
}
</style>
