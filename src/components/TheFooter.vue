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
    padding: 1rem 0;
    margin-top: 6rem;
}

.footer-pk {
    display: flex;
    align-items: start;
    gap: 1.5rem;
    color: #FF8A00;
}

h1 {
    font-size: 1.75rem;
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
    padding: 0 3rem;
    align-items: center;
    gap: 3rem;
}

.links {
    display: flex;
    flex-direction: row;
    gap: 6rem;
}

h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: #FF8A00;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.75rem;
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