<template>
  <component
    :is="tag"
    :href="href"
    :to="to"
    :target="target"
    :disabled="disabled"
    :class="classes"
    @click="onClick"
  >
    <span class="button__text">
      <slot name="default">Button text</slot>
    </span>
  </component>
</template>

<script>
export default {
  name: "BaseButton",

  props: {
    url: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "primary",
      validator: (type) => ["primary"].includes(type),
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    tag() {
      if (!this.url) {
        return "button";
      } else if (
        /(http|https)|(tel:)|(mailto:)/.test(this.url) ||
        this.target === "_blank"
      ) {
        return "a";
      } else {
        return "router-link";
      }
    },

    href() {
      return this.tag !== "button" ? this.url : null;
    },
    to() {
      return this.tag === "router-link" ? this.url : null;
    },

    classes() {
      return [
        "button ",
        `button_${this.theme}`,
        { button_rounded: this.rounded },
      ];
    },
  },

  methods: {
    onClick(event) {
      if (this.tag === "nuxt-link") {
        event.preventDefault();
      }

      if (this.disabled) return;

      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  height: 48px;
  padding: 0 15px;
  border: none;
  transition: all 0.5s ease-in-out;

  &_primary {
    background-color: $blue;
    color: $light;

    @include hover {
      border: 2px solid $blue;
      background-color: $light;
      color: $blue;
      cursor: pointer;
      box-shadow: 0px 0px 5px $dark;
    }
  }

  &_rounded {
    border-radius: 15px;
  }

  &__text {
    font: 400 25px/29px $fontRegular;
    white-space: nowrap;
  }
}
</style>
