<template>
  <div class="container-all">
    <div class="container">
      <button class="btn btn1">Sign up now</button>
      <button class="btn btn2">Sign up now</button>
      <button class="btn btn3">Sign up now</button>
    </div>
  </div>
</template>

<script setup>
</script>

  
<style scoped>
@media (min-width: 1024px) {}

:root {
  box-sizing: border-box;
}

*,
::before,
::after {
  box-sizing: inherit;
}

body {
  background-color: #709b90;
  font-family: Arial, Helvetica, sans-serif;
}

body *+* {
  margin-top: 1.5em;
}

.container-all {
  width: 100%;
  height: 300vh;
  background-color: #709b90;
}

.container {
  display: flex;
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px;
  flex-direction: column;
}

.btn {
  font-size: 1rem;
  height: 2em;
  width: 8em;
  background-color: blue;
  border: 0px;
  border-radius: .4em;
  color: white;
}

.btn1 {
  box-shadow: .1em .1em .5em  blue;
}

.btn1:active {
  box-shadow: inset 0 0 0.5em rgb(4, 0, 255),
  inset 0 0.5em 1em rgba(0, 0, 0, 0.4);
}

.btn2{
  border: 0;
  background-color: rgb(66, 66, 248);
  box-shadow: 0 .2em .2em rgba(0, 0, 0, 0.15);
}
.btn2:hover{
  background-color: rgb(55, 55, 253);
}
.btn2:active{
  background-color: blue;
}

.btn3{
  text-shadow: 2px 1px blue;
  background-color: rgb(66, 66, 248);
  box-shadow: 0 .3em  blue;
}

.btn3:active{
  background-color: rgb(66, 66, 248);
  box-shadow: 0 .2em  blue;
  transform: translateY(.1em);
}
</style>
