<template>
  <div class="home-quote">
    <span class="home-quote__first-part">Просто делайте,</span>
    <span class="home-quote__second-part">что нравится,</span>
    <span class="home-quote__third-part">а мы вам поможем</span>
  </div>
</template>

<script setup></script>

<style lang="less">
  .home-quote {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 112.55vw;
    margin: 0 -9.84vw 0 -2.71vw;
    font-family: @font3;
    font-weight: 700;
    font-size: 6.6667vw;
    line-height: 1.2;
    overflow: hidden;

    @media @bw1660 {
      width: 113.36vw;
      height: 216px;
      margin: 0 -10.52vw 0 -3.36vw;
    }

    @media @bw960 {
      justify-content: flex-start;
      width: 116.54vw;
      height: auto;
      margin: 0 -13.15vw 0 -0.52vw;
      font-size: 10.42vw;
    }

    @media @bw768 {
      width: 139.38vw;
      margin: 0 -18.75vw 0 -17.81vw;
      font-size: 12.5vw;
    }

    &__first-part {
      margin-right: 2.71vw;

      @media @bw1660 {
        margin-right: 2.84vw;
      }

      @media @bw960 {
        margin: 0 11vw 0 -3vw;
      }

      @media @bw768 {
        margin: 0 0 0 13.75vw;
      }
    }

    &__second-part {
      @media @bw960 {
        margin: 1.69vw 0 2.6vw 33.59vw;
      }

      @media @bw768 {
        margin: 2.81vw -21.56vw 2.81vw 43.12vw;
      }
    }
  }
</style>