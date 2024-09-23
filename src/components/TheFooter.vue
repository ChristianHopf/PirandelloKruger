<script setup>
</script>

<template>
    <footer>
        <div class="wrapper">
            <div class="footer-pk">
                <img src="/src/assets/images/pk_dog.png" alt="">
                <div class="footer-pk-text">
                    <h1>PIRANDELLO KRUGER</h1>
                    <p>© 2024 Pirandello Kruger</p>
                </div>

            </div>
            <div class="links">
                <div id="services-links">
                    <h2>SECURITY</h2>
                    <nav>
                        <a href="/">ON-PREMISES</a>
                        <a href="/">CYBERSECURITY</a>
                        <a href="/">TRANSPORTATION</a>
                        <a href="/">PROJECT ICARUS</a>
                    </nav>
                </div>
                <div id="info-links">
                    <h2>INFO</h2>
                    <nav>
                        <a href="/">CAREERS</a>
                        <a href="/">CONTACT US</a>
                        <a href="/">PRIVACY POLICY</a>
                        <a href="/">SUPPORT</a>
                        <a href="/">PRESS</a>
                    </nav>
                </div>
                <div id="partners-links">
                    <h2>PARTNERS</h2>
                    <nav>
                        <a href="/">CALLAGHAN</a>
                        <a href="/">CITY EYE NEWS</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    padding: 1em 0;
    margin-top: 6rem;
}

.footer-pk {
    display: flex;
    align-items: start;
    gap: 1.5em;
    color: #FF8A00;
}
h1{
    font-size: 1.75em;
    margin: 0 auto;
}

img {
    width: 48px;
    height: auto;
}

p {
    color: #FF8A00;
    margin: 0 auto;
}

.wrapper {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 3em;
    align-items: center;
    gap: 3em;
}

.links {
    display: flex;
    flex-direction: row;
    gap: 6rem;
}

h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.25em;
    color: #FF8A00;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.75em;
}

a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    transition: all 0.2s ease;
}

a:hover {
    color: #FF8A00;
}

@media(min-width: 1024px) {
    .wrapper {
        max-width: 1024px;
        flex-direction: row;
        align-items: start;
    }
}
</style>