<template>
    <div class="p-1 text-sm break-words max-w-32">
        <template v-if="isTruncated">
            {{ truncatedValue }}...
            <button class="text-[#A32035]" @click="toggleSeeAll">See All</button>
        </template>
        <template v-else>
            {{ formattedValue }}
            <button class="text-[#A32035]" v-if="isLongText" @click="toggleSeeAll">See Less</button>
        </template>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    cell: {
        type: Object,
        required: true
    }
});

const seeAll = ref(false);

const isLongText = computed(() => {
    return props.cell.formattedValue?.length > 100;
});

const isTruncated = computed(() => {
    return isLongText.value && !seeAll.value;
});

const truncatedValue = computed(() => {
    return formattedValue.value.substring(0, 100);
});

const formattedValue = computed(() => {
    if (props.cell.dataValidation?.condition?.type === 'ONE_OF_LIST' && props.cell.formattedValue) {
        return props.cell.formattedValue.replace(/^[^a-zA-Z]+/, '');
    }

    return props.cell.formattedValue;
});

const toggleSeeAll = () => {
    seeAll.value = !seeAll.value;
};
</script>