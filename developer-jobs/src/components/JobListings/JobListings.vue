<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in jobs" :key="job.id" :job="job"></JobListing>
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "./JobListing.vue";
export default {
  name: "JobListings",
  components: { JobListing },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/jobs")
      .then((res) => {
        this.jobs = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
