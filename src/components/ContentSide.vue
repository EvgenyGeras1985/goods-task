<script setup lang="ts">

</script>

<template>
  <div class="content">
      <p>Проведение ТО и мелкий ремонт</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
.content {
  width: 375px;
  height: 2483px;
  padding: 16px 10px 706px;

  & p{
    width: 295px;
    height: 62px;
    margin: 0 20px 25px 25px;
    font-family: MyriadPro;
    font-size: 30px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000;
  }

}
@include breakpoint(large) {
  .content {
    width: 1728px;
    height: 850px;
    padding: 0 25px 0 0;
    background-color: $color-primary-gray;

    & p{
      width: 433px;
      height: 31px;
    }
  }
}
</style>