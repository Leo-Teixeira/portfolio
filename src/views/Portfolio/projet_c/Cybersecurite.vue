<template>
<v-layout column justify-center wrap class="mt-2 pt-2">
  <div style="text-align:center; margin: auto">
    <img
      src="../../../images/pendu.jpg"
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
        <span>Aucune Librairie </span>
        <span class="green--text">Utilisé</span>
      </h2>
      <div class="mt-4 pt-2">
        <div style="text-align:center">
                <v-btn
          href="https://github.com/lavaro883/cyberprotective"
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
          title: "C#"
        },
      ],
      caracteristique : [
        {
          title: "Gestion de toutes les données du site en base de donnée"
        },
        {
          title: "Ajout, suppression et modification de personne, d'entreprise, de question"
        },
        {
          title: "Interface graphique"
        },
        {
          title: "Mise en place d'un menu"
        },
        {
          title: "Lien entre le Back End et le Front End"
        },
      ]
    };
  }
};
</script>