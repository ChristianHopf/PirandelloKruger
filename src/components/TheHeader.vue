<script setup>

</script>

<template>
    <header>
        <div class="wrapper">
            <img src="/src/assets/images/pk_dog.png" alt="">
            <nav>
                <a href="/">HOME</a>
                <a href="/">MISSION</a>
                <a href="/">ABOUT</a>
                <a href="/">SERVICES</a>
                <a href="/">CONTACT</a>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    padding: 1em 0;
}
header img{
    width: 48px;
    height: auto;
}

.wrapper {
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.wrapper h1 {
    /* margin: 0; */
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
    display: flex;
    font-size: 12px;
    gap: 1.5rem;
    /* margin-top: 2rem; */
}

nav a {
    text-decoration: none;
    color: #FF8A00;
    font-size: 2em;
    font-weight: 600;
}
</style>