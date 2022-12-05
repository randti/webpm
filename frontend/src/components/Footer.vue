<script setup lang="ts">

</script>

<template>
    <div class="footer">
        <div class="fon-footer">
            <div class="home">
                <div class="text-footer">
                    <div class="ngtu">
                        <aside>
                            <img src="/src/assets/location.png" width="25" height="25" alt="" /> г. Н. Новгород, ул. Минина, 24 <br>
                            <img src="/src/assets/phone.png" width="25" height="25" alt="" /> +7 (831) 436 63 07 <br>
                            <img src="/src/assets/email.png" width="25" height="25" alt="" /> nntu@nntu.ru <br>
                            <ul>
                                <li><a href="https://vk.com/nntualekseeva"><img src="/src/assets/vk.png" width="25" height="25" alt="" /></a></li>
                                <li><a href="https://www.youtube.com/channel/UCVy8eOtAs3AXe_6SDiWWUCw/featured"><img src="/src/assets/youtube.png" width="25" height="25" alt="" /></a></li>
                                <li><a href="https://t.me/nntualekseeva"><img src="/src/assets/telegram.png" width="25" height="25" alt="" /></a></li>
                                <li><a href="https://ok.ru/group/60896021446784"><img src="/src/assets/odnoklass.png" width="25" height="25" alt="" /></a></li>
                            </ul>
                        </aside>
                        <a href="https://www.nntu.ru/"><img src="/src/assets/ngtu2.png" width="450" height="230" alt="" /></a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
  position: static;

  aside {
    width: 45%;
    padding-left: .5rem;
    margin-left: .5rem;
    float: right;
    margin-top: 20px;

    }

    ul li {
    display: inline;
    margin-right: 15px;
    padding: 2px;
    }
}
</style>
