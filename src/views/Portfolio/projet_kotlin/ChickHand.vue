<template>
<v-layout column justify-center wrap class="mt-2 pt-2">
  <div style="text-align:center; margin: auto">
    <img
      src="../../../images/chickhand.png"
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
        <span class="green--text">Utilisée :</span>
      </h2>
      <v-flex v-for="librairies in librairie" :key="librairies.src" xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <v-flex text-xs subheading font-weight-bold>- {{librairies.title}}</v-flex>
      </v-flex>
      <div class="mt-4 pt-2">
        <div style="text-align:center">
        <v-btn
          href="https://github.com/lavaro883/ChickHand_Project"
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
          title: "Kotlin"
        },
      ],
      librairie: [
        {
          title: "Pygame"
        },
        {
          title: "Pytmx"
        },
        {
          title: "Pyscroll"
        },
      ],
      caracteristique : [
        {
          title: "Création page de connexion"
        },
        {
          title: "Création d'un menu"
        },
        {
          title: "Création page d'ajout, modification ou suppression d'un service"
        },
        {
          title: "Création de la page de profil avec possibilité de le modifier"
        },
        {
          title: "Liste de tous les services présent en base"
        },
        {
          title: "Fonction d'ajout de service"
        },
        {
          title: "Création des requètes permettant le fonctionnement de l'appli"
        },
      ]
    };
  }
}
</script>
