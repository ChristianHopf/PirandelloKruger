<script setup>
</script>

<template>
    <div class="about">
        <h1>A HISTORY OF EXCELLENCE</h1>
        <p>
            PK has been The City&apos;s leading private military firm since its inception. From businesses
            to
            individuals, we offer a variety of protection services to suit your needs.
        </p>
    </div>
</template>

<style scoped>
.about {
    margin: 2rem auto;
    text-align: center;
    padding: 0 3rem;
}

h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
}

p {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--secondary-text);
}

@media(min-width: 768px) {
    h1 {
        font-size: 3rem;
    }

    p {
        font-size: 1.5rem;
    }
}

@media(min-width: 1024px) {
    .about {
        max-width: 1024px;
    }
}
</style>