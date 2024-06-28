<template>
    <TableAIRiskDatabase :data="data"  v-if="data.table_name === 'Database table'" />
    <div v-else class="mt-8 bg-gray-500 h-96">
        
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>