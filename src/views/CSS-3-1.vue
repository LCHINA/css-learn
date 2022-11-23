<template>
  <div class="about">
    <header>
      <h1>Franklin Running Club</h1>
    </header>
    <div class="container wapper">
      <main class="main">
        <h2>Come join us!</h2>
        <p>
          The Frankl in Running club meets at 6:00pm every Thursday
          at the town square. Runs are three to five miles, at your
          own pace 。
        </p>
      </main>
      <aside class="sidebar">
        <div class="widget"></div>
        <div class="widget"></div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {}

.about {
  background-color: #eee;
  font-family: Arial, Helvetica, sans-serif;
  min-height: 100vh;
  padding: .5em;
}

.about header {
  color: #fff;
  background-color: #0072b0;
  border-radius: .5em;
}

.wapper {
  margin-left: -1.5em;
  margin-right: -2.5em;
}

.container {
  width: 100%;
  display: table;
  border-spacing: 1.5em 0;
}

.container main {
  display: table-cell;
}

.main {
  float: left;
  width: 70%;
  background-color: #fff;
  border-radius: .5em;
}

.sidebar {
  display: table-cell;
  float: left;
  width: calc(30% - 1.5em);
  margin-left: 1.5em;
  padding: 1.5em;
  background-color: #fff;
  border-radius: .5em;
}
</style>
