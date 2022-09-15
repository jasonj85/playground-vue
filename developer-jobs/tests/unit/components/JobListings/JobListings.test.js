import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobListings/JobListings.vue";

describe("JobListings", () => {
  const createRoute = (params = {}) => ({
    query: {
      page: "5",
      ...params,
    },
  });

  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
    },
  });

  it("fetches the jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();

    shallowMount(JobListings, createConfig($route));
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates the job listings for a max of 10 jobs returned", async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });
    const $route = createRoute({ page: "1" });

    const wrapper = shallowMount(JobListings, createConfig($route));

    await flushPromises(); // wait for the promise to resolve

    const jobListings = wrapper.findAll("[data-test=job-listing]");
    expect(jobListings).toHaveLength(10);
  });
});
