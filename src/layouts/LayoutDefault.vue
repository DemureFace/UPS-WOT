<template>
  <TheHeader />

  <main>
    <router-view></router-view>
  </main>

  <TheFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "LayoutDefault",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
</style>
