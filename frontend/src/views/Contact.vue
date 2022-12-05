<script setup lang="ts">

</script>

<template>
<div class="wrapper ">

    <div class="home">
        <p style=" margin-top:80px; font-size:35px; text-align: center; font-family: cursive; "><strong>Контакты и реквизиты</strong></p>

        <div class="text">
            <div class="fon">
                <strong>Полное наименование:</strong> федеральное государственное бюджетное образовательное
                учреждение высшего образования
                «Нижегородский государственный технический
                университет им. Р.Е. Алексеева»<br>
                <strong>Сокращённые наименования:</strong> НГТУ, ФГБОУ ВО «Нижегородский государственный
                технический университет им. Р.Е. Алексеева»
            </div>
        </div>

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

        <p style="margin-bottom:100px"></p>
        <div class="fon">
            <div class="text">
                <aside>
                    <strong>
                        <p style="padding-bottom:15px">Пресс-служба:</p>
                    </strong>
                    <strong>Пресс-секретарь:</strong> Бояринова Мария Алексеевна <br>
                    <strong>Телефон:</strong> +7(952)454-15-32 <br>
                    <strong>E-mail: </strong>press@nntu.ru

                </aside>
                <strong>
                    <p style="padding-bottom:15px">Приемная комиссия:</p>
                </strong>
                <strong>Телефон:</strong> +7(831) 436-73-43 <br>
                <strong>E-mail:</strong> priem@nntu.ru <br>
                <strong>
                    <p style="font-style: italic; text-decoration: underline;"><a href="https://vk.com/irit_official">Группа ВКонтакте</a></p>
                </strong>
            </div>
        </div>

        <p style="font-size: 30px; font-weight: 700; text-align: center; font-family: cursive;">Учебные корпуса</p>
        <div class="fon">
            <div class="text">
                <ul>
                    <li>Учебный корпус № 1: 603950, г. Нижний Новгород, ул. Минина, д. 24</li>
                    <li>Учебный корпус № 2: 603950, г. Нижний Новгород, ул. Минина, д. 28Б</li>
                    <li>Учебный корпус № 3: 603950, г. Нижний Новгород, ул. Минина, д. 28А</li>
                    <li>Учебный корпус № 4: 603950, г. Нижний Новгород, ул. Минина, д. 28В</li>
                    <li>Учебный корпус № 5: 603950, г. Нижний Новгород, ул. Минина, д. 28Л</li>
                    <li>Учебный корпус № 6: 603163, г. Нижний Новгород, Казанское шоссе, д. 12</li>
                </ul>

            </div>
        </div>

    </div>



</div>
</template>

<script>

</script>

<style lang="scss">
aside {
    width: 60%;
    padding-left: .5rem;
    margin-left: .5rem;
    float: right;

}

.Table {
    html,

    .container {

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
        font-size: 22px;
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
                    background-color: rgba(255, 255, 255, 0.2);
                    z-index: -1;
                }
            }
        }
    }
}


.fon-footer {
    background-color: rgba(0, 6, 88, 0.856);
    color: white;
}

.text-footer {
    text-align: justify;
    line-height: 1.5;
    font-family: 'Gotham Pro';
    font-size: 19px;

}



.ngtu{
  padding: 30px;

  aside {
    width: 45%;
    padding-left: .5rem;
    margin-left: .5rem;
    float: right;

    }

    ul li {
    display: inline;
    margin-right: 15px;
    padding: 2px;
    }
}
</style>
