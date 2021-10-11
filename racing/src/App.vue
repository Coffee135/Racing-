<template>
  <div id="app">
    <h1>Racing</h1>
    <ul>
      <!-- <li><router-link to="/">Home</router-link></li> -->
      <li><router-link to="/greyhound/">Greyhound</router-link></li>
      <li><router-link to="/harness/parametername">Harness</router-link></li>
      <li><router-link to="/horse/parametername">Horse</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  
}
a {
  color: #0fb409;
  font-size: 30px;

}
</style>
