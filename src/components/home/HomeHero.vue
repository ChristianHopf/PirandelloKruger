<script setup>
</script>

<template>
    <div class="hero">
        <img src="@/assets/images/default_hero_bg.webp" alt="Pirandello Kruger">
        <div class="hero-text">
            <h1>PIRANDELLO KRUGER</h1>
            <p>SECURING YOUR WORLD</p>
        </div>

    </div>
</template>

<style scoped>
.hero {
    position: relative;
    height: 658px;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.hero-text{
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
    font-size: 7rem;
    font-weight: 700;
}

.hero-text p {
    color: white;
    margin: 0 auto;
    font-size: 5rem;
}
</style>