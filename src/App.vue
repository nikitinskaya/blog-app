<template>
  <div id="app">
    <Hero/>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Hero,
    Navbar
  }
};
</script>