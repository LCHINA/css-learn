<template>
  <div class="container-all">
    <div class="container">
      <div class="blend"></div>
      <div class="blend1"></div>
      <div class="blend2"></div>
      <div class="blend3"><h1>Ursa Major</h1></div>
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

.blend{
  height: 400px;
  background-image: url('../assets/bear.jpg'), url('../assets/bear.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position:-30vw,30vw;
  background-blend-mode: multiply;
}

.blend1{
  height: 400px;
  background-image: url('../assets/bear.jpg');
  background-size: cover;
  background-color: #148;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: luminosity;
}

.blend2{
  height: 400px;
  background-image: url('../assets/scratches.png'), url('../assets/bear.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: soft-light;
}

.blend3{
  height: 400px;
  background-image: url('../assets/bear.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.blend3>h1{
  background-color: red;
  color: #808080;
  text-align: center;
  font-size: 3rem;
  mix-blend-mode: hard-light;
  border: .1em solid #ccc;
  border-width: 0.1em 0;
  margin: 0;
}

</style>
