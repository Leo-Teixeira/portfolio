<template>
<v-layout column justify-center wrap class="mt-2 pt-2">
  <div style="text-align:center; margin: auto">
    <img
      src="../../../images/vozitel.png"
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
          href="https://github.com/lavaro883/vozitel"
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
          title: "Flutter"
        },
      ],
      librairie: [
        {
          title: "bottom_navy_bar"
        },
        {
          title: "flutter_contacts"
        },
        {
          title: "permission_handler"
        },
        {
          title: "url_launcher"
        },
        {
          title: "flutter_webrtc"
        },
        {
          title: "favorite_button"
        },
        {
          title: "sip_ua"
        },
      ],
      caracteristique : [
        {
          title: "Création d'une page de connexion"
        },
        {
          title: "Création du menu de l'application"
        },
        {
          title: "Création de toutes les pages de l'appli"
        },
        {
          title: "Création des requètes permettant le fonctionnement de l'appli"
        },
        {
          title: "Gestion des utilisateurs ainsi que des favoris ect"
        },
        {
          title: "Fonction permettant l'appel à un autre utilisateur"
        },
        {
          title: "Gestion theme de l'application"
        },
        {
          title: "Deconnexion à l'appli ainsi qu'au serveur asterisk"
        },
        {
          title: "Système de recherche d'utilisateur"
        },
      ]
    };
  }
};
</script>
