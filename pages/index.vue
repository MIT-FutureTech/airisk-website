<template>
    <div>
        <HeaderSection />
        <component :is="blockMap[section.collection]" v-for="(section,index) in sections" :key="section.id" :index="index" :data="section.item" />
        <FooterSection />
    </div>
</template>

<script setup>
useHead({
    title: 'Ai Risk Index',
    meta: [
        {
            name: 'description', content: 'The AI Risk Index will serve as a foundation for a more coordinated, coherent, and complete approach to defining, auditing, and managing the risks posed by AI systems'
        }
    ],
    htmlAttrs: {
        lang: 'en',
    },
})
const { getItems } = useDirectusItems();

const blockMap = {
    hero_section: resolveComponent('Hero'),
    section: resolveComponent('Section'),
    team_block: resolveComponent('TeamBlock'),
    accordion_block: resolveComponent('AccordionBlock'),
}

const { sections } = await getItems({
    collection: 'home',
    params: {
        fields: [
            'sections.collection',
            'sections.item.*.*.*.*.*.*.*',
        ]
    },
});
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>