<script setup>
import HomeHero from '@/components/home/HomeHero.vue';
import HomeAbout from '@/components/home/HomeAbout.vue';

</script>

<template>
  <main>
    <HomeHero />
    <section id="content">
      <HomeAbout />
    </section>
  </main>
</template>

<style scoped>
#content{
  max-width: 1024px;
  margin: 0 auto;
}
</style>