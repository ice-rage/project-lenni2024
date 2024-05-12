import { defineStore } from "pinia";

export const useStore = defineStore("index", {
  state: () => ({
    modal: false,
  }),
  actions: {
    openModalPp() {
      this.modal = true;
    },
    closeModalPp() {
      this.modal = false;
    },
  },
});