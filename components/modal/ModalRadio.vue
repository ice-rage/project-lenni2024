<template>
  <div v-if="items.length" class="field">
    <div class="field__radio radio">
      <label 
        class="radio__label" 
        v-for="(item, itemIndex) in items"
        :key="itemIndex" 
      >
        <input
          type="radio"
          :name="item.name"
          :value="item.value"
          class="radio__input"
        />

        <span class="radio__mark"></span>
        <span class="radio__name">{{ item.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup>
  const items = [
    {
      name: "format",
      value: "seminar",
      label: "Мастер-класс/семинар",
    },
    {
      name: "format",
      value: "concert",
      label: "Концерт/выступление",
    },
    {
      name: "format",
      value: "exhibition",
      label: "Выставка/показ",
    },
    {
      name: "format",
      value: "other",
      label: "Другое",
    },
  ];
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