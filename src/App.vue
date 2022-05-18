<template>
  <v-app :dark="goDark">
    <v-content>
      <v-container align-center>
        <TheHeader :goDark="goDark" @changeTheme="updateTheme($event)"/>

        <transition
          name="router-animation"
          mode="out-in"
          enter-active-class="animated fadeIn fast"
          leave-active-class="animated fadeOut faster"
        >
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",
  metaInfo: {
    title: "Portfolio",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Léo Teixeira Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Léo Teixeira" },
      { property: "og:site_name", content: "Léo Teixeira" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: require('./images/moi.jpg') },
      {
        property: "og:image",
        content: require('./images/moi.jpg')
      },
      { property: "og:description", content: "Léo Teixeira Portfolio" }
    ]
  },
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return { goDark: false };
  },
  methods: {
    updateTheme(updatedTheme) {
      this.goDark = !updatedTheme;
    }
  }
};
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";
</style>
