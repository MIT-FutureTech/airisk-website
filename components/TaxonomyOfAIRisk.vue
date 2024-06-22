<template>
    <div class="bg-[#FAFAFA]   scroll-mt-28" id="taxonomy-of-ai-risk">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Taxonomy of AI risk
            </h2>
            <TabGroup class="w-full mt-8" as="div">
                <TabList class="w-full flex flex-wrap justify-between">
                    <Tab as="template" v-slot="{ selected }">
                        <button class="outline-none pb-2 flex-1 text-xl border-b-2 " :class="{
                            'text-[#A32035]  border-[#A32035]': selected,
                            'text-[#898A8D] border-[#898A8D]': !selected
                        }">
                            High-level Causal
                        </button>

                    </Tab>

                    <Tab as="template" v-slot="{ selected }">
                        <button class="outline-none pb-2 flex-1 text-xl border-b-2 " :class="{
                            'text-[#A32035]  border-[#A32035]': selected,
                            'text-[#898A8D] border-[#898A8D]': !selected
                        }">
                            Mid-level Domain
                        </button>

                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            High-level Causal Taxonomy of AI risk
                        </h2>
                        <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                            The high-level taxonomy provides a simple way to cluster risks into one of 27
                            categories, based on the entity, intentionality and timing specified. The categories
                            were developed by repeatedly testing, and improving, a well-known high-level taxonomy
                            (Yampolskiy, 2016).
                        </p>
                        <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                            The high-level taxonomy makes it possible to use our database to, for instance, identify
                            all mentions of risks which are presented as occurring pre-deployment or
                            post-deployment, intentionally or unintentionally, and caused by AI or by humans, or any
                            combination thereof. 
                        </p>
                        <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                            It also provides a way to break ambiguous risks (e.g., biased AI) into parts (e.g., the
                            risk that AI is trained on biased data pre-deployment, or that we deploy a biased AI).
                            Here is the current version of the taxonomy.
                        </p>
                        <div class="mt-8 bg-gray-500 h-96">

                            High-level Causal Taxonomy Table
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 class="mt-8 text-2xl font-medium tracking-tight text-gray-900">
                            Mid-level Domain Taxonomy of AI risk
                        </h2>
                        <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                            The mid-level taxonomy provides a more focused breakdown of risk. The categories are
                            being developed by coding all risks against the categories within a well known taxonomy
                            (Weidinger, 2022) then adding new categories from other taxonomies to capture the risks
                            missed.
                        </p>
                        <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                            The mid-level taxonomy makes it possible to use our database to, for instance, identify
                            all mentions of risks related to Discrimination, Offensive content, and Exclusion or
                            sub-categories, and the sources from which they originate.
                        </p>
                        <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                            It therefore provides a way to understand different versions of such risks, for
                            instance, to determine if they are presented as occurring pre-deployment or
                            post-deployment, intentionally or unintentionally, or caused by AI or by humans, or any
                            combination thereof.
                        </p>
                        <div class="mt-8 bg-gray-500 h-96">

                            Mid-level Domain Taxonomy Table
                        </div>
                    </TabPanel>
                </TabPanels>
            </TabGroup>


        </div>
    </div>
</template>


<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

</script>