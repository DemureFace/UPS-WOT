<template>
  <div class="todo">
    <img
      src="@/assets/img/svg/logo.svg"
      alt="Logo"
      width="186"
      height="119"
      class="todo__logo"
    />
    <div class="todo__list">
      <h1 class="todo__title">Thank you {{ user.name }}!</h1>

      <div class="todo__wrap">
        <form class="todo__add" @submit.prevent="addNewTodo">
          <div class="todo__inputField">
            <input
              v-model="state.newTodo"
              type="text"
              class="todo__input"
              placeholder="Write your task"
              :class="{ input_error: v$.newTodo.$error }"
            />
            <Transition name="show-from-left">
              <span v-if="v$.newTodo.$error">
                {{ v$.newTodo.$errors[0].$message }}
              </span>
            </Transition>
          </div>
          <BaseButton type="submit" class="todo__button" rounded
            >Add task</BaseButton
          >
        </form>

        <transition-group mode="out-in" name="show-from-left">
          <transition-group
            mode="out-in"
            name="show-from-left"
            tag="ul"
            v-if="todos.length"
            class="todo__items"
          >
            <li v-for="item in todos" :key="item.id" class="todo__item">
              <TodoItem :text="item.text" :id="item.id" />
            </li>
          </transition-group>
          <p v-else class="todo__empty">The are not todos</p>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import { mapGetters, mapActions } from "vuex";
import BaseButton from "../base/BaseButton.vue";
import TodoItem from "./TodoItem";

let uniqueId = require("lodash.uniqueid");

export default {
  name: "Todo",

  components: {
    TodoItem,
    BaseButton,
  },

  setup() {
    const state = reactive({
      newTodo: "",
    });

    const rules = computed(() => {
      return {
        newTodo: { required, minLength: minLength(5) },
      };
    });

    const v$ = useVuelidate(rules, state);

    return {
      state,
      v$,
    };
  },

  computed: {
    ...mapGetters("login", ["user"]),
    ...mapGetters("todo", ["todos"]),
  },

  methods: {
    ...mapActions("todo", ["addTodo"]),

    addNewTodo() {
      this.v$.$validate();

      if (!this.v$.$error) {
        this.addTodo({ id: uniqueId(), text: this.state.newTodo });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  position: relative;
  width: 100%;
  min-height: 93vh;
  padding-top: 66px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 797px;
    background: $gradient;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__logo {
    display: block;
    margin: 0 auto;
  }

  &__list {
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    min-height: 400px;
    width: 90vw;
    background-color: $light;
    border-radius: 50px;
    transform: translateY(17px);
    box-shadow: 0px 0px 10px $dark;

    @include _768 {
      transform: translateY(89px);
    }

    @include _1280 {
      min-height: 660px;
      width: 60vw;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 20px;
    font: 500 24px/30px $fontMedium;

    @include _540 {
      font: 500 30px/42px $fontMedium;
    }

    @include _768 {
      font: 500 40px/50px $fontMedium;
    }

    @include _1024 {
      margin-bottom: 50px;
      font: 500 48px/75px $fontMedium;
    }
  }

  &__wrap {
    width: 100%;

    @include _1280 {
      max-width: 80%;
    }

    @include _1440 {
      max-width: 60%;
    }
  }

  &__add {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 31px;

    @include _540 {
      flex-direction: row;
    }
  }

  &__inputField {
    width: 100%;
    position: relative;
    margin-bottom: 25px;

    @include _540 {
      width: 70%;
      margin-bottom: 0;
    }
  }

  &__input {
    background-color: $gray;
    border-radius: 15px;
    margin: 0;
    @include transition(ease-in-out, 0.3s);

    &:focus {
      background: $light;
      border: 2px solid $blue;
    }
  }

  &__empty {
    text-align: center;
    font: 500 20px/31px $fontMedium;
  }
}
</style>
