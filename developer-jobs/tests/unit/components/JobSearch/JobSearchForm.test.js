import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when user submits the form", () => {
    it("emits the search event with the correct search term", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("C# developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Cardiff");

      const submitButton = wrapper.find("[data-test='submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobListings",
        query: {
          role: "C# developer",
          location: "Cardiff",
        },
      });
    });
  });
});
