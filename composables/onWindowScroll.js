export const useOnWindowScroll = () => {
  const store = useWindowScrollingStore();

  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const htmlHeight = document.body.offsetHeight;

  if (scrollPosition === 0) {
    store.toDown = true;
  }

  if (Math.ceil(scrollPosition) + viewportHeight >= htmlHeight) {
    store.toDown = false;
  }
};