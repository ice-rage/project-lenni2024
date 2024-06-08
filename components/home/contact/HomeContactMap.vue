<template>
  <div class="contact-map">
    <div class="contact-map__wrapper">
      <YandexMap
        class="contact-map__content"
        :settings="{
          location: {
            center: [84.96274, 56.49387],
            zoom: 15,
          },
          theme: 'dark',
        }"
      >
        <YandexMapDefaultSchemeLayer 
          class="contact-map__scheme-layer"
          :settings="{ customization }"
        />
        <YandexMapDefaultFeaturesLayer 
          class="contact-map__features-layer"/>

        <YandexMapMarker
          class="contact-map__marker"
          :settings="{
            coordinates: [84.96274, 56.49385],
            onClick: () => isPpVisible = !isPpVisible,
          }"
        >
          <Transition name="fade">
            <div v-if="isPpVisible" class="contact-map__marker-pp">
              г. Томск, ул. Белая, д. 8
            </div>
          </Transition>

          <img
            class="contact-map__marker-point"
            alt="location"
            src="/images/location.png"
          />
          <SvgIcon
            class="contact-map__marker-icon"
            name="logo"
            width="78"
            height="57"
          />
        </YandexMapMarker>
      </YandexMap>   
    </div>
  </div>
</template>

<script setup lang="ts">
  import { 
    YandexMap, 
    YandexMapDefaultSchemeLayer, 
    YandexMapDefaultFeaturesLayer,
    YandexMapMarker,
  } from "vue-yandex-maps";

  import type { VectorCustomization } from "@yandex/ymaps3-types";

  import mapTheme  from "~/data/mapDarkTheme.json";

  const customization = shallowRef<VectorCustomization>(
    mapTheme as VectorCustomization
  );

  const isPpVisible = ref(false);
</script>

<style lang="less">
  .contact-map {
    display: block;
    width: 100%;
    max-width: 752px;

    &__wrapper {
      .responsive-parent(@after-pt: 65.559%);

      @media @bw1340 {
        .responsive-parent(@after-pt: 65.395%);
      }

      @media @bw768 {
        .responsive-parent(@after-pt: 66.429%);
      }
    }

    &__content {
      .responsive-child();
    }

    &__marker {
      position: relative;
      width: 90px;
      height: 71px;
      cursor: pointer;
    }

    &__marker-point {
      width: 9px;
      height: 9px;
      max-width: initial;
    }

    &__marker-icon {
      padding: 0 0 14px 3px;
    }

    &__marker-pp {
      position: absolute;
      top: -50px;
      left: 20px;
      background: @white;
      border-radius: 10px;
      padding: 10px;
      color: @black;
      white-space: nowrap;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>