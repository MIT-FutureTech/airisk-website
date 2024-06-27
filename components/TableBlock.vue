<template>
    <div class="mt-8 bg-gray-500 h-96">
        {{ data }}
        
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