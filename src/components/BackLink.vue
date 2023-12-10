<template>
  <a v-if="showBackButton" @click.native="goBack" class="back-link button">
    Zpět
  </a>
</template>

<script>
export default {
  data() {
    return {
      showBackButton: true,
    };
  },
  computed: {
    showBackButton() {
      return this.$route.path !== '/';
    },
  },
  methods: {
    // Go back in the browser history
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.back-link {
  position: absolute;
  top: 4px;
  left: 4px;
}
</style>
