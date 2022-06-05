<template>
  <form class="loginForm" @submit.prevent="submitHandler">
    <div class="loginForm__content">
      <div class="loginForm__inputField">
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          v-model.trim="state.username"
          :class="{ input_error: v$.username.$error }"
        />

        <Transition name="show-from-left">
          <span v-if="v$.username.$error">
            {{ v$.username.$errors[0].$message }}
          </span>
        </Transition>
      </div>

      <div class="loginForm__inputField">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          v-model.trim="state.password"
          :class="{ input_error: v$.password.$error }"
        />

        <Transition name="show-from-left">
          <span v-if="v$.password.$error">
            {{ v$.password.$errors[0].$message }}
          </span>
        </Transition>
      </div>

      <BaseButton type="submit" class="loginForm__btn"> LOGIN </BaseButton>

      <router-link to="/login" class="loginForm__forgot">
        Forgot Password
      </router-link>
    </div>
    <router-link to="/login" class="loginForm__register">
      Register now
    </router-link>
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",

  components: {
    BaseButton,
  },

  setup() {
    const state = reactive({
      username: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        username: { required },
        password: { required, minLength: minLength(5) },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },

  methods: {
    ...mapActions("login", ["setLogin"]),

    submitHandler() {
      this.v$.$validate();

      if (!this.v$.$error) {
        this.setLogin({
          username: this.state.username,
          password: this.state.password,
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.loginForm {
  width: 100%;
  margin-top: 30px;
  background: $light;
  box-shadow: 2px 2px 15px 2px rgba($black, 0.1);

  @include _768 {
    width: 500px;
  }

  @include _1280 {
    width: 421px;
    margin-top: 0;
    transform: translateY(-220px);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 30px 0;
  }

  &__inputField {
    position: relative;
    width: 100%;
    margin-bottom: 40px;
    color: $red;
    font: 400 16px/19px $fontRegular;
  }

  &__btn {
    width: 100%;
    margin-bottom: 20px;
  }

  &__forgot {
    width: max-content;
    font: 400 20px/23px $fontRegular;
    color: $blue;
    margin-bottom: 20px;
  }

  &__register {
    position: relative;
    text-align: center;
    width: max-content;
    font: 400 25px/29px $fontRegular;
    color: $dark;
    padding: 17px;
    background-color: $lightDark;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
