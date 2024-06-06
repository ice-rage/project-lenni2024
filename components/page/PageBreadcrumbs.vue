<template>
  <SgxBreadcrumbs v-slot="{ links }" class="breadcrumbs">
    <div class="breadcrumbs__container">
      <ul class="breadcrumbs__items">
        <li 
          v-for="(link, index) in links" 
          :key="index" 
          class="breadcrumbs__item"
        >
          <NuxtLink v-if="!link.current" :to="link.to">
            <span class="breadcrumbs__item-link link">
              {{ link.label }}
            </span>
          </NuxtLink>

          <span v-else class="breadcrumbs__item-link link">
            {{ link.label }}
          </span>
        </li>
      </ul>
    </div>
  </SgxBreadcrumbs>
</template>

<script setup></script>

<style lang="less">
  .breadcrumbs {
    margin-top: 40px;

    @media @bw450 {
      display: none;
    }

    &__container {
      .container();
    }

    &__items {
      list-style: none;
      font-size: 16px;

      @media @bw960 {
        font-size: 14px;
      }
    }

    &__item {
      display: inline;

      &:first-child {
        margin-right: 4px;
      }
    }

    &__item + &__item {
      &::before {
        content: "\00a0/\00a0";
      }
    }

    &__item-link {
      font-weight: 400;

      @media @bw1020 {
        font-size: 14px;
      }
    }
  }
</style>