import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays the website name ", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Developer Jobs");
  });

  it("displays the nav menu items", () => {
    const wrapper = mount(MainNav);
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
});

describe("when used is logged out", () => {
  it("shows signs in button", () => {
    const wrapper = mount(MainNav);
    const loginButton = wrapper.find("[data-test='login-button']");
    expect(loginButton.exists()).toBe(true);
  });
});

describe("when used is logged in", () => {
  it("displays logged in user avatar", async () => {
    const wrapper = mount(MainNav);

    let profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });
});
