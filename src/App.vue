<template>
  <v-app>
    <v-app-bar
      app
      color="#283593"
      dark
    >
      <div class="d-flex align-center">
        <span class="mr-2"><router-link to="/" id="font-color" class="font-size">Infinity Source</router-link></span>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.font-size {
   font-size: 25px;
}
#font-color {
  color: white; 
}
</style>