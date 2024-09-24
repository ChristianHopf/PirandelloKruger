<script setup>
import HomeHero from '@/components/home/HomeHero.vue';
import HomeAbout from '@/components/home/HomeAbout.vue';
import HomeSecurityGuards from '@/components/home/HomeSecurityGuards.vue';
import HomeAntiRunnerUnits from '@/components/home/HomeAntiRunnerUnits.vue';

</script>

<template>
  <main>
    <HomeHero />
    <section class="container">
      <HomeAbout />
      <div id="content">
        <HomeSecurityGuards />
        <HomeAntiRunnerUnits />
      </div>
    </section>
  </main>
</template>

<style>
.container {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

button {
  display: inline-block;
  position: relative;
  background-color: #FF8A00;
  color: var(--primary-text);
  border: none;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #FF8A00;
  color: #FFF;
  cursor: pointer;
}
</style>