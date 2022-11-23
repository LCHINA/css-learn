<template>
  <div class="container">
    <header>Franklin Running Club</header>
    <main class="main clearfix">
      <h2>Running tips</h2>
      <div class="row">
        <div class="column-6">
          <div class="media">
            <img class="media-image" src="../assets/runner.png" width="80" />
            <div class="media-body">
              <h4>Strength</h4>
              <p>
                Strength training is an important part of
                injury prevention. Focus on your core&mdash;
                especially your abs and glutes.
              </p>
            </div>
          </div>
        </div>
        <div class="column-6">
          <div class="media">
            <img class="media-image" src="../assets/shoes.png" width="80" />
            <div class="media-body">
              <h4>Cadence</h4>
              <p>
                Check your stride turnover. The most efficient
                runners take about 180 steps per minute.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column-6">
          <div class="media">
            <img class="media-image" src="../assets/runner.png" width="80" />
            <div class="media-body">
              <h4>Strength</h4>
              <p>
                Strength training is an important part of
                injury prevention. Focus on your core&mdash;
                especially your abs and glutes.
              </p>
            </div>
          </div>
        </div>
        <div class="column-6">
          <div class="media">
            <img class="media-image" src="../assets/shoes.png" width="80" />
            <div class="media-body">
              <h4>Cadence</h4>
              <p>
                Check your stride turnover. The most efficient
                runners take about 180 steps per minute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
  
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
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
}

body *+* {
  margin-top: 1.5em;
}

.row {
  display: flex;
  margin-left: -.75em;
  margin-right: -.75em;
}

/* 清理浮动 */
.row::after {
  content: " ";
  display: block;
  clear: both;
}

/**匹配所有类包含column- 的元素 */
[class*="column-"] {
  float: left;
  padding: 0 0.75em;
  margin-top: 0;
}

.column-1 {
  width: 8.3333%;
}

.column-2 {
  width: 16.6667%;
}

.column-3 {
  width: 25%;
}

.column-4 {
  width: 33.33333%;
}

.column-5 {
  width: 41.6667%;
}

.column-6 {
  width: 50%;
}

.column-7 {
  width: 58.3333%;
}

.column-8 {
  width: 66.6667%;
}

.column-9 {
  width: 75%;
}

.column-10 {
  width: 83.33333%;
}

.column-11 {
  width: 91.6667%;
}

.column-12 {
  width: 100%;
}

header {
  padding: 1em 1.5em;
  color: #fff;
  background-color: #0072b0;
  border-radius: .5em;
  margin-bottom: 1.5em;
}

main {
  padding: .2em;
  border-radius: .5em;
  background-color: #fff;
}

.container {
  margin: 0 auto;
  padding: 1em;
  background-color: #eee;
}


.media {
  height: 100%;
  padding: 1.5em;
  background-color: #eee;
  border-radius: .5em;
}

.media-image {
  float: left;
  margin-right: 1.5em;
}

.media-body {
  overflow: auto;
  margin-top: 0;
}

.media-body h4 {
  margin-top: 0;
}

.clearfix::before,
.clearfix::after {
  display: table;
  content: " ";
}

.clearfix::after {
  clear: both;
}
</style>
