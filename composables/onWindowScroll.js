export const useOnWindowScroll = () => {
  const store = useStore();

  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const htmlHeight = document.body.offsetHeight;

  if (scrollPosition === 0) {
    store.upDownBtn.toDown = true;
  }

  if (Math.ceil(scrollPosition) + viewportHeight >= htmlHeight) {
    store.upDownBtn.toDown = false;
  }
};