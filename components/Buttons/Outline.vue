<template>
  <button
    class="py-2 px-4 bg-transparent font-semibold hover:text-white border hover:border-transparent"
    :class="
      `text-${color}-600 hover:bg-${color}-500 border-${color}-500 ${roundedClass}`
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    roundedClass() {
      return this.rounded ? 'rounded-full' : 'rounded';
    },
  },
};
</script>
