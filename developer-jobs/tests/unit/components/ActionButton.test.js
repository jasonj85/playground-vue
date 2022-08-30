import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton.vue", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "click me!",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("click me!");
  });

  it("applies correct style to button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "click me!",
        type: "primary",
      },
    });

    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
