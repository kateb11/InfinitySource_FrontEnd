<template>
  <div id="app">
    <recorder />
  </div>
</template>

<script>
import Recorder from "../components/UploadAudio";

export default {
  name: "Home",

  components: {
    Recorder,
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