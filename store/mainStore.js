
import reserveCheckboxes from "~/data/reserveCheckboxes.json";
import sceneTables from "~/data/sceneTables.json";

const initialSelectedTickets = {
  red: { price: 1400, count: 0, sum: 0 },
  black: { price: 1250, count: 0, sum: 0 },
  totalSum: 0,
};

export const useMainStore = defineStore("mainStore", {
  state: () => ({
    navMenu: {
      isActive: false,
    },
    eventPp: {
      isActive: false,
    },
    reserve: {
      checkboxes: reserveCheckboxes,
      tables: sceneTables,
      selectedTickets: initialSelectedTickets,
      submitBtnDisabled: true,
    },
  }),
  getters: {
    isNavMenuActive: (state) => state.navMenu.isActive,
    isEventPpActive: (state) => state.eventPp.isActive,
    getReserveItems: (state) => {
      return {
        "checkboxes": state.reserve.checkboxes,
        "tables": state.reserve.tables,
      };
    },
    getReserveItemState: (state) => (type, id) => computed({
      get() {
        return state.getReserveItems[type][id - 1].active;
      },
      set(newValue) {
        state.getReserveItems[type][id - 1].active = newValue;
      },
    }),
    getSelectedTicketType: (state) => {
      return {
        "red": state.reserve.selectedTickets.red,
        "black": state.reserve.selectedTickets.black,
      };
    },
    getSelectedTicketsTotalSum: (state) => computed({
      get() {
        return state.reserve.selectedTickets.totalSum;
      },
      set(newValue) {
        state.reserve.selectedTickets.totalSum = newValue;
      },
    }),
    getReserveSubmitBtnState: (state) => computed({
      get() {
        return state.reserve.submitBtnDisabled;
      },
      set(newValue) {
        state.reserve.submitBtnDisabled = newValue;
      },
    }),
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
    toggleReserveItemState(type, id) {
      if (this.getReserveItems.hasOwnProperty(type)) {
        this.getReserveItemState(type, id).value = 
          !this.getReserveItemState(type, id).value;
        
        this.calculateTicketSum();
      }
    },
    calculateTicketSum() {
      this.resetSelectedTickets();
      
      const activeCheckboxes = this.reserve.checkboxes
        .filter(checkbox => checkbox.active);

        activeCheckboxes.forEach((checkbox) => {
          if (checkbox.red) {
            this.getSelectedTicketType["red"].count++;
          } else {
            this.getSelectedTicketType["black"].count++;
          }

          this.getSelectedTicketType["red"].sum = 
            this.getSelectedTicketType["red"].price * 
            this.getSelectedTicketType["red"].count;
          this.getSelectedTicketType["black"].sum = 
            this.getSelectedTicketType["black"].price * 
            this.getSelectedTicketType["black"].count;

          this.getSelectedTicketsTotalSum.value = 
            this.getSelectedTicketType["red"].sum + 
            this.getSelectedTicketType["black"].sum;
        });

        this.getReserveSubmitBtnState.value = activeCheckboxes.length === 0;
    },
    resetSelectedTickets() {
      this.reserve.selectedTickets = JSON.parse(
        JSON.stringify(initialSelectedTickets));
    },
  },
});