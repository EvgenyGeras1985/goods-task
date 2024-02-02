<script setup>
import { reactive, ref } from 'vue'
import { useElementBounding } from '@vueuse/core'

const el = ref(null)
const rect = reactive(useElementBounding(el))
const { right, width }
    = useElementBounding(el)

</script>

<template>
  <th ref="el">
      <slot />
    <div class="resizer" ref="el" style="min-height: 300px">

    </div>
  </th>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
th{
  outline: 1px solid black;
}
@include breakpoint(large) {
  th {
    min-width: 10px;
    height: 44px;
  }
}
</style>