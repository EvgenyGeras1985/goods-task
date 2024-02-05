<script setup lang="ts">
import CustomTable from "@/components/CustomTable.vue";
import CustomTableCell from "@/components/CustomTableCell.vue";
import CustomTableHead from "@/components/CustomTableHead.vue";

const test = [
  {title: "Действие", key: 1},
  {title: "Наименование единицы", key: 2, itemKey: "name"},
  {title: "Цена", key: 3, itemKey: "cost"},
  {title: "Кол-во", key: 4, itemKey: "count"},
  {title: "Наименование товара", key: 5, itemKey: "goodsName"},
  {title: "Итого", key: 6, itemKey: "Total"},
  {title: "test col", key: 7, itemKey: "testColKey"},
  {title: "test col2", key: 8, itemKey: "testColKey2"},
]
</script>

<template>
  <div class="content">
      <p>Проведение ТО и мелкий ремонт</p>
      <custom-table>
          <custom-table-head>
            <tr>
              <custom-table-cell :testData="test" v-for="date in test" :key="date.key">
                {{date.title}}
              </custom-table-cell>
            </tr>
          </custom-table-head>
        <tbody>
          <tr>
            <th scope="row">test</th>
            <th scope="row">test</th>
            <th scope="row">test</th>
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