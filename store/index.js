import { register } from "swiper/element/bundle";
import reserveCheckboxes from "~/data/reserveCheckboxes.json";
import sceneTables from "~/data/sceneTables.json";

const initialSelectedTickets = {
  red: { price: 1400, count: 0, sum: 0 },
  black: { price: 1250, count: 0, sum: 0 },
  totalSum: 0,
};

export const useStore = defineStore("index", {
  state: () => ({
    isNavMenuActive: false,
    modal: {
      isEventPpActive: false,
    },
    swiper: {
      element: null,
      isBeginning: true,
      isEnd: false,
    },
    form: {
      isSubmitSuccessful: undefined,
    },
    reserve: {
      selectedTickets: initialSelectedTickets,
      checkboxes: reserveCheckboxes,
      tables: sceneTables,
    },
    upDownBtn: {
      toDown: true,
    },
  }),
  getters: {
    getSwiper: (state) => state.swiper.element 
      ? state.swiper.element.swiper 
      : null,
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
    getSelectedTickets: (state) => 
      state.reserve.selectedTickets,
  },
  actions: {
    toggleNavMenu() {
      this.isNavMenuActive = !this.isNavMenuActive;
    },
    openEventPp() {
      this.modal.isEventPpActive = true;
    },
    closeEventPp() {
      this.modal.isEventPpActive = false;
    },
    registerSwiper(element, parameters) {
      if (element && parameters) {
        this.swiper.element = element;

        register();

        Object.assign(this.swiper.element, parameters);

        this.swiper.element.initialize();
      } 
    },
    onSlideChange() {
      if (this.getSwiper) {
        this.swiper.isBeginning = this.getSwiper.isBeginning;
        this.swiper.isEnd = this.getSwiper.isEnd;
      }
    },
    toPrevSlide() {
      if (this.getSwiper) {
        this.getSwiper.slidePrev();
      }
    },
    toNextSlide() {
      if (this.getSwiper) {
        this.getSwiper.slideNext();
      }
    },
    notifySuccess() {
      this.form.isSubmitSuccessful = true;

      useNuxtApp().$toast.success("Ваша заявка успешно отправлена");
      this.resetSubmitState();
    },
    notifyError() {
      this.form.isSubmitSuccessful = false;

      useNuxtApp().$toast.error(
        "Что-то пошло не так. Пожалуйста, попробуйте еще раз");
      this.resetSubmitState();
    },
    resetSubmitState() {
      this.form.isSubmitSuccessful = undefined;
    },
    toggleReserveItemState(type, id) {
      if (type in this.getReserveItems) {
        this.getReserveItemState(type, id).value = 
          !this.getReserveItemState(type, id).value;
        
        this.calculateTicketSum();
      }
    },
    calculateTicketSum() {
      this.resetSelectedTickets();
      
      this.reserve.checkboxes
        .filter(checkbox => checkbox.active)
        .forEach((checkbox) => {
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

          this.getSelectedTickets.totalSum = 
            this.getSelectedTicketType["red"].sum + 
            this.getSelectedTicketType["black"].sum;
        })
    },
    resetSelectedTickets() {
      this.reserve.selectedTickets = {
        red: { price: 1400, count: 0, sum: 0 },
        black: { price: 1250, count: 0, sum: 0 },
        totalSum: 0,
      };

      console.log(this.reserve.selectedTickets);
    },
    scrollWindow() {
      let targetPosition = 0;

      if (this.upDownBtn.toDown) {
        targetPosition = document.body.offsetHeight;
      }

      window.scrollTo({
        top: targetPosition,
        left: 0,
        behavior: "smooth",
      });

      this.upDownBtn.toDown = targetPosition === 0;
    },
  },
});