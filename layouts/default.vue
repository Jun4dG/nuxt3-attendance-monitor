<template>
    <div>
      <Header />
      <NavBar />
      <NuxtPage />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from '~/components/Header.vue';
  import NavBar from '~/components/NavBar.vue';
  import Footer from '~/components/Footer.vue';
  </script>