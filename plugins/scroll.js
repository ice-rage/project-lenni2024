export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("scroll", {
    mounted(el, binding) {
      binding.dir.listener = function(evt) {
        binding.value(evt, el);
      };
      window.addEventListener("scroll", binding.dir.listener);
    },
    unmounted(el, binding) {
      window.removeEventListener("scroll", binding.dir.listener);
    },
  });
});