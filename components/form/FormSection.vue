<template>
  <div 
    class="form-section" 
    :class="name === 'formats' ? 'form-section--w50' : ''"
  >
    <h5 class="form-section__title">{{ title }}:</h5>

    <div 
      v-if="items.length" 
      :class="{'form-section__list': items.length > 1}"
    >
      <component 
        v-for="(item, itemIndex) in items" 
        :key="itemIndex"
        :is="componentName" 
        :data="item"
        class="form-section__field"
        :class="name === 'contacts' ? 'form-section__field--w50' : ''"
      />
    </div>

    <component 
      v-else 
      :is="componentName" 
      class="form-section__field"
    />
  </div>
</template>

<script setup> 
  import {
    ModalFieldRadio,
    ModalFieldSelect,
    ModalFieldDatepicker,
    ModalFieldLabel,
    ModalFieldTextarea
  } from "~/components/modal/field/"

  const { title, name, items } = defineProps({
    title: {
      type: String,
      default: "",
      required: true,
    },
    name: {
      type: String,
      default: "",
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  });

  const componentMap = {
    "formats": ModalFieldRadio,
    "visitors": ModalFieldSelect,
    "date": ModalFieldDatepicker,
    "contacts": ModalFieldLabel,
    "wishes": ModalFieldTextarea,
  };

  const componentName = computed(() => componentMap[name]);
</script>

<style lang="less">
  .form-section {
    display: block;
    width: 100%;

    &--w50,
    &__field--w50 {
      width: calc(50% - 30px);

      @media @bw1340 {
        width: calc(50% - 1.953vw);
      }

      @media @bw650 {
        width: 100%;
        margin-bottom: 30px;
        font-weight: 400;
      }
    }
    
    &__title {
      margin: 0 0 10px;
      color: @black;
      font-family: @font1;
      font-weight: 700;
      font-size: 18px;

      @media @bw768 {
        font-size: 16px;
      }
    }

    &__list {
      .form-layout();

      margin-bottom: 20px;
    }
  }
</style>