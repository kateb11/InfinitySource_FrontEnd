<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Infinity Source
        </h1>

        <h6>
          This application allows you to upload your stories to Ancestry from multiple different data formats
        </h6>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
           <router-link to="audio">Upload Your Stories From Audio Files 
            <br> or Record New Audio Files</router-link>
        </h2>

      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
         <router-link to="images">Upload Your Stories From Images</router-link>
        </h2>

        
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          <router-link to="files">Upload Your Stories From Text Files</router-link>
          
        </h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      //
    }),
  }
</script>
