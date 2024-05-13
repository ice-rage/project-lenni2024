<template>
  <div class="plain-link">
    <a href="#" class="plain-link__label">{{ label }}</a>
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
    padding: 15px 0 15px 40px;
    background-color: transparent;

    @media(@bw768) {
      padding-left: 20px;
    }
    
    &__label {
      font-weight: 600;

      @media(@bw768) {
        font-size: 14px;
      }
    }
  }
</style>