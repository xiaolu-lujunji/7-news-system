<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import Banner from '../features/banner.vue'
import Header from '../features/header'
import Search from '../features/search.vue'
import Content from '../features/content'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <Banner />
    <Header />
    <Search />
    <Content />
  </main>
</template>

<style>
main {
  width: 100%;
  height: 100%;
}
</style>
