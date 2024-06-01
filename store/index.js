export const useStore = defineStore("index", {
  state: () => ({
    isNavMenuActive: false,
    modal: {
      isEventPpActive: false,
    },
  }),
  actions: {
    toggleNavMenu() {
      this.isNavMenuActive = !this.isNavMenuActive;
    },
    openEventPp() {
      this.modal.isEventPpActive = true;
    },
    closeEventPp() {
      this.modal.isEventPpActive = false;
    }
  },
});