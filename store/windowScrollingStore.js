export const useWindowScrollingStore = defineStore("windowScrollingStore", {
  state: () => ({
    toDown: true,
  }),
  actions: {
    scrollWindow() {
      let targetPosition = 0;

      if (this.toDown) {
        targetPosition = document.body.offsetHeight;
      }

      window.scrollTo({
        top: targetPosition,
        left: 0,
        behavior: "smooth",
      });

      this.toDown = targetPosition === 0;
    },
  },
});