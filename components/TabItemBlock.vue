<template>

<div>
  <component :is="blockMap[block.collection]" v-for="(block,index) in data.content" :key="block.id" :index="index" :data="block.item" />
</div>

</template>


<script setup>

const props =defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const blockMap = {
    rich_text: resolveComponent('RichText'),
    table: resolveComponent('TableBlock'),
}
</script>