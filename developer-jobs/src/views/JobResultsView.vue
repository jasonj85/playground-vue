<template>
  <div>
    <h1>Job results view</h1>
    <button @click="goToHome">Home button</button>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
