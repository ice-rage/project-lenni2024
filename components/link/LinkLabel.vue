<template>
  <div class="link-label">
    <a :href="props.link" class="link-label__link link">
      {{ props.label }}
    </a>
  </div>
</template>

<script setup>
  const props = defineProps({
    link: {
      type: String,
      default: "#",
    },
    label: {
      type: String,
      default: "",
      required: true,
    }
  });
</script>

<style lang="less">
  .link-label {
    padding: 15px 0 15px 40px;
    background-color: transparent;

    @media @bw1020 {
      padding-left: 20px;
      line-height: 1.2;
    }
  }
</style>