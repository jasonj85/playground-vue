import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput", () => {
  it("commits the value when the input is changed", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });

    const input = wrapper.find("input");
    input.setValue("l");
    input.setValue("lo");
    input.setValue("lon");

    const messages = wrapper.emitted()["update:modelValue"];

    expect(messages[0]).toEqual(["l"]);
    expect(messages[1]).toEqual(["lo"]);
    expect(messages[2]).toEqual(["lon"]);
  });
});
