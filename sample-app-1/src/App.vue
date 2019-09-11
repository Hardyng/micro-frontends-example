<template>
  <div id="app">
    <h1>Sample app here!</h1>
    <h3>And here is some of sample app routing</h3>
    <div id="nav">
      <router-link to="/">Feature 1</router-link> |
      <router-link to="/feature">Feature 2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
