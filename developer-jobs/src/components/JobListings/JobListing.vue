<template>
  <li class="mb-7">
    <router-link
      to="/jobs/results/{{job.id}}"
      class="block mx-auto bg-white border border-solid border-brand-gray-2 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.jobType }}</span>
          </div>
          <div class="mr-5">
            <span> @ {{ job.organization }}</span>
          </div>
          <div>
            in
            <span v-for="(location, index) in job.locations" :key="location">
              <span v-if="index !== 0">, </span>
              {{ location }}
            </span>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2">Qualifications</h3>
        </div>
        <div>
          <ul class="pl-8 list-disc">
            <li>Bachelors Degree.</li>
            <li>Good attitude.</li>
            <li>10 years of experience with commercial skills.</li>
          </ul>
        </div>
        <div class="mt-2 text-center">
          <router-link to="/jobs/results/{{job.id}}" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>
