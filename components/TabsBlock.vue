<template>

  <TabGroup class=" md:block w-full mt-8" as="div">
    <TabList class="w-full flex flex-wrap justify-between">
      <Tab as="template" v-slot="{ selected }" v-for="tab in data.tabs_items" :key="tab.id">
        <button class="outline-none pb-2 flex-1 text-xl border-b-2 " :class="{
          'text-[#A32035]  border-[#A32035]': selected,
          'text-[#898A8D] border-[#898A8D]': !selected
        }">
          {{ tab.item.title }} </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel v-for="tab in data.tabs_items" :key="tab.id">
        <TabItemBlock :data="tab.item" />
      </TabPanel>
    </TabPanels>
  </TabGroup>

</template>


<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const selectedTab = ref(0)

function changeTab(index) {
  selectedTab.value = index
}

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