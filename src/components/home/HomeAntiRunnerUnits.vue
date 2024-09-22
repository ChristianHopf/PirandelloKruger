<script setup>
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
            <button>JOIN THE WAITLIST</button>
        </div>
        <img src="/src/assets/images/pk_pursuit.png" alt="">
    </div>
</template>

<style scoped>
.card {
    margin: 10rem auto;
    display: flex;
    flex-direction: column-reverse;
    /* max-width: 1024px; */
    align-items: center;
    gap: 2rem;
}

img {
    width: 48%;
    border: 2px solid;
    border-color: black;
    border-radius: 0.75em;
}

.card-content {
    max-width: 50%;
}

.card-content h1 {
    font-size: 3em;
    margin: 0;
    font-weight: 600;
}

.card-content p {
    margin: 0;
    font-size: 1.5em;
    font-weight: 600;
    color: var(--secondary-text);
}

.accent {
    color: #FF8A00;
}

@media(min-width: 1024px) {
    .card {
        flex-direction: row;
        max-width: 1024px;
    }
}
</style>