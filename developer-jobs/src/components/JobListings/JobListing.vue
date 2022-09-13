<template>
  <li class="mb-7">
    <router-link
      :to="jobLink"
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
            <ul>
              in
              <li
                v-for="(location, index) in job.locations"
                :key="location"
                class="inline-block"
              >
                <span v-if="index !== 0">, </span>{{ location }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2 font-bold">Qualifications</h3>
        </div>
        <div>
          <ul class="pl-8 list-disc">
            <li
              v-for="qualification in job.minimumQualifications"
              :key="qualification"
            >
              {{ qualification }}
            </li>
          </ul>
        </div>
        <div class="mt-2 text-center">
          <router-link :to="jobLink" class="text-brand-blue-1"
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
  computed: {
    jobLink() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>
