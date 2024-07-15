<template>
  <div class="form-section">
    <h5 class="form-section__title">{{ props.title }}:</h5>

    <div 
      v-if="items.length" 
      :class="{'form-section__list': props.items.length > 1}"
    >
      <component 
        v-for="(item, itemIndex) in props.items" 
        :key="itemIndex"
        :is="componentName" 
        :data="item"
        class="form-section__field"
        :class="props.componentClass"
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
    FieldRadio,
    FieldSelect,
    FieldDatepicker,
    FieldLabel,
    FieldTextarea
  } from "~/components/field"

  const props = defineProps({
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
    componentClass: {
      type: String,
      default: "",
    },
  });

  const componentMap = {
    "formats": FieldRadio,
    "visitors": FieldSelect,
    "date": FieldDatepicker,
    "contacts": FieldLabel,
    "wishes": FieldTextarea,
  };

  const componentName = computed(() => 
    componentMap[props.name]);
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