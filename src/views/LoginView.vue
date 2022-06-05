<template>
  <LoginBaner />
  <LoginAnalitics />
</template>

<script>
import LoginBaner from "@/components/login/LoginBaner.vue";
import LoginAnalitics from "@/components/login/LoginAnalitics.vue";

export default {
  name: "LoginView",

  components: {
    LoginBaner,
    LoginAnalitics,
  },
};
</script>
