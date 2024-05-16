import { defineStore } from "pinia";

export const useStore = defineStore("index", {
  state: () => ({
    isModalPpActive: false,
    isNavMenuOpened: false,
  }),
  actions: {
    toggleModalPp () {
      this.isModalPpActive = !this.isModalPpActive;
    },
    toggleNavMenu() {
      this.isNavMenuOpened = !this.isNavMenuOpened;
    }
  },
});