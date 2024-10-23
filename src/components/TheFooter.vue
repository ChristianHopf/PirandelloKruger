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
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">ON-PREMISES</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">CYBERSECURITY</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">TRANSPORTATION</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">PROJECT ICARUS</a>
                    </nav>
                </div>
                <div id="info-links">
                    <h2>INFO</h2>
                    <nav>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">CAREERS</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">CONTACT US</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">PRIVACY POLICY</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">SUPPORT</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">PRESS</a>
                    </nav>
                </div>
                <div id="partners-links">
                    <h2>PARTNERS</h2>
                    <nav>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">CALLAGHAN</a>
                        <a href="https://mirrorsedge.fandom.com/wiki/Pirandello_Kruger" target="_blank"
                            rel="noopener noreferrer">CITY EYE NEWS</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    margin: 6rem auto 0 auto;
    padding: 1rem 0;
}

.footer-pk {
    display: flex;
    align-items: start;
    gap: 1.5rem;
    color: #FF8A00;
}

h1 {
    font-size: 1.25rem;
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
    display: flex;
    max-width: 100%;
    /* margin: 0 auto; */
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
}

.links {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 1.75rem;
}

h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
    color: #FF8A00;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.75rem;
}

nav a {
    text-decoration: none;
    color: black;
    font-size: 0.75rem;
    font-weight: 600;
    transition: all 0.2s ease;
}

a:hover {
    color: #FF8A00;
}

@media(min-width: 768px) {}

@media(min-width: 1024px) {
    .wrapper {
        max-width: 1024px;
        margin: 0 auto;
        flex-direction: row;
        align-items: start;
    }

    .footer-pk {
        align-items: center;
    }

    h1 {
        font-size: 2rem;
        margin: 0 auto;
    }

    .links {
        flex-direction: row;
        justify-content: end;
    }

    h2 {
        font-size: 1.5rem;
    }

    nav a {
        font-size: 1rem;
    }
}
</style>