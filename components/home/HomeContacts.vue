<template>
  <section class="contacts">
    <div class="contacts__container">
      <h2 class="contacts__title section-title" id="contacts">
        Контакты
      </h2>

      <div class="contacts__wrapper">
        <div class="contacts__items">
          <InfoItem 
            v-for="(contact, contactIndex) in contacts" 
            :key="contactIndex" 
            class="contacts__item" 
            :data="contact"
          />
        </div>
        
        <ContactMap class="contacts__map"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  import ContactMap from "./map/MapContacts.vue";

  const contacts = [
    {
      iconHeight: "24",
      iconWidth: "24",
      iconName: "location",
      content: `
        <h4 class='info-item__title'>Томск, Белая 8</h4>
        <p class='info-item__data'>2 этаж</p>
        <p class='info-item__data'>оф. 207-208</p>
      `,
    },
    {
      iconHeight: "24",
      iconWidth: "24",
      iconName: "rent",
      content: `
        <h4 class='info-item__title'>Отдел аренды</h4>
        <a href='tel:74993500730' class='info-item__data'>
          +7 499 350 0730
        </a>
        <a href='mailto:hi@tagree.ru' class='info-item__data'>
          hi@tagree.ru
        </a>
      `,
    },
    {
      iconHeight: "24",
      iconWidth: "24",
      iconName: "rent",
      content: `
        <h4 class='info-item__title'>Отдел мероприятий</h4>
        <a href='tel:74993500730' class='info-item__data'>
          +7 499 350 0730
        </a>
        <a href='mailto:hi@tagree.ru' class='info-item__data'>
          hi@tagree.ru
        </a>
      `,
    },
  ];
</script>

<style lang="less">
  .contacts {
    &__container {
      .container();
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;

      @media @bw1170 {
        flex-direction: column-reverse;
        gap: 100px;
        max-width: 708px;
        margin: 0 auto;
      }

      @media @bw768 {
        gap: 59px;
      }
    }

    &__items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 67px;
      width: 100%;
      max-width: 400px;
      margin-left: 3px;

      @media @bw1660 {
        gap: 52px;
        max-width: 376px;
        margin-left: 0;
      }

      @media @bw1170 {
        flex-direction: row;
        justify-content: flex-start;
        gap: 0;
        max-width: 100%;
        margin-left: 64px;
      }

      @media @bw768 {
        justify-content: center;
        margin-left: 0;
      }

      @media @bw600 {
        flex-direction: column;
        gap: 40px;
      }

      &--vertical {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1334px;
        margin-right: 0;

        @media @bw1660 {
          gap: 30px;
          max-width: 100%;
        }

        @media @bw1170 {
          gap: 30px;
          margin-left: 0;
        }

        @media @bw960 {
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px calc(10% + 29px);
        }

        @media @bw600 {
          flex-direction: row;
        }

        @media @bw450 {
          flex-direction: column;
          flex-wrap: nowrap;
          align-items: center;
          gap: 40px;
        }

        .contacts-item {
          flex-direction: column;
          gap: 41px;
          width: 100%;
          max-width: 401px;
          text-align: center;

          @media @bw960 {
            max-width: 36.458vw;
          }

          @media @bw450 {
            gap: 30px;
          }

          &:first-child,
          &:nth-child(2) {
            @media @bw1170 {
              margin-right: 0;
            }
          }

          &:first-child,
          &:nth-child(2),
          &:last-child {
            @media @bw1170 {
              min-width: auto;
            }
          }

          &:first-child {
            @media @bw450 {
              min-width: 70vw;
            }
          }

          &:nth-child(2) {
            @media @bw450 {
              min-width: 68.438vw;
            }
          }

          &:last-child {
            @media @bw450 {
              min-width: 76.25vw;
            }
          }

          &__content {
            @media @bw600 {
              text-align: center;
            }
          }

          &__title {
            @media @bw960 {
              margin-bottom: 16px;
            }

            @media @bw450 {
              margin-bottom: 10px;
            }
          }

          &__data {
            margin-bottom: 0;

            @media @bw960 {
              font-size: 14px;
            }

            @media @bw450 {
              font-size: 13px;
            }
          }
        }
      }
    }

    &__map {
      margin-left: 30px;

      @media @bw1170 {
        margin-left: 0;
      }
    }
  }
</style>