<script setup>
</script>

<template>
    <div class="hero">
        <!-- <img src="@/assets/images/default_hero_bg.webp" alt="Pirandello Kruger"> -->
        <video autoplay muted loop>
            <source src="@/assets/images/pk_hero.mp4" type="video/mp4">
        </video>
        <div class="hero-text">
            <h1>PIRANDELLO KRUGER</h1>
            <p>SECURING YOUR WORLD</p>
        </div>

    </div>
</template>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    height: calc(100vh - 4rem);
}


video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-text {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 10%;
    /* max-width: 1280px; */
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* top: 20%;
    left: 50%;
    transform: translateX(-50%); */
}

.hero-text h1 {
    color: #FF8A00;
    margin: 0 auto;
    font-size: 3.5rem;
    font-weight: 700;
}

.hero-text p {
    color: white;
    margin: 0 auto;
    font-size: 1.75rem;
    font-weight: 700;
}

/* @media(min-width: 768px) {
    .hero {
        height: 658px;
    }

    .hero-text h1 {}
} */

@media(min-width: 1024px) {
    .hero-text h1 {
        font-size: 7rem;
    }

    .hero-text p {
        font-size: 5rem;
    }
}
</style>