<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobListings/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobListings/JobListings.vue";

export default {
  name: "JobListingsView",
  components: { JobFiltersSidebar, JobListings },
};
</script>
