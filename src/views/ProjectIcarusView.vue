<script setup>
import MailingListForm from '@/components/project-icarus/MailingListForm.vue';
import ProjectIcarusAbout from '@/components/project-icarus/ProjectIcarusAbout.vue';
import ProjectIcarusCards from '@/components/project-icarus/ProjectIcarusCards.vue';


</script>

<template>
    <main>
        <section class="wrapper">
            <ProjectIcarusAbout />
            <div id="content">
                <ProjectIcarusCards />
                <MailingListForm />
            </div>
        </section>
    </main>
</template>

<style>
.wrapper {
    position: relative;
    width: 100%;
    margin: 0 auto;
}

#content {
    width: 100%;
    margin: 0 auto;
}
</style>