<template>
  <g
    class="scene-table"
    :class="{ 
      'scene-table--red' : red,
      'scene-table--disabled' : disabled,
      'scene-table--active' : active }"
    @click="toggleReserveItemState('checkboxes', id)"
  >
    <g class="scene-table__group">
      <path v-if="group.path" :d="group.path"/>
      <rect 
        v-else 
        :x="group.rect.x" 
        :y="group.rect.y" 
        :width="group.rect.width" 
        :height="group.rect.height"
      />

      <circle 
        v-for="(circle, circleIndex) in group.circles" 
        :key="circleIndex"
        :cx="circle.cx"
        :cy="circle.cy"
        :r="circle.r"
      />
    </g>

    <path :d="number" class="scene-table__number"/>
    <rect 
      :opacity="box.opacity"
      :x="box.x" 
      :y="box.y" 
      :width="box.width" 
      :height="box.height" 
      fill="transparent"
    />
  </g>
</template>

<script setup>
  const store = useStore();

  const { 
    id, 
    red, 
    disabled,
    group, 
    number, 
    box } = defineProps({
    id: {
      type: Number,
      required: true,
    },
    red: {
      type: Boolean,
      default: false,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: true,
    },
    group: {
      type: Object,
      default: () => {},
      required: true,
    },
    number: {
      type: String,
      default: "",
      required: true,
    },
    box: {
      type: Object,
      default: () => {},
      required: true,
    },
  });

  const active = store.getReserveItemState('checkboxes', id);

  const { toggleReserveItemState } = store;
</script>

<style lang="less">
  .scene-table {
    cursor: pointer;

    .scene-table__group {
      stroke: @black;
    }

    .scene-table__number {
      fill: @black;
    }

    &--red {
      .scene-table__group {
        stroke: @red_BC;
      }

      .scene-table__number {
        fill: @red_BC;
      }
    }

    &--active {
      .scene-table__group {
        fill: @black;
      }

      .scene-table__number {
        fill: @white;
      }

      &.scene-table--red {
        .scene-table__group {
          fill: @red_A5;
          stroke: @red_A5;
        }
      }
    }
      
    &--disabled {
      pointer-events: none;

      .scene-table__group {
        stroke: @gray_BF;
        fill: @gray_BF;
      }
    }
  }

  &__group {
    stroke: @black;
  }

  &__number {
    fill: @black; 
  }
</style>