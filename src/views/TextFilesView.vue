<template>
  <div>
    <Files />
  </div>
</template>

<script>
import Files from "../components/UploadTextFiles";

export default {
  name: "Home",

  components: {
    Files,
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