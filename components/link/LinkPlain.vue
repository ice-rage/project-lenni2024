<template>
  <div class="plain-link">
    <a href="#" class="plain-link__link link">{{ label }}</a>
  </div>
</template>

<script setup>
  const { label } = defineProps({
    label: {
      type: String,
      default: "",
    }
  });
</script>

<style lang="less">
  .plain-link {
    align-self: flex-end;
    padding: 15px 0 15px 40px;
    background-color: transparent;

    @media(@bw768) {
      padding-left: 20px;
    }
  }
</style>