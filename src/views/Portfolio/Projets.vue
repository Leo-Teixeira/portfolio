<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex v-for="portfolio in portfolios" :key="portfolio.src" xs12 sm12 md4 lg4 xl4>
        <v-card
          :to="'/portfolio/'+(portfolio.title).toLowerCase()"
          hover
          flat
          color="transparent"
          height="230"
        >
          <v-card-title></v-card-title>
          <v-img :src="portfolio.src" aspect-ratio="2.75" height="130" contain></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{portfolio.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      portfolios: [
        {
          src: require('./../../images/pygamon.png'),
          title: "Pygamon"
        },

        {
          src: require('./../../images/juste_prix.png'),
          title: "JustePrix"
        },
        {
          src: require('./../../images/pendu.jpg'),
          title: "Pendu"
        },
        {
          src: require('./../../images/LogoAventure.png'),
          title: "Aventure"
        },
        {
          src: require('./../../images/sav.png'),
          title: "SiteSav"
        },
        {
          src: require('./../../images/mail.png'),
          title: "MailFrauduleux"
        },
        {
          src: require('./../../images/vozit.png'),
          title: "Softphone"
        },
        {
          src: require('./../../images/cointreau.jpg'),
          title: "Cointreau"
        },
        {
          src: require('./../../images/bonneteau.png'),
          title: "Bonneteau"
        },
        {
          src: require('./../../images/cyber.png'),
          title: "Cybersecurite"
        },
        {
          src: require('./../../images/kotlin.jpg'),
          title: "Formaflix"
        },
        {
          src: require('./../../images/kotlin.jpg'),
          title: "Chickhand"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
