<template>
<v-layout column justify-center wrap class="mt-2 pt-2">
  <div style="text-align:center; margin: auto">
    <img
      src="../../../images/sav.png"
      style="height: 25rem"
      height="320"
    />
  </div>
  <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
      <h2>
        <span>Description </span>
        <span class="green--text">Projet :</span>
      </h2>
      <v-flex v-for="caracteristiques in caracteristique" :key="caracteristiques.src" xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <v-flex text-xs subheading font-weight-bold>- {{caracteristiques.title}}</v-flex>
      </v-flex>
      <br>
      <h2>
        <span>Langage </span>
        <span class="green--text">Utilisé :</span>
      </h2>
      <v-flex v-for="langages in langage" :key="langages.src" xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <v-flex text-xs subheading font-weight-bold>- {{langages.title}}</v-flex>
      </v-flex>
      <br>
      <h2>
        <span>Librairie </span>
        <span class="green--text">Utilisé :</span>
      </h2>
      <v-flex v-for="librairies in librairie" :key="librairies.src" xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <v-flex text-xs subheading font-weight-bold>- {{librairies.title}}</v-flex>
      </v-flex>
      <div class="mt-4 pt-2">
        <div style="text-align:center">
        <v-btn
          href="https://github.com/lavaro883/sav"
          target="_blank"
          color="green"
          dark
          large
        > Lien vers le Projet
          <v-icon right dark>fas fa-link</v-icon>
        </v-btn>
        </div>
      </div>
</v-flex>
</v-layout>
</template>

<script>
export default {
  data() {
    return {
      langage: [
        {
          title: "Php"
        },
      ],
      librairie: [
        {
          title: "Bootstrap"
        },
        {
          title: "PhpMailer"
        },
        {
          title: "ZipLib"
        },
      ],
      caracteristique : [
        {
          title: "Gestion des clients fournisseurs ainsi que des documents sur une base de donnée"
        },
        {
          title: "Génération d'envoi de mails automatiques"
        },
        {
          title: "Dépot de document"
        },
        {
          title: "Authentification afin de se connecter sur le site"
        },
        {
          title: "Inscription et deconnexion possible"
        },
        {
          title: "Compression des fichiers envoyés"
        },
      ]
    };
  }
};
</script>