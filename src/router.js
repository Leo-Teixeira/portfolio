import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Contact.vue")
    },
    {
      path: "/competences",
      name: "competences",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Competences.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Services.vue")
    },
    {
      path: "/projets",
      name: "projets",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Projets.vue")
    },
    {
      path: "/portfolio/Python",
      name: "PythonProjets",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Python.vue")
    },
    {
      path: "/portfolio/Php",
      name: "PhpProjets",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Php.vue")
    },
    {
      path: "/portfolio/Flutter",
      name: "Flutter",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Flutter.vue")
    },
    {
      path: "/portfolio/Html,Css,Js",
      name: "Html,Css,Js",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Html.vue")
    },
    {
      path: "/portfolio/C",
      name: "C",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/C.vue")
    },
    {
      path: "/portfolio/Cybersécurité",
      name: "Cybersécurité",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Cybersecurite.vue")
    },
    {
      path: "/portfolio/Kotlin",
      name: "Kotlin",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/Kotlin.vue")
    },
    {
      path: "*",
      name: "Error",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Error.vue")
    },
    {
      path: "/portfolio/Pygamon",
      name: "Pygamon",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_python/Pygamon.vue")
    },
    {
      path: "/portfolio/Pendu",
      name: "Pendu",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_python/Pendu.vue")
    },
    {
      path: "/portfolio/JustePrix",
      name: "JustePrix",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_python/Juste_Prix.vue")
    },
    {
      path: "/portfolio/Aventure",
      name: "Aventure",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_php/Aventure.vue")
    },
    {
      path: "/portfolio/SiteSav",
      name: "SiteSav",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_php/SAV.vue")
    },
    {
      path: "/portfolio/MailFrauduleux",
      name: "MailFrauduleux",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_php/MailFrauduleux.vue")
    },
    {
      path: "/portfolio/Softphone",
      name: "Softphone",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_flutter/Softphone.vue")
    },
    {
      path: "/portfolio/Cointreau",
      name: "Cointreau",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_html/Cointreau.vue")
    },
    {
      path: "/portfolio/Bonneteau",
      name: "Bonneteau",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_html/Bonneteau.vue")
    },
    {
      path: "/portfolio/Cybersecurite",
      name: "Cybersecurite",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_cyber/Cybersecurite.vue")
    },
    {
      path: "/portfolio/ChickHand",
      name: "ChickHand",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_kotlin/ChickHand.vue")
    },
    {
      path: "/portfolio/Formaflix",
      name: "Formaflix",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/Portfolio/projet_c/Formaflix.vue")
    },
  ]
});
