<template>
    <TypographyProse :content="data.content" />
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    },
});
</script>