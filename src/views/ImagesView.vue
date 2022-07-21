<template>
  <div id="app">
    <images />
  </div>
</template>

<script>
import Images from "../components/UploadImages";

export default {
  name: "Home",

  components: {
    Images,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
}
</style>