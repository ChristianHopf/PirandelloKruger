<script setup>
import router from '@/router';

</script>

<template>
    <div class="card">
        <div class="card-content">
            <h1>ANTI-RUNNER UNITS</h1>
            <p>
                Learn how PK is securing
                the future of information
                with <span class="accent">Project Icarus.</span>
            </p>
            <button @click="router.push('/project-icarus')">JOIN THE WAITLIST</button>
        </div>
        <img src="/src/assets/images/pk_pursuit.png" alt="">
    </div>
</template>

<style scoped>
.card {
    margin: 2rem auto;
    display: flex;
    flex-direction: column-reverse;
    /* max-width: 1024px; */
    align-items: center;
    gap: 2rem;
    padding: 0 3rem;
}

img {
    max-width: 75vw;
    border: 2px solid;
    border-color: black;
    border-radius: 0.75rem;
}

.card-content {
    max-width: 75vw;
}

.card-content h1 {
    font-size: 3rem;
    margin: 0;
    font-weight: 600;
}

.card-content p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--secondary-text);
}

.accent {
    color: #FF8A00;
}

@media(min-width: 1024px) {
    .card {
        flex-direction: row;
        align-items: start;
        max-width: 1024px;
    }

    img {
        max-width: 50%;
    }

    .card-content {
        max-width: 50%;
    }
}
</style>