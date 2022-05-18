<template>
    <v-layout row justify-center align-center wrap class="mt-2 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Competences en </span>

          <span class="green--text">Codage</span>
        </h2>
        <br>
        <strong>Arduino</strong>
        <br>
        <strong>Html/Css</strong>
        <br>
        <strong>Javascript</strong>
        <br>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <br><br><br>
        <strong>Java</strong>
        <br>
        <strong>C#</strong>
        <br>
        <strong>Python</strong>
        <br>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-1">
        <br><br><br>
        <strong>Sql</strong>
        <br>
        <strong>Visual Basic</strong>
        <br>
        <strong>Json</strong>
        <br>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-1">
        <br><br><br>
        <strong>Php</strong>
        <br>
        <strong>Kotlin</strong>
        <br>
        <strong>VueJs</strong>
        <br>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Langue </span>

          <span class="green--text">Parler</span>
        </h2>
        <br>
        <strong>Anglais</strong>
        <br>
        <strong>Espagnol</strong>
        <br>
        <strong>Portuguais: Comprehension orale</strong>
        <br>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          @click="downloadFile()"
          target="_blank"
          color="green"
          dark
          large
        ><a style="color: white" href="/Teixeira_Leo.pdf">Découvrez mon CV</a>
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
</template>

<script>
import axios from 'axios';

export default {
    methods: {
      downloadFile() {
        axios({
          url: 'http://192.168.46.24/Teixeira_Leo.pdf', // download file link goes here
          method: 'GET',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          responseType: 'blob',
        }).then((res) => {
          var FILE = window.URL.createObjectURL(new Blob([res.data]));
        
          var docUrl = document.createElement('x');
          docUrl.href = FILE;
          docUrl.setAttribute('download', 'Teixeira_Leo.pdf');
          document.body.appendChild(docUrl);
          docUrl.click();
        });
      },
    }
  }
</script>
<style >
</style>

