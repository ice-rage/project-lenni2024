<template>
  <div class="right-block">
    <form
      action="https://jsonplaceholder.typicode.com/posts"
      class="right-block__subscription-form subscription-form"
      id="js-subscriptionForm"
    >
      <h4 class="subscription-form__title">
        Подпишись и будь в курсе происходящего
      </h4>

      <div class="subscription-form__wrapper">
        <div class="subscription-form__input-wrapper">
          <input
            type="email"
            name="email"
            placeholder="Email"
            class="subscription-form__input"
            id="#js-subscriptionEmail"
            required
          />
        </div>

        <button type="submit" class="subscription-form__submit">
          Подписаться
        </button>
      </div>

      <label class="subscription-form__check check">
        <span class="check__label check__label--fsz14 check__label--fw300">
          Согласен на обработку персональных данных
        </span>

        <input
          type="checkbox"
          class="check__input"
          name="agreement"
          required
          checked
        />
        <span class="check__mark"></span>
      </label>
    </form>

    <div class="right-block__creator">
      <span class="right-block__creator-label">
        Создание и продвижение
      </span>

      <NuxtLink
        to="https://tagree.ru/"
        target="_blank"
        rel="nofollow"
        class="right-block__creator-link"
      >
        <SvgIcon
          class="right-block__creator-icon"
          name="tagree"
          width="56"
          height="17"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less">
  .right-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 410px;

    @media @bw1660 {
      max-width: 388px;
    }

    &__creator {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 15px;
      height: 22px;

      @media @bw1020 {
        height: 19px;
      }

      @media @bw650 {
        align-items: flex-start;
        height: 22px;
        margin-top: 266px;
      }
    }

    &__creator-label {
      font-weight: 600;

      @media @bw1020 {
        font-size: 14px;
      }
    }

    &__creator-link {
      height: 17px;

      @media @bw650 {
        width: 58px;
        height: 22px;
      }
    }

    &__creator-icon {
      width: 100%;
      height: 100%;
    }
  }
</style>