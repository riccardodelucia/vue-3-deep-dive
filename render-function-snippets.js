import { h } from "vue";

// 1) Render function basics
const App1 = {
  render() {
    return h("div", { id: "hello" }, [h("span", "world")]);
  },
};

// 2) Render function basics: v-if
const App2 = {
  render() {
    return this.ok ? h("div", { id: "hello" }, [h("span", "world")]) : h("p", "other branch");
  },
};

// 3) Render function basics: v-for
const App3 = {
  render() {
    return this.list.map((item) => {
      return h("div", { key: item.id }, item.text);
    });
  },
};

// 4) Render function basics: emulating a component which declares slots
// slot content is provided to the current component with this.$slots
const App4 = {
  render() {
    const slot = this.$slots.default ? this.$slots.default : []; // slot is always an array, if it exists

    // operations on slot content, e.g. programmatically wrapping each slot into a div
    slot.map((vnode) => {
      return h("div", [vnode]);
    });
  },
};
