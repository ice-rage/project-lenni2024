<template>
  <header class="page-header">
    <div class="page-header__container">
      <NuxtLink to="/" class="page-header__logo">
        <SvgIcon
          class="page-header__logo-icon" 
          name="logo" 
          width="202" 
          height="147"
        />
      </NuxtLink>

      <nav class="page-header__nav" @click="toggleNavMenu">
        <NuxtLink to="/events" class="page-header__nav-link">Мероприятия</NuxtLink>
        <NuxtLink to="/" class="page-header__nav-link">Блог</NuxtLink>
        <NuxtLink to="/" class="page-header__nav-link">О нас</NuxtLink>
        <NuxtLink to="/" class="page-header__nav-link">Контакты</NuxtLink>

        <div class="page-header__nav-user">
          <NuxtLink to="/" class="page-header__nav-user-link">Александр С.</NuxtLink>

          <button type="button" class="page-header__nav-logout">
            <SvgIcon 
              class="page-header__logout-icon" 
              name="logout" 
              width="24" 
              height="24"
            />
          </button>
        </div>

      </nav>
      
      <div class="page-header__right-block">
        <button type="button" class="page-header__user-btn">
          Войти
          <SvgIcon
            class="page-header__user-icon" 
            name="user" 
            width="24" 
            height="24"
          />
        </button>

        <button 
          type="button" 
          class="page-header__nav-toggle"
          @click="toggleNavMenu"
        ></button>
      </div>
    </div>
  </header>
</template>

<script setup>
  const store = useStore();

  const { toggleNavMenu } = store;
</script>

<style lang="less">
  .page-header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 147px;
    z-index: 100;

    @media @bw1660 {
      height: 111px;
    }

    @media @bw768 {
      height: 70px;
    }

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: fade(@gray, 98%);
      
      @supports(backdrop-filter: blur(20px)) {
        background-color: fade(@gray, 70%);
        backdrop-filter: blur(20px);
      }
    }
    
    &__container {
      .container();

      position: relative;
      display: flex;
      align-items: center;

      @media @bw768 {
        padding-left: 0;
      }
    }
    
    &__logo {
      flex-shrink: 0;
      width: 202px;
      height: 147px;
      font-size: 0;
      z-index: 1;

      @media @bw1660 {
        width: 152px;
        height: 111px;
      }

      @media @bw768 {
        width: 96px;
        height: 70px;
      }
    }
    
    &__logo-icon {
      width: 100%;
      height: 100%;
    }
    
    &__nav {
      box-sizing: border-box;
      display: flex;
      align-items: baseline;
      margin: 0 auto;

      @media @bw1020 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: flex-start;
        padding: 211px 30px 30px;
        background-color: fade(@gray, 98%);
        transition: transform 0.4s;
        transform: translate(-100%);
        overflow-x: hidden;
        overflow-y: auto;

        @supports (backdrop-filter: blur(20px)) {
          background-color: fade(@gray, 70%);
          backdrop-filter: blur(20px);
        }
      }

      @media @bw768 {
        padding: 149px 20px 30px;
      }
    }
    
    &__nav-link {
      margin: 0 25px;
      color: @black;
      font-weight: 600;
      font-size: 18px;
      transition: color 0.2s;

      @media @bw1020 {
        margin: 0 0 40px;
        font-size: 16px;
      }

      &:hover {
        @media(hover: hover) {
          color: @red_BC;
        }
      }
    }

    &__nav-user {
      display: none;

      @media @bw1020 {
        display: flex;
        align-items: center;
        margin-top: 20px;
      }
    }

    &__nav-user-link {
      margin-right: 25px;
      font-weight: 400;
      font-size: 16px;
    }

    &__nav-logout {
      width: 24px;
      height: 24px;
      background-color: transparent;
      font-size: 0;
    }

    &__right-block {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 202px;

      @media @bw1660 {
        width: 152px;
      }

      @media @bw1020 {
        width: auto;
        margin-left: auto;
      }
    }

    &__user-btn {
      box-sizing: border-box;
      display: inline-block;
      padding: 15px 40px;
      border: 1px solid @black;
      background-color: transparent;
      outline: none;
      color: @black;
      font-family: @font1;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      transition: color 0.2s, background-color 0.2s, border-color 0.2s;
      overflow: hidden;

      @media @bw1020 {
        display: flex;
        width: 40px;
        height: 40px;
        padding: 0;
        border: 0;
        background: none;
        color: @black;
        font-size: 0;
      }

      &:hover {
        @media(hover: hover) {
          background-color: @black;
          color: @white;

          @media @bw1020 {
            background-color: transparent;
          }
        }
      }
    }

    &__user-icon {
      display: none;

      @media @bw1020 {
        display: block;
        margin: auto;
        z-index: 1;
      }
    }

    &__nav-toggle {
      display: none;

      @media @bw1020 {
        position: relative;
        display: block;
        right: -8px;
        margin-left: 23px;
        width: 40px;
        height: 40px;
        border: none;
        background: none;
      }

      @media @bw768 {
        margin-left: 6px;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        top: 19px;
        left: 10px;
        width: 20px;
        height: 2px;
        border-radius: 2px;
        background-color: @black;
        transform-origin: 50% 50%;
        transition: transform 0.4s, box-shadow 0.4s;
      }

      &::before {
        top: 13px;
        box-shadow: 0 6px 0 @black;
      }

      &::after {
        top: 25px;
      }
    }
  }
</style>