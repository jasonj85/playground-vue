<template>
  <section>
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Developer Jobs</h2>
  </section>
</template>

<script>
export default {
  name: "HeadlineSection",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Code", "Design", "Create"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % actions.length;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 4000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a92f3;
}

.code {
  color: #2bc40d;
}

.design {
  color: #ffa600;
}

.create {
  color: #f72424;
}
</style>
