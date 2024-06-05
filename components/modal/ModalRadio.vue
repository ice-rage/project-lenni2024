<template>
  <div v-if="items.length" class="field">
    <div class="field__radio radio">
      <label 
        v-for="(item, itemIndex) in items"
        class="radio__label"
        :key="itemIndex"
      >
        <VeeField
          v-model="checkedValue"
          type="radio"
          name="format"
          :value="item.value"
          :uncheckedValue="''"
          class="radio__input"
          @change="detectChanges"
        />

        <span class="radio__mark"></span>
        <span class="radio__name">{{ item.label }}</span>
      </label>

      <VeeErrorMessage name="format" class="field__error-message"/>
    </div>
  </div>
</template>

<script setup>
  const items = [
    {
      value: "seminar",
      label: "Мастер-класс/семинар",
    },
    {
      value: "concert",
      label: "Концерт/выступление",
    },
    {
      value: "exhibition",
      label: "Выставка/показ",
    },
    {
      value: "other",
      label: "Другое",
    },
  ];

  const checkedValue = ref(items[0].value);

  const detectChanges = () => console.log("Value changed: ", 
    checkedValue.value);
</script>

<style lang="less">
  .radio {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 137px;

    &__label {
      position: relative;
      display: block;
      box-sizing: border-box;
      min-height: 23px;
      padding-left: 26px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__input {
      .is-hidden();

      &:checked {
        & ~ .radio__mark {
          background-color: @black;
        }
      }
    }

    &__mark {
      position: absolute;
      box-sizing: border-box;
      left: 0;
      top: 0;
      width: 23px;
      height: 23px;
      margin-left: 3px;
      padding: 3px;
      border: 2px solid @black;
      border-radius: 50%;
      background-color: transparent;
      background-clip: content-box;
      transition: background-color 0.2s;
    }

    &__name {
      display: block;
      margin-left: 23px;
      font-family: @font1;
      font-weight: 400;
      font-size: 16px;
    }
  }
</style>