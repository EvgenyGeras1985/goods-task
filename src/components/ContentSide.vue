<script setup lang="ts">
import CustomTable from "@/components/TableComponents/CustomTable.vue";
import CustomTableCell from "@/components/TableComponents/CustomTableTHCell.vue";
import CustomTableHead from "@/components/TableComponents/CustomTableHead.vue";

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

const tblList =[
  {id:Math.random(), title:"A", list: 1},
  {id:Math.random(), title:"B", list: 1},
  {id:Math.random(), title:"C", list: 1},
  {id:Math.random(), title:"D", list: 1},
  {id:Math.random(), title:"F", list: 1},
  {id:Math.random(), title:"E", list: 1},
  {id:Math.random(), title:"G", list: 1},
  {id:Math.random(), title:"H", list: 1},
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
          <tr class="drop-zone">
            <th
                class="drop-el"
                v-for="elem in tblList"
                scope="row"
                :key="elem.id"
                draggable="true"
                @dragstart="dragController.startDrag($event, elem, tblList)"
            >
              {{elem.title}}
            </th>
          </tr>
          <tr class="drop-zone">
            <th class="drop-el" scope="row" v-for="el in tblList" :key="el.id">{{el.title}}</th>
          </tr>
          <tr class="drop-zone">
            <th class="drop-el" scope="row" v-for="el in tblList" :key="el.id">{{el.title}}</th>
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

  .drop-zone:hover{
    outline: 1px solid black;
    border-radius: 10px;
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