<template>
  <div class="service-table-wrapper">
    <table
      class="service-table" 
      data-currency="₽"
    >
      <thead class="service-table__head">
        <tr class="service-table__head-tr">
          <th 
            v-for="cell in headerCells" 
            class="service-table__th"
          >
            {{ cell.content }}
          </th>
        </tr>
      </thead>
      <tbody  
        v-for="column in rows" 
        class="service-table__body"
      >
        <template v-if="isBreakpointReached">
          <tr class="service-table__tr">
            <th class="service-table__body-th" colspan="3">
              {{ column.header }}
            </th>
          </tr>
          <tr class="service-table__tr">
            <td v-for="cell in column.cells" class="service-table__td">
              {{ cell.content }}
            <span v-if="cell.checked" class="ok"></span>
            </td>
          </tr>
        </template>

        <template v-else>
          <tr class="service-table__tr">
            <th class="service-table__body-th">{{ column.header }}</th>
            <td v-for="cell in column.cells" class="service-table__td">
              {{ cell.content }}
              <span v-if="cell.checked" class="ok"></span>
            </td>
          </tr>
        </template>
      </tbody>
      <tfoot class="service-table__footer">
        <tr class="service-table__footer-tr">
          <th 
            v-for="cell in footerCells" 
            class="service-table__footer-th"
          >
            {{ cell.content }}
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
  import tableData from "~/data/serviceTable.json";

  const headerCells = computed(() => isBreakpointReached.value 
    ? tableData.header.cells.slice(1, 4)
    : tableData.header.cells);
  
  const rows = tableData.body.rows;

  const footerCells = computed(() => isBreakpointReached.value
    ? tableData.footer.cells.slice(1, 4)
    : tableData.footer.cells);

  const viewportWidth = ref();

  const isBreakpointReached = computed(() => 
    viewportWidth.value < 450);

  onMounted(() => {
    window.addEventListener("resize", onWindowResize);
    onWindowResize();
  });

  onUnmounted(() => window.removeEventListener("resize", onWindowResize));

  const onWindowResize = () => viewportWidth.value = window.innerWidth;
</script>

<style lang="less">
  .service-table {
    width: 100%;
    border-collapse: collapse;
    color: @black;
    text-align: center;

    &__tr {
      @media @bw450 {
        &:nth-child(odd) {
          background-color: fade(@black, 3%);
        }
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
      padding: 12px 10px 12px;

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
      height: 83px;
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

    &__body {
      @media @w450 {
        &:nth-child(even) {
          background-color: fade(@black, 3%);
        }
      }
    }
    
    &__body-th {
      box-sizing: border-box;
      height: 50px;
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
      height: 61px;
      font-size: 0;

      @media @bw450 {
        height: 84px;
        font-weight: 300;
        font-size: 16px;
      }
    }
  }
</style>