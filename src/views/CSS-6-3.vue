<template>
  <div class="container-all">
    <div class="container">
      <header>
        <h1 class="page-heading">INK</h1>
      </header>
      <nav>
        <ul class="site-nav">
          <li><a href="/">HOME</a></li>
          <li><a href="/features">features</a></li>
          <li><a href="/pricing">pricing</a></li>
          <li><a href="/support">support</a></li>
          <li class="nav-right"><a href="/about">about</a></li>
        </ul>
      </nav>
      <main class="main tile">
        <h1>Team collaboration done right</h1>
        <p>Thousands of teams from all over the
          world turn to <b>Ink</b> to communicate
          and get things done.</p>
        <h1>Team collaboration done right</h1>
        <p>Thousands of teams from all over the
          world turn to <b>Ink</b> to communicate
          and get things done.</p>
        <h1>Team collaboration done right</h1>
        <p>Thousands of teams from all over the
          world turn to <b>Ink</b> to communicate
          and get things done.</p>
        <h1>Team collaboration done right</h1>
        <p>Thousands of teams from all over the
          world turn to <b>Ink</b> to communicate
          and get things done.</p>
      </main>
      <div class="sidebar-top tile">
        <form class="login-form">
          <h3>Login</h3>
          <p>
            <label for="username">Username</label>
            <input id="username" type="text" name="username" />
          </p>
          <p><label for="password">password</label>
            <input id="password" type="password" name="password" />
          </p>
          <button type="submit">Login</button>
        </form>
      </div>
      <div class="sidebar-bottom tile centered">
        <small>Starting at</small>
        <div class="cost">
          <span class="cost-currency">$</span>
          <span class="cost-dollers">20</span>
          <span class="cost-cents">.00</span>
        </div>
        <a href="/pricing" class="cta-button">Sign up</a>
      </div>
    </div>
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
  background-color: #709b90;
  font-family: Arial, Helvetica, sans-serif;
}

body *+* {
  margin-top: 1.5em;
}

.container-all {
  width: 100%;
  height: 100VH;
  background-color: #709b90;
}

.container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  /** 从1号网格跨越到3号 */
  grid-template-rows: repeat(4, auto);
  grid-gap: 1.2em;
  max-width: 1080px;
  margin: 0 auto;
}

header,
nav {
  /** 从1号垂直网格跨越到3号垂直网格线 */
  grid-column: 1/3;
  /** 刚好占据一条水平网格轨道 */
  grid-row: span 1;
}

nav{
  margin-top: 0;
}

.main {
  grid-column: 1/2;
  grid-row: 3/5;
}

.sidebar-top{
  grid-column: 2/3;
  grid-row: 3/4;
}

.sidebar-bottom{
  grid-column: 2/3;
  grid-row: 4/5;
}


.tile {
  margin-top: 0;
  background-color: white;
  padding: 1.5em;
}

.tile>:first-child{
  margin-top: 0;
}
.tile *+*{
  margin-top: 1.5em;
}

.page-heading{
  margin: 0;
}

.site-nav{
  background-color: #5f4b44;
  display: flex;
  list-style-type: none;
  border-radius: .2em;
  padding: .8em;
  margin: 0;
}

.site-nav>li{
  margin-top: 0em;
}

.site-nav>li>a {
  background-color: #cc6b5a;
  color: white;
  border-radius: .2em;
  padding: .5em 1em;
  text-decoration: none;
}

.site-nav li+li {
  margin-left: 1em;
}

.site-nav>.nav-right {
  margin-left: auto;
}


.login-form>h3 {
  text-align: right;
  font-weight: bold;
  font-size: .9em;
  margin: 0em;
  text-transform: uppercase;
}

.login-form>p {
  display: flex;
  flex-direction: column;
}

.login-form>p>input {
  margin-top: 0em;
}

.login-form input:not([type=checkbox]):not([type=redio]) {
  margin-top: 0em;
  display: block;
  width: 100%;
  margin-top: 0;
}


.login-form>button {
  background-color: white;
  margin-top: 1em;
  border: 1px solid #cc6b5e;
  padding: .5em 1em;
  cursor: pointer;
}


.centered {
  text-align: center;
}

.cost {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: .7;
}

.cost>span {
  margin-top: 0;
}

.cost-currency {
  font-size: 2em;
}

.cost-dollers {
  font-size: 4em;
}

.cost-cents {
  font-size: 1.5em;
  align-self: flex-start;
}


.cta-button {
  display: block;
  background-color: #cc6b5a;
  text-decoration: none;
  text-align: center;
  padding: .5em;
  color: #fff;
}

</style>
