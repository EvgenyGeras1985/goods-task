<script setup lang="ts">
import CustomTable from "@/components/CustomTable.vue";
import CustomTableCell from "@/components/CustomTableCell.vue";
import CustomTableHead from "@/components/CustomTableHead.vue";
</script>

<template>
  <div class="content">
      <p>Проведение ТО и мелкий ремонт</p>
    <custom-table>
        <custom-table-head>
          <tr>
            <CustomTableCell>test</CustomTableCell>
            <CustomTableCell>test</CustomTableCell>
            <CustomTableCell>test</CustomTableCell>
            <CustomTableCell>test</CustomTableCell>
            <CustomTableCell>test</CustomTableCell>
          </tr>
        </custom-table-head>
      <tbody>
        <tr>
          <th scope="row">test</th>
          <th scope="row">test</th>
          <th scope="row">test</th>
          <th scope="row">test</th>
          <th scope="row">test</th>
        </tr>
        <tr>
          <th scope="row">test</th>
          <th scope="row">test</th>
          <th scope="row">test</th>
          <th scope="row">test</th>
          <th scope="row">test</th>
        </tr>
      </tbody>
    </custom-table>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/styles";
.content {
  width: 375px;
  height: 2483px;
  padding: 16px 10px 706px;
  background-color: $color-primary-gray;

  & p{
    width: 295px;
    height: 62px;
    margin: 0 20px 25px 50px;
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

    & p{
      width: 433px;
      height: 31px;
      margin: 25px 822px 25px 25px;
      font-family: MyriadPro;
    }
  }
}
</style>