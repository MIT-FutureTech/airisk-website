<template>
    <div class="bg-white   scroll-mt-28" id="key-insights">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Key insights </h2>
            <TabGroup class="hidden md:block w-full mt-8" as="div">
                <TabList class="w-full flex flex-wrap justify-between">
                    <Tab as="template" v-slot="{ selected }">
                        <button class="outline-none pb-2 flex-1 text-xl border-b-2 " :class="{
                            'text-[#A32035]  border-[#A32035]': selected,
                            'text-[#898A8D] border-[#898A8D]': !selected
                        }">
                            Risk casual factors </button>

                    </Tab>

                    <Tab as="template" v-slot="{ selected }">
                        <button class="outline-none pb-2 flex-1 text-xl border-b-2 " :class="{
                            'text-[#A32035]  border-[#A32035]': selected,
                            'text-[#898A8D] border-[#898A8D]': !selected
                        }">
                            Distribution of causal risks </button>

                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <button class="outline-none pb-2 flex-1 text-xl border-b-2 " :class="{
                            'text-[#A32035]  border-[#A32035]': selected,
                            'text-[#898A8D] border-[#898A8D]': !selected
                        }">
                            Distribution of risks across resources </button>

                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Risk casual factors </h2>
                        <div class="mt-8 bg-gray-500 h-96">

                            Risk casual factors Table
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Distribution of causal risks </h2>
                        <div class="mt-8 bg-gray-500 h-96">

                            Distribution of causal risks Table
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Distribution of risks across resources </h2>
                        <div class="mt-8 bg-gray-500 h-96">

                            Distribution of risks across resources Table
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>

            <div class="flex flex-col gap-8 md:hidden">
                <div>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Risk casual factors </h2>
                        <div class="mt-8 bg-gray-500 h-96">

                            Risk casual factors Table
                        </div>
                    </div>
                    <div>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Distribution of causal risks </h2>
                        <div class="mt-8 bg-gray-500 h-96">

                            Distribution of causal risks Table
                        </div>
                    </div>
                    <div>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Distribution of risks across resources </h2>
                        <div class="mt-8 bg-gray-500 h-96">

                            Distribution of risks across resources Table
                        </div>
                    </div>
            </div>


        </div>
    </div>
</template>


<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

const selectedTab = ref(0)

  function changeTab(index) {
    selectedTab.value = index
  }

</script>