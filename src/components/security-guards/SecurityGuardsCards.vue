<script setup>
import router from '@/router';

</script>

<template>
    <div class="card">
        <div class="card-content">
            <h1>DAYTIME PROTECTION</h1>
            <p>
                It was night again. The Waystone Inn lay in silence, and it was a silence of three parts. The most
                obvious part was a hollow, echoing quiet, made by things that were lacking. If there had been a wind it
                would have sighed through the trees, set the inn&apos;s sign creaking on its hooks, and brushed the
                silence down the road like trailing autumn leaves.
            </p>
            <button type="button">RESERVE TODAY</button>
        </div>
    </div>
    <div class="card">
        <div class="card-content">
            <h1>OVERNIGHT PROTECTION</h1>
            <p>
                It was night again. The Waystone Inn lay in silence, and it was a silence of three parts. The most
                obvious part was a hollow, echoing quiet, made by things that were lacking. If there had been a wind it
                would have sighed through the trees, set the inn&apos;s sign creaking on its hooks, and brushed the
                silence down the road like trailing autumn leaves.
            </p>
            <button type="button">RESERVE TODAY</button>
        </div>
    </div>
    <div class="card">
        <div class="card-content">
            <h1>PERSONAL ESCORT</h1>
            <p>
                It was night again. The Waystone Inn lay in silence, and it was a silence of three parts. The most
                obvious part was a hollow, echoing quiet, made by things that were lacking. If there had been a wind it
                would have sighed through the trees, set the inn&apos;s sign creaking on its hooks, and brushed the
                silence down the road like trailing autumn leaves.
            </p>
            <button type="button">RESERVE TODAY</button>
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
    font-size: 1.75rem;
    margin: 0;
    font-weight: 600;
}

.card-content p {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: var(--secondary-text);
}

@media(min-width: 768px) {
    .card-content h1 {
        font-size: 2.5rem;
    }

    .card-content p {
        font-size: 1.25rem;
    }
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