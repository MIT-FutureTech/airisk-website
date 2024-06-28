<template>
    <div class="p-2"> <template v-if="cell.formattedValue?.length > 100 && !seeAll">
            {{ cell.formattedValue.substring(0, 100) }}... <button @click="seeAll = !seeAll">See All</button>
        </template>
        <template v-else>
            {{ cell.formattedValue }} <button v-if="cell.formattedValue?.length > 100" @click="seeAll = !seeAll">See Less</button>
        </template>
    </div>
</template>

<script setup>

const props = defineProps({
    cell: Object
})

const seeAll = ref(false)





</script>