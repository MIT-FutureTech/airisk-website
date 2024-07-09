<template>
    <div>
        <HeaderSection />
        <component :is="blockMap[section.collection]" v-for="(section,index) in sections.sections" :key="section.id" :index="index" :data="section.item" />
        <FooterSection />
    </div>
</template>

<script setup>

useHead({
    title: 'Ai Risk Repository',
    meta: [
        {
            name: 'description', content: 'The AI Risk Repository will serve as a foundation for a more coordinated, coherent, and complete approach to defining, auditing, and managing the risks posed by AI systems'
        },
        {
            property: 'og:title',
            content: 'Ai Risk Repository'
        },
        {
            property: 'og:description',
            content: 'The AI Risk Repository will serve as a foundation for a more coordinated, coherent, and complete approach to defining, auditing, and managing the risks posed by AI systems'
        },
        {
            property: 'og:image',
            content: 'https://airisk.mit.edu/og-image.png'
        },
        {
            property: 'og:url',
            content: 'https://airisk.mit.edu'
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Ai Risk Repository'
        },
        {
            name: 'twitter:description',
            content: 'The AI Risk Repository will serve as a foundation for a more coordinated, coherent, and complete approach to defining, auditing, and managing the risks posed by AI systems'
        },
        {
            name: 'twitter:image',
            content: 'https://airisk.mit.edu/og-image.png'
        },
        {
            name: 'twitter:url',
            content: 'https://airisk.mit.edu'
        },
        {
            name: 'theme-color',
            content: '#1A1A1A'
        }


    ],
    htmlAttrs: {
        lang: 'en',
        noindex: true,
    },
    
})


const blockMap = {
    hero_section: resolveComponent('Hero'),
    section: resolveComponent('Section'),
    team_block: resolveComponent('TeamBlock'),
    accordion_block: resolveComponent('AccordionBlock'),
}

const { getItems } = useDirectusItems();
const { $directus, $readItems } = useNuxtApp();

const  {data: sections} = await useAsyncData('sections', async () => {
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