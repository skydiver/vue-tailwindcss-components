<template>
  <div class="h-full flex flex-col">
    <div class="h-14 pb-2 flex items-center border-b border-gray-700">
      <span
        class="w-10 h-10 m-2 mr-4 rounded avatar-image"
        :style="`background-image:url('${avatar}')`"
      />
      <span class="flex-grow cursor-default">{{ name }}</span>
      <span
        class="text-center text-gray-600 hover:text-gray-400 cursor-pointer"
      >
        <svg
          class="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          @click="$emit('close')"
        >
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </span>
    </div>

    <div class="flex-grow my-4">
      <p>This is SidebarContent component.</p>
    </div>

    <div
      class="h-12 flex items-center justify-center border bg-gray-900 border-gray-700 opacity-75 hover:opacity-100 cursor-pointer"
      @click="logout"
    >
      Logout
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return 'Demo User';
    },
    avatar() {
      return 'https://placehold.it/150x150';
    },
  },
  methods: {
    async logout() {
      console.log('Custom logout action ...');
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.avatar-image {
  background-size: cover;
  background-position: center;
}
</style>
