<template>
    <div class="scroll-mt-28" id="key-insights-and-artifacts"
        :class="{
            'bg-white': index % 2 === 0,
            'bg-[#FAFAFA]': index % 2 === 1,
        }"
    >
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl" :id="data.title.toLowerCase().replaceAll(' ', '-')" v-if="data.title">
                    {{ data.title }}
                </h2>
                <component :is="blockMap[block.collection]" v-for="(block,index) in data.blocks" :key="block.id" :index="index" :data="block.item" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
});

const blockMap = {
    rich_text: resolveComponent('RichText'),
    table: resolveComponent('TableBlock'),
    tabs: resolveComponent('TabsBlock'),
    accordion: resolveComponent('AccordionBlock'),
    team_list: resolveComponent('TeamBlock'),
}
</script>