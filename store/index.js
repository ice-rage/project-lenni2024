import { register } from "swiper/element/bundle";

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
  }),
  getters: {
    getSwiper: (state) => state.swiper.element 
      ? state.swiper.element.swiper 
      : null,
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
  },
});