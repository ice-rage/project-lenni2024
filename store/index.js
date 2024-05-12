import { defineStore } from "pinia";

export const useStore = defineStore("index", {
  state: () => ({
    isModalActive: false,
  }),
  actions: {
    openModalPp() {
      this.isModalActive = true;
    },
    closeModalPp() {
      this.isModalActive = false;
    },
  },
});