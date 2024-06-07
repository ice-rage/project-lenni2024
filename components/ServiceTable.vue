<template>
  <table class="service-table" data-currency="₽">
    <thead class="service-table__head">
      <tr class="service-table__head-tr">
        <th class="service-table__th"></th>
        <th class="service-table__th">Тариф «Light»</th>
        <th class="service-table__th">Тариф «Promo»</th>
        <th class="service-table__th">Тариф «All stars»</th>
      </tr>
    </thead>
    <tbody class="service-table__body">
      <tr class="service-table__tr">
        <th class="service-table__body-th">Стоимость за час</th>
        <td class="service-table__td">1 000 ₽</td>
        <td class="service-table__td">3 000 ₽</td>
        <td class="service-table__td">от 6 000 ₽</td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Ведущий мероприятия</th>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Фотосъемка</th>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Видеосъемка</th>
        <td class="service-table__td"></td>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Организация питания</th>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Декор</th>
        <td class="service-table__td"></td>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Звуковое сопровождение</th>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Дополнительное освещение</th>
        <td class="service-table__td"></td>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
      <tr class="service-table__tr">
        <th class="service-table__body-th">Клининг</th>
        <td class="service-table__td"></td>
        <td class="service-table__td"></td>
        <td class="service-table__td">
          <span class="ok"></span>
        </td>
      </tr>
    </tbody>
    <tfoot class="service-table__footer">
      <tr class="service-table__footer-tr">
        <th class="service-table__footer-th"></th>
        <th class="service-table__footer-th">Тариф «Light»</th>
        <th class="service-table__footer-th">Тариф «Promo»</th>
        <th class="service-table__footer-th">Тариф «All Stars»</th>
      </tr>
    </tfoot>
  </table>
</template>

<script setup></script>

<style lang="less">
  .service-table {
    width: 100%;
    border-collapse: collapse;
    color: @black;
    text-align: center;

    @media @bw450 {
      width: 114.286%;
    }

    &__tr {
      &:nth-child(odd) {
        background-color: fade(@black, 3%);
      }

      &:nth-child(even) {
        @media @bw450 {
          height: 52px;
        }
      }
    }

    &__tr &__td {
      &:first-child {
        @media @bw450 {
          padding: 0 26px 0 45px;
        }
      }
    }

    &__tr:first-child > &__td {
      padding: 16px 10px 12px;

      @media @bw1020 {
        padding: 5px;
      }

      &:last-child {
        padding: 10px 136px 10px 125px;

        @media @bw1660 {
          padding: 10px 83px 10px 120px;
        }

        @media @bw1020 {
          padding: 5px 50px 5px 59px;
        }

        @media @bw768 {
          padding: 5px;
        }
      }
    }

    &__tr:nth-child(2) > &__td {
      &:first-child {
        @media @bw450 {
          padding: 0 12px 0 30px;
        }
      }

      &:last-child {
        @media @bw450 {
          padding: 0 34px 0 18px;
        }
      }
    }

    &__tr:nth-child(n + 2) > &__td {
      &:last-child {
        padding: 10px 161px 10px 151px;

        @media @bw1660 {
          padding: 10px 108px 10px 146px;
        }

        @media @bw1020 {
          padding: 5px 10.593% 5px 12%;
        }
      }
    }

    &__tr:nth-child(n + 4) > &__td {
      &:last-child {
        @media @bw450 {
          padding: 0 60px 0 43px;
        }
      }
    }

    &__tr:nth-child(even) > &__td,
    &__th,
    &__footer-th {
      &:nth-child(2) {
        @media @bw450 {
          background-color: fade(@black, 3%);
        }
      }
    }

    &__th,
    &__body-th {
      font-size: 18px;

      @media @bw1340 {
        font-size: 16px;
      }

      @media @bw1020 {
        font-size: 14px;
      }
    }

    &__th,
    &__footer-th {
      box-sizing: border-box;
      border-right: 1px solid #bfbfbf;
      text-transform: uppercase;

      &:first-child {
        padding-left: 0;

        @media @bw450 {
          padding: 0 3.438% 0 9.063%;
        }
      }

      &:last-child {
        border-right: none;

        @media @bw450 {
          padding: 0 9.063% 0 3.438%;
        }
      }
    }

    &__th {
      height: 84px;
      font-weight: 600;

      @media @bw768 {
        padding: 10px;
      }

      @media @bw450 {
        max-width: 86px;
      }

      &:first-child {
        width: 400px;

        @media @bw1340 {
          width: 31.746%;
        }

        @media @bw1020 {
          width: 24.479%;
        }

        @media @bw450 {
          width: 30.313%;
        }
      }

      &:nth-child(2) {
        width: 21.664%;

        @media @bw1660 {
          width: 22.381%;
        }

        @media @bw450 {
          width: 28.75%;
        }
      }

      &:nth-child(3) {
        width: 22.789%;

        @media @bw1660 {
          width: 23.571%;
        }

        @media @bw1020 {
          width: 24.718%;
        }
      }

      &:last-child {
        width: 25.562%;
        padding: 0 86px 0 75px;

        @media @bw1660 {
          width: 22.258%;
          padding: 0 33px 0 70px;
        }

        @media @bw1020 {
          width: 26.271%;
          padding: 0 20px 0 28px;
        }

        @media @bw450 {
          width: 40.313%;
        }
      }
    }

    &__body-th {
      box-sizing: border-box;
      height: 51px;
      padding: 13px 0 12px 0;
      border-top: 1px solid #bfbfbf;
      border-bottom: 1px solid #bfbfbf;
      font-weight: 400;
      text-align: left;

      @media @bw1020 {
        padding: 6px 0;
        padding-right: 70px;
      }

      @media @bw768 {
        padding-right: 5.5vw;
      }

      @media @bw450 {
        height: 50px;
        padding: 0;
        text-align: center;
      }
    }

    &__td {
      box-sizing: border-box;
      height: 51px;
      border: 1px solid #bfbfbf;
      font-weight: 600;
      font-size: 16px;

      @media @bw1020 {
        padding: 5px;
      }

      @media @bw450 {
        border-left: none;
      }

      &:last-child {
        border-right: none;
      }
    }

    &__footer-th {
      height: 60px;
      font-size: 0;

      @media @bw450 {
        height: 84px;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
</style>