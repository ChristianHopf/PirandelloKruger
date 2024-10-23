<script setup>
import SecurityGuardsAbout from '@/components/security-guards/SecurityGuardsAbout.vue';
import SecurityGuardsCards from '@/components/security-guards/SecurityGuardsCards.vue'


</script>

<template>
    <main>
        <section class="container">
            <div id="content">
                <SecurityGuardsAbout />
                <SecurityGuardsCards />
            </div>
        </section>
    </main>
</template>

<style>
.wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
}

#content {
    width: 100%;
    margin: 0 auto;
}
</style>