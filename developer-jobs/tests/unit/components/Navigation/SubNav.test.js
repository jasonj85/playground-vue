import { mount } from "@vue/test-utils";

import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  const createConfig = (routeName) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  describe("when user is on the job page", () => {
    it("displays the job count", () => {
      const routeName = "JobResults";
      const wrapper = mount(SubNav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on the job page", () => {
    it("does not display the job count", () => {
      const routeName = "Home";
      const wrapper = mount(SubNav, createConfig(routeName));

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
