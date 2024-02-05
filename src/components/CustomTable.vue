<script setup lang="ts">

</script>

<template>
  <table>
    <slot></slot>
  </table>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
table{
  min-width: 355px;
  min-height: 446px;
  margin: 25px 0 5px;
  padding: 15px 15px 25px;
  border-radius: 10px;
  border-collapse: collapse;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px var(--pale-grey);
  background: $color-primary-white;
}
@include breakpoint(large) {
  table{
    max-width: 1449px;
    min-height: 453px;
    margin: 25px 0 175px 25px;
    padding: 9px 1px 25px;
  }
}
</style>