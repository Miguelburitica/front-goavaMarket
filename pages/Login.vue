<template>
  <v-app>
    <v-navigation-drawer
      image="https://images.unsplash.com/photo-1713528197377-53e99d3b6b2a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      :width="drawerWidth"
    />
    <v-main class="flex flex-col gap-8 justify-center items-center">
      <NuxtLink to="/">
        <h1 class="text-3xl">Home</h1>
      </NuxtLink>
      <v-card width="500" class="mx-auto mt-5">
        <v-card-title class="display-1">Login</v-card-title>
        <v-card-text>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
          />
          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useWindowInnerSizes } from '@/composables/useWindowInnerSizes'

const { innerWidth } = useWindowInnerSizes()

const showPassword = ref(false)
// 65% of the screen width
const drawerWidth = computed(() => {
  if (innerWidth.value < 700) return 0
  
  return innerWidth.value * 0.65
})
</script>
