<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing
        v-for="job in currentPageJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      ></JobListing>
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
  computed: {
    currentPageJobs() {
      const page = this.$route.query.page || 1;
      const pageNumber = Number.parseInt(page);
      if (pageNumber) {
        const jobsPerPage = 10;
        const firstJob = (pageNumber - 1) * jobsPerPage;
        const lastJob = firstJob + jobsPerPage;
        return this.jobs.slice(firstJob, lastJob);
      }

      return this.jobs.slice(0, this.jobsPerPage);
    },
  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
  },
};
</script>
