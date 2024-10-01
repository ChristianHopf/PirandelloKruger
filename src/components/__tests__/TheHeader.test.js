import { it, expect, describe, vi } from "vitest";
import TheHeader from "../TheHeader.vue";
import ProjectIcarusView from "../../views/ProjectIcarusView.vue";
import HomeView from "../../views/HomeView.vue";
import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/project-icarus", component: ProjectIcarusView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe("header", () => {
  it("should render nav links", () => {
    expect(TheHeader).toBeTruthy();

    const wrapper = mount(TheHeader);

    expect(wrapper.text()).toContain("HOME");
    expect(wrapper.text()).toContain("MISSION");
    expect(wrapper.text()).toContain("SERVICES");
    expect(wrapper.text()).toContain("CONTACT");
  });
});

describe("home link", () => {
  it("should navigate to HomeView", async () => {
    const wrapper = mount(TheHeader, {
      global: {
        plugins: [router],
      },
    });

    const mockPush = vi.spyOn(router, "push");

    await router.isReady();
    await router.push("/project-icarus");
    expect(router.currentRoute.value.path).toBe("/project-icarus");

    const link = wrapper.find('a[href="/"]');
    await link.trigger("click");
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
