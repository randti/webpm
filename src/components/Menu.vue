<script setup lang="ts">


</script>

<template>
<div class="size">

<header class="header" role="banner">
  
	<div class="container">
		<nav><ul>
        <li>
          <router-link to="/">
            <Transition name="fade">
              <a>Главная</a>
            </Transition>

          </router-link>
        </li>

        <li>
          <router-link to="/about">
            <Transition name="fade">
              <a>Курсы</a>
            </Transition>

          </router-link>
        </li>

        <li>
          <router-link to="/teacher">
            <Transition name="fade">
              <a>Преподаватели</a>
            </Transition>

          </router-link>
        </li>

        <li>
          <router-link to="/contact">
            <Transition name="fade">
              <a>Контакты</a>
            </Transition>

          </router-link>
        </li>

      </ul></nav>
	</div>
</header>

</div>



</template>

<script>
</script>


<style scoped lang="scss">



$initial-header-height : 7.5em;
$scrolling-header-height : 5.5em;

$menu-active-background :  #c4c4c4;
$menu-active-color : rgb(0, 0, 0);

* {
  box-sizing:border-box;
  
}


body{
  background:whitesmoke;
  font-family: 'Open Sans', sans-serif;
  color: #787979;
  padding: 8em 0 5em 0;
}

.container {
  width: 100%;
  font-size:25px;
}

.header .container {
  height: 100%;
  overflow: hidden;
  margin-bottom: 100px;

}

.header {
  color:#030000;
  width: 100%;
  height: 5em;
  text-align: center;
  background-color: #0099FF;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  &.scrolling{
    height: $scrolling-header-height;  
  }
  &.hide{
    top:-$scrolling-header-height;   
  }
}

.header nav {
  height: 100%;
  display: table;
  margin-left: auto;
  margin-right: auto;
}

nav ul {
  list-style: none;
  height: 100%;
  vertical-align: middle;
  display: table-cell;

  
  li {
    float: left;
    display: inline-block;
    overflow:hidden;
    position:relative;
    margin-left:.625em;
    border-radius: 25px;
    color:white;
    
    a {

      height: $initial-header-height / 3;
      line-height: $initial-header-height / 3;
      display: block;
      padding: 0 0.625em;
      color:inherit;
      text-decoration: none;
      z-index:1;
    }
    &:before {
        content:'';
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index:-1;

      }
    &:hover:before{
      background-color: lighten($menu-active-background, 30);

    }
    &.active:before{
      background-color: $menu-active-background;

    }
    
    &.active a {
      font-weight:bold;
    }
    
    &:hover a,
    &.active a {

      color: $menu-active-color;
    }
  }
}
</style>