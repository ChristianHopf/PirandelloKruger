<script setup>
</script>

<template>
    <div class="card">
        <img src="/src/assets/images/pk_guard.png" alt="">
        <div class="card-content">
            <h1>SECURITY GUARDS</h1>
            <p>
                Equipped with the mirror&apos;s edge of weapons and armor technology, our guards keep you safe, no
                matter
                what.
                Choose a protection tier that fits your budget.
            </p>
            <button>RESERVE TODAY</button>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

img {
    max-width: 75vw;
    border: 2px solid;
    border-color: black;
    border-radius: 0.75em;
}

.card-content {
    max-width: 75vw;
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