<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/">VuetifyPage</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
      to="/login"
       variant="outlined"
       size="small"
       color="pink-darken-3"
       text="Login">
      </v-btn>
    </v-toolbar>
  
  <v-main>
    <RouterView />
  </v-main>

  </v-app>
</template>