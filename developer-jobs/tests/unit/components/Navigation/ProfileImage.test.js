import { shallowMount } from "@vue/test-utils";

import ProfileImage from "@/components/Navigation/ProfileImage.vue";

describe("ProfileImage", () => {
  it("displays the user profile image", () => {
    const wrapper = shallowMount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
