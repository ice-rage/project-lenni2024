<template>
  <g
    class="scene-table"
    :class="{ 
      'scene-table--red' : props.red,
      'scene-table--disabled' : props.disabled,
      'scene-table--active' : isActive }"
    @click="toggleTableState"
  >
    <g class="scene-table__group">
      <path v-if="props.group.path" :d="props.group.path"/>
      <rect 
        v-else 
        :x="props.group.rect.x" 
        :y="props.group.rect.y" 
        :width="props.group.rect.width" 
        :height="props.group.rect.height"
      />

      <circle 
        v-for="(circle, circleIndex) in props.group.circles" 
        :key="circleIndex"
        :cx="circle.cx"
        :cy="circle.cy"
        :r="circle.r"
      />
    </g>

    <path :d="props.number" class="scene-table__number"/>
    <rect 
      :opacity="props.box.opacity"
      :x="props.box.x" 
      :y="props.box.y" 
      :width="props.box.width" 
      :height="props.box.height" 
      fill="transparent"
    />
  </g>
</template>

<script setup>
  const props = defineProps({
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

  const isActive = defineModel();

  const toggleTableState = () => isActive.value = 
    !isActive.value;
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