import { it, expect, describe } from "vitest";
import HomeHero from "../home/HomeHero.vue";
import { mount } from "@vue/test-utils";

describe("HomeHero", () => {
  it("should render a video and the appropriate text", () => {
    const wrapper = mount(HomeHero);

    expect(wrapper.find("video").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toBe("PIRANDELLO KRUGER");
    expect(wrapper.find("p").text()).toBe("SECURING YOUR WORLD");
  });
});
