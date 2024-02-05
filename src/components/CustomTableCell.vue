<script setup lang="ts">
import {ref} from 'vue';
import elemController from "@/elemManipulations/DomElemController";

//переменная для отслеживания клика по таблице col
const isTableClick = ref(false);
const element = ref<HTMLTableColElement>();
const currentWidth = ref(10);
const delta:number = 5;

</script>

<template>
  <th scope="col" ref="element" @mousemove="elemController.getBorder(element)">
    <slot></slot>
  </th>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
th{
  outline: 1px solid black;
}
@include breakpoint(large) {
  th {
    min-width: 100px;
    max-width: 300px;
    height: 44px;
    margin: 14px 14px;
    padding: 14px 14px;
  }
}
</style>