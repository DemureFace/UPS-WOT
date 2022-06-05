<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__top">
        <img
          src="@/assets/img/svg/logo.svg"
          alt="Logo"
          width="56"
          height="35"
        />
        <nav class="footer__list">
          <router-link
            v-for="link in links"
            :key="link.name"
            :to="link.url"
            class="footer__link"
          >
            {{ link.name }}
          </router-link>
        </nav>
      </div>

      <div class="footer__divider" />

      <p class="footer__text">
        Copyright &copy; 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
        Opportunity Lender.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",

  data() {
    return {
      links: [
        {
          name: "Terms & Conditions",
          url: "/login", // Should use /terms etc
        },
        {
          name: "Privacy",
          url: "/login",
        },
        {
          name: "Notice at Collection",
          url: "/login",
        },
        {
          name: "CA Privacy Hub",
          url: "/login",
        },
        {
          name: "Contact Us",
          url: "/login",
        },
        {
          name: "Sitemap",
          url: "/login",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 30px 10px;
  background-color: $dark;
  color: $light;

  &__wrap {
    margin: 0 auto;
    max-width: 1164px;
  }

  &__top {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @include _768 {
      flex-direction: row;
    }
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: $light;
    margin: 30px 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    @include _768 {
      flex-wrap: nowrap;
      margin-left: 10px;
      margin-top: 0;
    }
  }

  &__link {
    margin-right: 20px;
    font: 500 16px/25px $fontMedium;
    color: $light;
    transition: all 0.3s ease-in-out;

    @include hover {
      color: $blue;
    }

    &:last-of-type {
      margin-right: 0;
    }

    @include _320 {
      padding: 5px;
      font: 300 12px/16px $fontLight;
    }

    @include _540 {
      font: 400 14px/18px $fontRegular;
    }

    @include _1024 {
      padding: 0;
      font: 500 16px/25px $fontMedium;
    }
  }
  &__text {
    font: 500 12px/19px $fontMedium;
  }
}
</style>
