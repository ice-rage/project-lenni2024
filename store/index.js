import { register } from "swiper/element/bundle";
import reserveCheckboxes from "~/data/reserveCheckboxes.json";
import sceneTables from "~/data/sceneTables.json";

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
      }
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