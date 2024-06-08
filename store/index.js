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
    form: {
      isSubmitSuccessful: false,
    },
    upDownBtn: {
      toDown: true,
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
    notifySuccess() {
      this.form.isSubmitSuccessful = true;

      useNuxtApp().$toast.success("Ваша заявка успешно отправлена");
    },
    notifyError() {
      this.form.isSubmitSuccessful = false;

      useNuxtApp().$toast.error(
        "Что-то пошло не так. Пожалуйста, попробуйте еще раз");
    },
    scrollWindow() {
      let targetPosition = 0;

      if (this.upDownBtn.toDown) {
        targetPosition = document.body.offsetHeight;
        console.log(targetPosition);
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