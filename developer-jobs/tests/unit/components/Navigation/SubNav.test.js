import { mount } from "@vue/test-utils";

import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  describe("when user is on the job page", () => {
    it("displays the job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is not on the job page", () => {
    it("does not display the job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
