<template>
  <label 
    class="form-checkbox" 
    :class="{ 
      'form-checkbox--red': red, 
      'form-checkbox--disabled' : disabled 
    }"
  >
    <span 
      class="form-checkbox__label form-checkbox__label--fsz14" 
      :class="fontWeight == '300'
        ? 'form-checkbox__label--fw300' 
        : ''"
    >
      {{ label }}
    </span>
            
    <VeeField
      v-model="checked"
      type="checkbox"
      name="agreement"
      :value="true"
      :uncheckedValue="false"
      class="form-checkbox__input"
    />

    <VeeErrorMessage name="agreement" class="error-message"/>

    <span class="form-checkbox__mark"></span>
  </label>
</template>

<script setup>
  const { 
    label,
    fontWeight,
    red,
    disabled,
    initialValue } = defineProps({
    label: {
      type: String,
      default: "",
      required: true,
    },
    fontWeight: {
      type: [String, Number],
      default: undefined,
    },
    red: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    initialValue: {
      type: Boolean,
      default: false,
    },
  });
  
  const checked = ref(initialValue);
</script>

<style lang="less">
  .form-checkbox {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 24px;
    padding-left: 39px;
    color: @black;
    cursor: pointer;

    &__input {
      .is-hidden();

      &:checked {
        & ~ .form-checkbox__mark {
          background-color: @black;

          &::after {
            content: "";
            position: absolute;
            display: block;
            left: 7px;
            top: 2px;
            width: 6px;
            height: 12px;
            border-bottom: 2px solid @white;
            border-right: 2px solid @white;
            transform: rotate(45deg);
          }
        }
      }
    }

    &__mark {
      position: absolute;
      box-sizing: border-box;
      display: block;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      border: 1px solid @black;
    }

    &__label {
      font-weight: 400;

      &--fsz14 {
        font-size: 14px;

        @media @bw768 {
          padding-top: 3px;
        }
      }

      &--fw300{
        font-weight: 300;

        @media @bw768 {
          font-weight: 400;
          font-size: 12px;
        }
      }
    }

    &--red {
      color: @red_BC;

      .form-checkbox__mark {
        border-color: @red_BC;
      }

      .form-checkbox__input {
        &:checked {
          & ~.form-checkbox__mark {
            background-color: @red_BC;
          }
        }
      }
    }

    &--disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
</style>