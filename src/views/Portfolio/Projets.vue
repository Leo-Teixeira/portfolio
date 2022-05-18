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
          src: require('./../../images/python.png'),
          title: "Python"
        },

        {
          src: require('./../../images/php.png'),
          title: "Php"
        },
        {
          src: require('./../../images/flutter.png'),
          title: "Flutter"
        },
        {
          src: require('./../../images/html.png'),
          title: "Html,Css,Js"
        },
        {
          src: require('./../../images/c.png'),
          title: "C"
        },
        {
          src: require('./../../images/cybersecurite.jpg'),
          title: "Cybersécurité"
        },
        {
          src: require('./../../images/android.png'),
          title: "Kotlin"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>