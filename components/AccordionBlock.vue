<template>
    <div class="mt-8">
        <AccordionItemBlock :data="data" v-for="data in data.accordion_items" :key="data.id" />
    </div>
</template>


<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>