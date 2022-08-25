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
