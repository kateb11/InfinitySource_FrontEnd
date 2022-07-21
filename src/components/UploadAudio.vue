<template>
  <div>
    <!-- For uploading existing audio files -->
    <div>
      <h4>Upload Audio Files</h4>
      <input type="file" accept="audio/*" @change="handleFileUpload($event)" />
      <br>
      <audio id="audio-preview" controls v-show="file != ''" />
    </div>
    
    <!-- For creating new audio files to upload -->
    <div>
      <h4>Record New Audio Files</h4>
      <audio-recorder
        upload-url="YOUR_API_URL"
        :attempts="3"
        :time="2"
        :headers="headers"
        :before-recording="callback"
        :pause-recording="callback"
        :after-recording="callback"
        :select-record="callback"
        :before-upload="callback"
        :successful-upload="callback"
        :failed-upload="callback"
      />
    </div>
    
   <!-- <button :onlick="uploadAudio()"> <i class="bi bi-upload"></i> </button> -->
  </div>
</template>

<script>
export default {
  name: "Recorder",
  props: {
    msg: String,
  },
  methods: {
    // methods for recording audio 
    callback(data) {
      console.debug(data);
    },
    previewAudio() {
      let audio = document.getElementById("audio-preview");
      let reader = new FileReader();

      reader.readAsDataURL(this.file);
      reader.addEventListener("load", function () {
        audio.src = reader.result;
      });
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.previewAudio();
    },

    // functions to call the API to pass audio files to the server
    uploadAudio(file){
      console.log("Please make it stop!")
      fetch(`${process.env.VUE_APP_API_ORIGIN}/upload_data`, {
        method: `POST`, 
        credentials: `include`,
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify({
          "type": "audio_files",
          "file_type": ".jpg etc",
          "file": file
        })
      }

      )
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: center;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
