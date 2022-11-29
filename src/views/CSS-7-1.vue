<template>
  <div class="container-all">
    <div class="container">
      <header class="top-banner">
        <div class="top-banner-inner">
          <p>
            Find out what's going on at Wombat Coffee each month. Sign up for
            our newsletter:
            <button id="open" @click="open">Sign up</button>
          </p>
        </div>
      </header>
      <div class="modal" id="modal">
        <div class="modal-backdrop"></div>
        <div class="modal-body">
          <button class="modal-close" id="close" @click="close">close</button>
          <h2>Wombat Newsletter</h2>
          <p>Sign up for our monthly newsletter. No spam. We Promise!</p>
          <form>
            <p>
              <label for="email">Email address:</label>
              <input type="text" name="email" />
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </div>
      <div class="container-inner">
        <main class="col-main">
          <nav>
            <div class="dropdown">
              <div class="dropdown-label">Main Menu</div>
              <div class="dropdown-menu">
                <ul class="submenu">
                  <li><a href="/">Home</a></li>
                  <li><a href="/3-1">3-1</a></li>
                  <li><a href="/4-18">4-18</a></li>
                  <li><a href="/5-2">5-2</a></li>
                  <li><a href="/6-3">6-3</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <h1>Wombat Coffee Roasters</h1>
        </main>
        <aside class="col-aside">
          <div class="affix">
            <ul class="submenu">
              <li><a href="/">Home</a></li>
              <li><a href="/3-1">3-1</a></li>
              <li><a href="/4-18">4-18</a></li>
              <li><a href="/5-2">5-2</a></li>
              <li><a href="/6-3">6-3</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

const close = () => {
  console.log("close");
  document.getElementById("modal").style.display = "none";
};
const open = () => {
  console.log("open");
  document.getElementById("modal").style.display = "block";
};
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
  height: 200vh;
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

button {
  padding: 0.5em 0.7em;
  border: 1px solid #8d8d8d;
  font-size: 1em;
  background-color: white;
}

.top-banner {
  padding: 1em 0;
  background-color: #ffd698;
}

.top-banner-inner {
  width: 98%;
  max-width: 1000px;
  margin: 0 auto;
}

.modal {
  display: none;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0000007f;
  z-index: 1;
}

.modal-body {
  z-index: 2;
  position: fixed;
  top: 3em;
  right: 20%;
  bottom: 3em;
  left: 20%;
  padding: 2em 3em;
  background-color: white;
  overflow: auto;
}
.modal-close {
  cursor: pointer;
  position: absolute;
  top: 0.3em;
  right: 0.3em;
  padding: 0.3em;
  font-size: 2em;
  height: 1em;
  width: 1em;
  text-indent: 10em;
  overflow: hidden;
  border: 0;
}
.modal-close::after {
  position: absolute;
  line-height: 0.5;
  top: 0.2em;
  left: 0.1em;
  text-indent: 0;
  content: "\00D7";
}

.dropdown {
  width: 7em;
  background-color: white;
  display: inline-block;
  position: relative;
}

.dropdown-label {
  text-align: center;
  background-color: #eee;
  border: 1px solid #ccc;
}

.dropdown-label::after {
  content: "";
  position: absolute;
  right: 0.1em;
  top: 0.8em;
  border: 0.3em solid;
  border-color: black transparent transparent;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown:hover .dropdown-label::after {
  top: 0.5em;
  border-color: transparent transparent black;
}

.dropdown-menu {
  margin-top: 0;
  display: none;
  position: absolute;
  left: 0;
  top: 1.8em;
  min-width: 100%;
  background-color: #eee;
}

.submenu {
  margin-left: 0;
  border: 1px solid #0000007f;
}

.submenu > li + li {
  border-top: 1px solid #0000007f;
}
.submenu {
  padding-left: 0;
}

.submenu > li {
  margin-top: 0.1em;
  list-style: none;
}

.submenu > li > a {
  display: block;
  text-align: center;
  background-color: #ccc;
  text-decoration: none;
}
.submenu > li > a:hover {
  background-color: #fff;
}

.container-inner {
  display: flex;
  height: 500px;
}

.col-main {
  flex: 1 80%;
}
.col-aside {
  margin-top: 0;
  flex: 20%;
}

.affix {
  position: sticky; /** 粘性定位 不超过父位置 */
  top: 1em;
}
</style>
