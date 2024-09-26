<script setup>

</script>

<template>
    <header>
        <div class="wrapper">
            <img src="/src/assets/images/pk_dog.png" alt="">
            <nav>
                <a href="/">HOME</a>
                <a href="/">MISSION</a>
                <a href="#content">SERVICES</a>
                <a href="/">CONTACT</a>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: white;
}

header img {
    width: 32px;
    height: auto;
}

.wrapper {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    display: flex;
    gap: 1rem;
}

nav a {
    text-decoration: none;
    color: #FF8A00;
    font-size: 1rem;
    font-weight: 600;
}

@media(min-width: 768px) {
    header {
        padding: 1rem 0;
    }

    .wrapper {
        padding: 0 3rem;
    }

    nav {
        gap: 1.5rem;
    }

    nav a {
        font-size: 1.5rem;
    }
}

@media(min-width: 1024px) {
    .wrapper {
        max-width: 1024px;
    }

    nav a {
        font-size: 1.5rem;
    }
}
</style>