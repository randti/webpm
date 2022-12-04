<script setup lang="ts">

</script>

<template>
<div>
    <div class="border-button">
        <div class="Table">
            <table>
                <thead>
                    <tr>
                        <th>Имя преподавателя</th>
                        <th>Название предмета</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Евгений</td>
                        <td>Физкультура</td>
                        <td>randy@yandex.ru</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>


</div>
</template>

<style scoped lang="scss">
.Table{
    html,
  
    .container {
      position: static;
      margin-left: 20px;
  
    }
    
    table {
      width: 1100px;
      border-collapse: collapse;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
      border-radius: 25px;
      
      
    }
    
    th,
    td {
      padding: 15px;
      background-color: rgba(88, 86, 86, 0.274);
      color: auto;
      font-size:22px;
    }
    
    th {
      text-align: left;
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
