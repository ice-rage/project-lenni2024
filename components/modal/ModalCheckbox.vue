<template>
  <label class="check">
    <span class="check__label check__label--fsz14">
      Я соглашаюсь с пользовательским соглашением и с политикой
      использования персональных данных
    </span>
            
    <input
      v-model="checked"
      type="checkbox"
      class="check__input"
      name="agreement"
      required
      @change="detectChanges"
    />
    
    <span class="check__mark"></span>
  </label>
</template>

<script setup>
  const checked = ref(true);

  const detectChanges = () => console.log("Value changed: ", 
    checked.value);
</script>

<style lang="less"></style>