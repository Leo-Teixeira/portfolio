<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mt-2">
          <span class="green--text">Localisation</span>
        </h2>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-map-marker-alt</v-icon>
          <span>Angers,&nbsp; 2 Rue Adrien Recouvreur</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-envelope</v-icon>
          <span>teixeiraleo63@gmail.com</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-icon large color="green" left>fas fa-phone</v-icon>
          <span>+33 06 44 35 09 28&nbsp;</span>
        </div>
        <div class="py-4 subheading font-weight-bold">
          <v-card-actions class="hidden-sm-and-down">
            <v-btn
              v-for="icon in icons"
              :key="icon.icon"
              fab
              dark
              outline
              color="green"
              :href="icon.href"
              target="_blank"
            >
              <v-icon dark>{{icon.icon}}</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-flex>

      <v-flex xs12 sm12 md6 lg6 xl6>
        <h2 class="pb-4 mb-4">
          <span>Formulaire de </span>
          <span class="green--text">Contact</span>
        </h2>

        <form method="POST" action="https://formspree.io/contact@etudiant.com">
          <v-text-field
            name="name"
            color="green"
            background-color="transparent"
            v-model="name"
            :error-messages="nameErrors"
            label="Nom"
            required
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            type="email"
            color="green"
            background-color="transparent"
            name="email"
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
            color="green"
            background-color="transparent"
            :counter="200"
            :error-messages="bodyErrors"
            v-model="body"
            label="Ecrivez votre message ici"
            name="body"
            @blur="$v.body.$touch()"
          ></v-textarea>
          <v-btn
            @click="submit"
            type="submit"
            color="green"
            class="white--text"
            :disabled=" (body.length<=20)"
          >SEND MESSAGE</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  email,
  minLength
} from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    body: { required, minLength: minLength(20) }
  },
  data() {
    return {
      name: "",
      email: "",
      body: "",
      icons:[
        {
          href: "https://fr.linkedin.com/in/l%C3%A9o-teixeira-57024a1b9?trk=people-guest_people_search-card",
          icon: "fab fa-linkedin-in"
        },
      ]
    };
  },
  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.body = "";
    }
  },
  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("un nom est requis");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("un email est requis");
      return errors;
    },
    bodyErrors() {
      const errors = [];
      if (!this.$v.body.$dirty) return errors;
      !this.$v.body.minLength &&
        errors.push("Text must be at least 20 characters long");
      !this.$v.body.required && errors.push("un message est requis");
      return errors;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
