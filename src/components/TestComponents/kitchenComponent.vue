<script setup lang="ts">
import {computed} from "vue-demi";
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
  {id:Math.random(), title:"A"},
  {id:Math.random(), title:"B"},
  {id:Math.random(), title:"C"},
  {id:Math.random(), title:"D"},
  {id:Math.random(), title:"F"},
  {id:Math.random(), title:"E"},
  {id:Math.random(), title:"G"},
  {id:Math.random(), title:"H"},
]

const thList = [
  {id:1, title: "first", list:1},
  {id:2, title: "second", list:2},
]


const listOne = computed(() => thList.filter((item) => item.list === 1));
const listTwo = computed(() => thList.filter((item) => item.list === 2));

function startDrag(evt, item) {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('itemID', item.id)
}

function onDrop(evt, list) {
  const itemID = evt.dataTransfer.getData('itemID')
  const item = this.items.find((item) => item.id == itemID)
  item.list = list
}
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
      <tbody
          class="drop-zone"
          @drop="onDrop($event, 1)"
          @dragover.prevent
          @dragenter.prevent
      >
        <tr
            class="drop-el"
            :key="thList.title"
            draggable="true"
            @dragstart="startDrag($event, item)"
        >
          <th style="background: #c0c0c0"
              v-for="el in tblList"
              class="drop-el"
              :key="el.title"
          >
            {{el.title}}
          </th>
        </tr>
        <tr
            class="drop-el"
            :key="thList.title"
            draggable="true"
            @dragstart="startDrag($event, item)"
        >
          <th
              v-for="el in tblList"
              :key="el.title"
          >
            {{el.title}}
          </th>
        </tr>
      </tbody>
      <tbody    class="drop-zone"
                @drop="onDrop($event, 1)"
                @dragover.prevent
                @dragenter.prevent>

      </tbody>
    </custom-table>
  </div>
</template>

<style scoped lang="scss">
@import "styles";
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