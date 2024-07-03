<template>
    <component :data="data" v-if="Object.keys(TableComponents).includes(data.table_name)" :is="TableComponents[data.table_name]" />
    <div v-else class="mt-8 bg-gray-500 h-96">
        {{ data }} is not supported yet. {{ Object.keys(TableComponents)}}
    </div>
</template>

<script setup>

defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const TableComponents = {
    'AI Risk Database v0.1': resolveComponent('TableAIRiskDatabase'),
};
</script>