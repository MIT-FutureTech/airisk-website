<template>
    <div>
        <HeaderSection />
        <component :is="blockMap[section.collection]" v-for="(section,index) in sections.sections" :key="section.id" :index="index" :data="section.item" />
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


const blockMap = {
    hero_section: resolveComponent('Hero'),
    section: resolveComponent('Section'),
    team_block: resolveComponent('TeamBlock'),
    accordion_block: resolveComponent('AccordionBlock'),
}

const { getItems } = useDirectusItems();
const { $directus, $readItems, $preview } = useNuxtApp();

const keyPrfx = $preview.value ? '-preview' : '';
if ($preview) {
    const  {data: sections} = await useAsyncData(`sections${keyPrfx}`, async () => {
    return $directus.request($readItems(('home'), {
        fields: [
            'sections.collection',
            'sections.item.*.*.*.*.*.*.*',
        ]
    }))
})
}

const  {data: sections} = await useAsyncData(`sections${keyPrfx}`, async () => {
    return $directus.request($readItems(('home'), {
        fields: [
            'sections.collection',
            'sections.item.*.*.*.*.*.*.*',
        ]
    }))
})

</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>