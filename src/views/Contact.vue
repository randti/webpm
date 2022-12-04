<script setup lang="ts">


</script>

<template>
<div class="size">
  <br><br><br><br><br><br>
Контакты
<teacher/>
============================

<div class="Table">
  <div class="container">
    <table>
      <tbody>
        <tr>
          <td>Направления подготовки</td>
          <td>Математическое моделирование</td>
        </tr>
        <tr>
          <td>Адрес</td>
          <td>Первый корпус, ауд. 1223</td>
        </tr>
        <tr>
          <td>Телефон, e-mail</td>
          <td>8 (831) 436-63-93, pm@nntu.ru</td>
        </tr>
        <tr>
          <td>Почтовый адрес</td>
          <td>603950, Н. Новгород, ул.Минина, д.24, ауд. 1223</td>
        </tr>
        <tr>
          <td>Заведующий кафедрой</td>
          <td>Профессор, доктор физико-математических наук Куркин Андрей Александрович </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



</div>
</template>

<script>
import Teacher from "@/object/teacher.vue";
  
export default {
    components:{
      Teacher
    },

};
</script>


<style scoped lang="scss">
.Table{
  html,

  
  .container {
    
    position: static;
  }
  
  table {
    width: 1100px;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    
  }
  
  th,
  td {
    padding: 15px;
    background-color: rgba(88, 86, 86, 0.274);
    color: auto;
    font-size:22px;
  }
  
  
  
 
  
  tbody {
    tr {
      &:hover {
        background-color: rgba(12, 0, 0, 0.13);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: rgba(255,255,255,0.2);
          z-index: -1;
        }
      }
    }
  }
}
</style>


