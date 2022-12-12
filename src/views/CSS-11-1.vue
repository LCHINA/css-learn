<template>
  <div class="container-all">
    <div class="container">
      <div class="fade"></div>
      <div class="fade1"></div>
      <div class="fade2"></div>
      <div class="fade3"></div>
      <div class="fade4"></div>
      <div class="fade5"></div>
      <div class="fade6"></div>
      <div class="fade7"></div>
      <div class="fade8"></div>
      <div class="fade9"></div>
      <div class="fade10"></div>
    </div>
  </div>
</template>

<script setup>
</script>

  
<style scoped>
@media (min-width: 1024px) {
}

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

body * + * {
  margin-top: 1.5em;
}

.container-all {
  width: 100%;
  height: 300vh;
  background-color: #709b90;
}

.container {
  grid-template-columns: 2fr 1fr;
  /** 从1号网格跨越到3号 */
  grid-template-rows: repeat(4, auto);
  grid-gap: 1.2em;
  max-width: 1080px;
  margin: 0 auto;
}

.fade {
  height: 200px;
  width: 400px;
  background-image: linear-gradient(to right, white, blue);
}
.fade1 {
  height: 200px;
  width: 400px;
  background-image: linear-gradient(45deg, white, blue);
}

.fade2 {
  height: 200px;
  width: 400px;
  background-image: linear-gradient(90deg, red, white, blue);
}

.fade3 {
  height: 200px;
  width: 400px;
  background-image: linear-gradient(90deg, red 10%, white 60%, blue);
}

.fade4 {
  height: 200px;
  width: 400px;
  background-image: linear-gradient(90deg, red 40%,white 40%, white 60%, blue 60%);
}

.fade5 {
  height: 20px;
  width: 400px;
  background-image: repeating-linear-gradient(45deg, red ,red 10px,  white 10px,white 20px,red 20px);
}
.fade6 {
  height: 200px;
  width: 400px;
  background-image: radial-gradient(white,blue)
}
.fade7 {
  height: 200px;
  width: 400px;
  background-image: radial-gradient(circle, white,blue)
}
.fade8 {
  height: 200px;
  width: 400px;
  background-image: radial-gradient(3em at 25% 25%, white,blue)
}
.fade9 {
  height: 200px;
  width: 400px;
  background-image: radial-gradient(circle, red, white 75%,blue)
}

.fade10 {
  height: 200px;
  width: 400px;
  background-image: repeating-radial-gradient(circle, red,red 1em, white 1em,white 2em)
}

</style>
