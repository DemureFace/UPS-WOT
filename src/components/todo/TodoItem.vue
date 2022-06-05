<template>
  <div class="todoItem">
    <div class="todoItem__text">
      <Transition name="show-from-left">
        <form
          v-if="changed"
          @submit.prevent="changeItem"
          class="todoItem__form"
        >
          <input v-model="changedText" />

          <BaseButton type="submit" rounded> Change todo </BaseButton>
        </form>

        <p v-else>{{ text }}</p>
      </Transition>
    </div>
    <div class="todoItem__actions">
      <img
        :src="pictureHover"
        @mouseover="hoverBin = true"
        @mouseleave="hoverBin = false"
        @click="removeTodo(id)"
      />
      <img
        :src="pictureHovers"
        @mouseover="hoverPencil = true"
        @mouseleave="hoverPencil = false"
        @click="changed = !changed"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "TodoItem",

  components: {
    BaseButton,
  },

  props: {
    text: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      picturePencil: require("@/assets/img/svg/icons/pencil.svg"),
      pictureBin: require("@/assets/img/svg/icons/bin.svg"),
      picturePencils: require("@/assets/img/svg/hover/pencil.svg"),
      pictureBins: require("@/assets/img/svg/hover/bin.svg"),
      hoverBin: false,
      hoverPencil: false,
      changed: false,
      changedText: this.text,
    };
  },

  computed: {
    pictureHover() {
      if (this.hoverBin === true) {
        return this.pictureBins;
      } else {
        return this.pictureBin;
      }
    },
    pictureHovers() {
      if (this.hoverPencil === true) {
        return this.picturePencils;
      } else {
        return this.picturePencil;
      }
    },
  },

  methods: {
    ...mapActions("todo", ["removeTodo", "changeTodo"]),

    changeItem() {
      this.changeTodo({ id: this.id, text: this.changedText });
      this.changed = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.todoItem {
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 30px;
  margin-top: 36px;
  padding: 10px;
  border: 2px solid $lightGray;
  transition: all 0.7s ease-in-out;
  box-sizing: border-box;

  @include _768 {
    flex-direction: row;
    padding: 10px 25px;
  }

  @include hover {
    background-color: $lightGray;
    color: $light;
    cursor: pointer;

    .todoItem__text {
      opacity: 1;
    }
  }

  &__text {
    width: 100%;

    font: 500 20px/31px $fontMedium;
    opacity: 0.7;

    @include _768 {
      width: auto;
    }

    p {
      text-align: center;
    }
  }

  &__form {
    display: flex;
    margin-bottom: 15px;
    flex-direction: column;

    @include _768 {
      margin-bottom: 0;
      flex-direction: row;
    }

    input {
      border-radius: 15px;
      margin-right: 0px;
      margin-bottom: 10px;

      @include _768 {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
  }
  &__actions {
    display: flex;
    gap: 20px;
  }
}
</style>
