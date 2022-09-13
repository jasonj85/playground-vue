import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobListings/JobListings.vue";

describe("JobListings", () => {
  it("fetches the jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates the job listings for the correct number of jobs returned", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const wrapper = shallowMount(JobListings);

    await flushPromises(); // wait for the promise to resolve

    const jobListings = wrapper.findAll("[data-test=job-listing]");
    expect(jobListings).toHaveLength(15);
  });
});
