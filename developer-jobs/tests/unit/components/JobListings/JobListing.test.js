import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobListings/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Javascript developer",
    organization: "DevCo",
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: { job: { ...jobProps } },
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it("renders correct job title", () => {
    const jobProps = createJobProps({ title: "Javascript developer" });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Javascript developer");
  });

  it("renders job organisation", () => {
    const jobProps = createJobProps({ organization: "DevCo" });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("DevCo");
  });

  it("renders job locations", () => {
    const jobProps = createJobProps({ locations: ["London", "Berlin"] });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("London, Berlin");
  });

  it("renders job qualifications", () => {
    const jobProps = createJobProps({ locations: ["Be good", "Be fun"] });

    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Be good");
    expect(wrapper.text()).toMatch("Be fun");
  });

  it("renders correct job url", () => {
    const jobProps = createJobProps({ id: 99 });

    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    expect(jobPageLink.props("to")).toBe("/jobs/results/99");
  });
});
