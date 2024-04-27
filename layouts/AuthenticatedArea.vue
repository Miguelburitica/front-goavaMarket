<template>
  <v-layout>
    <v-navigation-drawer
    v-model="drawer"
    width="500"
    >
    <v-list>
        <v-list-item to="/">Home</v-list-item>
        <v-list-item to="/login">Login</v-list-item>
    </v-list>
    </v-navigation-drawer>
    <v-main class="flex justify-center items-center">
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Authenticated Area</v-toolbar-title>
      </v-app-bar>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
  
</template>

<script setup lang="ts">

const drawer = ref(false)

</script>
