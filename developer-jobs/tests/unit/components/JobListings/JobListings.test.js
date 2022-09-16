import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobListings/JobListings.vue";

describe("JobListings", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });
  });

  afterEach(() => {
    axios.get.mockReset();
  });

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
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it("fetches the jobs", () => {
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

  describe("when query params don't include a valid page number", () => {
    it("displays the first page", () => {
      const $route = createRoute({ page: undefined });

      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toContain("Page 1");
    });
  });

  describe("when query params include a valid page number", () => {
    it("displays the first page", () => {
      const $route = createRoute({ page: 4 });

      const wrapper = shallowMount(JobListings, createConfig($route));
      expect(wrapper.text()).toContain("Page 4");
    });
  });

  describe("when user is on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("shows link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(JobListings, createConfig($route));
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });
});
