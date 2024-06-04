<template>
  <div class="link-plain">
    <a :href="link" class="link-plain__link link">{{ label }}</a>
  </div>
</template>

<script setup>
  const { link, label } = defineProps({
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
  .link-plain {
    align-self: flex-end;
    padding: 15px 0 15px 40px;
    background-color: transparent;

    @media @bw1020 {
      padding-left: 20px;
      line-height: 1.2;
    }
  }
</style>