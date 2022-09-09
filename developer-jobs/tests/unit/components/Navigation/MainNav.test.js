import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  const createWrapperConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("displays the website name ", () => {
    const wrapper = shallowMount(MainNav, createWrapperConfig());
    expect(wrapper.text()).toMatch("Developer Jobs");
  });

  it("displays the nav menu items", () => {
    const wrapper = shallowMount(MainNav, createWrapperConfig);
    const navMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    const navMenuTexts = navMenuItems.map((item) => item.text());

    expect(navMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Dev Co.",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user logs out", () => {
    it("shows signs in button", () => {
      const wrapper = shallowMount(MainNav, createWrapperConfig());
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user logs in", () => {
    it("displays logged in user avatar", async () => {
      const wrapper = shallowMount(MainNav, createWrapperConfig);

      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });

    it("displays subnavigation with added information", async () => {
      const wrapper = shallowMount(MainNav, createWrapperConfig);

      let subNav = wrapper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subNav = wrapper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
