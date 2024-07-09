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
            name: 'description', content: 'Navigate the complex landscape of risks from artificial intelligence with a comprehensive database of over 700 AI risks and two taxonomies to understand the causes and domains of AI risks.'
        },
        {
            property: 'og:title',
            content: 'Ai Risk Repository'
        },
        {
            property: 'og:description',
            content: 'Navigate the complex landscape of risks from artificial intelligence with a comprehensive database of over 700 AI risks and two taxonomies to understand the causes and domains of AI risks.'
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
            content: 'Navigate the complex landscape of risks from artificial intelligence with a comprehensive database of over 700 AI risks and two taxonomies to understand the causes and domains of AI risks.'
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