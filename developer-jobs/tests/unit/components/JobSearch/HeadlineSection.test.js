import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import HeadlineSection from "@/components/JobSearch/HeadlineSection.vue";

beforeEach(() => {
  jest.useFakeTimers("legacy");
});

afterEach(() => {
  jest.useRealTimers();
});

describe("HeadlineSection", () => {
  it("displays intro action text", () => {
    const wrapper = mount(HeadlineSection);
    const actionText = wrapper.find("[data-test='action-text']");

    expect(actionText.text()).toBe("Build for everyone");
  });

  it("changes action test at a consistent time interval", () => {
    mount(HeadlineSection);
    expect(setInterval).toHaveBeenCalled();
  });

  it("changes action text at to the next verb", async () => {
    const wrapper = mount(HeadlineSection);

    let actionText = wrapper.find("[data-test='action-text']");
    expect(actionText.text()).toBe("Build for everyone");
    jest.runOnlyPendingTimers();
    await nextTick();

    actionText = wrapper.find("[data-test='action-text']");
    expect(actionText.text()).toBe("Code for everyone");
    jest.runOnlyPendingTimers();
    await nextTick();

    actionText = wrapper.find("[data-test='action-text']");
    expect(actionText.text()).toBe("Design for everyone");
    jest.runOnlyPendingTimers();
    await nextTick();

    actionText = wrapper.find("[data-test='action-text']");
    expect(actionText.text()).toBe("Create for everyone");
  });

  it("removes interval when component unmounts", async () => {
    const wrapper = mount(HeadlineSection);
    expect(clearInterval).not.toHaveBeenCalled();
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
