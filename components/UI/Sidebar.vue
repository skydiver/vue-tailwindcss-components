<template>
  <div>
    <div class="absolute top-0 right-0">
      <div
        class="w-12 h-12 mt-2 mr-2 flex items-center justify-center bg-gray-100 text-gray-400 hover:text-gray-600 border hover:border-gray-400 rounded-md cursor-pointer"
        @click="toggleMenu"
      >
        <svg
          class="w-5 h-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>
    </div>

    <transition name="slide">
      <div
        v-if="show"
        class="fixed top-0 right-0 w-10/12 sm:w-6/12 md:w-5/12 lg:w-3/12 h-screen p-4 bg-gray-800 text-white z-50 sidebar-menu"
        :style="`width: ${width}px`"
      >
        <SidebarContent @close="toggleMenu" />
      </div>
    </transition>

    <transition name="slide-fade">
      <div
        v-if="show"
        class="opacity-50 fixed inset-0 z-40 bg-black"
        @click="toggleMenu"
      />
    </transition>
  </div>
</template>

<script>
import SidebarContent from './SidebarContent.vue';

export default {
  components: {
    SidebarContent,
  },
  props: {
    width: {
      type: Number,
      default: 600,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>
/* $sidebar-width: 600px;
$animation-duration: 0.3s; */

/* .sidebar-menu {
  width: $sidebar-width;
} */

.slide-enter-active,
.slide-leave-active {
  transition: margin-right 0.3s ease-out;
}

.slide-enter,
.slide-leave-to {
  margin-right: -600px;
}

.slide-enter-to,
.slide-leave {
  margin-right: 0px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
