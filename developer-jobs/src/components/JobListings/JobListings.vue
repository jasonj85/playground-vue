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
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobListings', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobListings', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
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
    currentPage() {
      const page = this.$route.query.page || 1;
      return Number.parseInt(page);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.jobs.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },
    currentPageJobs() {
      const pageNumber = this.currentPage;
      const jobsPerPage = 10;
      const firstJob = (pageNumber - 1) * jobsPerPage;
      const lastJob = pageNumber * jobsPerPage;
      return this.jobs.slice(firstJob, lastJob);
    },
  },
  async mounted() {
    const baseUrl = process.env.VUE_APP_API_URL;
    const response = await axios.get(`${baseUrl}/jobs`);
    this.jobs = response.data;
  },
};
</script>
