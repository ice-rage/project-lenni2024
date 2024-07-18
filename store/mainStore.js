export const useMainStore = defineStore("mainStore", {
  state: () => ({
    navMenu: {
      isActive: false,
    },
    eventPp: {
      isActive: false,
    },
  }),
  getters: {
    isNavMenuActive: (state) => state.navMenu.isActive,
    isEventPpActive: (state) => state.eventPp.isActive,
  },
  actions: {
    closeAll() {
      this.navMenu.isActive = false;
      this.eventPp.isActive = false;
    },
    toggleNavMenu() {
      this.navMenu.isActive = !this.navMenu.isActive;
    },
    openEventPp() {
      this.eventPp.isActive = true;
    },
    closeEventPp() {
      this.eventPp.isActive = false;
    },
    notifySuccess() {
      useNuxtApp().$toast.success("Форма успешно отправлена");
    },
    notifyError() {
      useNuxtApp().$toast.error(
        "Что-то пошло не так. Пожалуйста, попробуйте еще раз");
    },
  },
});