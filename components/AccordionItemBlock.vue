<template>
    <Disclosure as="div" class="border-y" v-slot="{ open }">
        <DisclosureButton class="flex w-full justify-between px-4 py-4 hover:bg-gray-100">
            <span class="text-xl text-left">{{data.item.title}}</span>
            <Icon v-if="!open" name="heroicons:plus" class="h-5 w-5 " />
            <Icon v-else name="heroicons:minus" class="h-5 w-5 " />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pb-8 pt-4 text-lg text-gray-500">
            <component :is="blockMap[block.collection]" v-for="(block,index) in data.item.content" :key="block.id" :index="index" :data="block.item" />
        </DisclosurePanel>
    </Disclosure>
   
</template>


<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
const props = defineProps({
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