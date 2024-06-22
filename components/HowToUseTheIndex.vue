<template>
    <div class="bg-[#FAFAFA] scroll-mt-28" id="how-to-use-the-index">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                How to use the index </h2>

            <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                Individuals interested in a particular type of risk can use our database to easily understand the state
                of the art in discussion of that risk across the included reports and articles. For instance, they can
                quickly identify the core literature on any relevant risk domain (e.g., pre-deployment risk from AI or
                centralization of power).
            </p>
            <p class="mt-8 text-base sm:text-xl text-gray-[#1A1A1A]">
                By using our taxonomies, they can comprehensively understand the variety of ways in which risks have
                been conceptualized and examined. For instance, they can understand that biased AI has sub-risks (e.g.,
                the risk that AI is trained on biased data pre-deployment, or that we deploy a biased AI). We next
                discuss examples of potential use cases for specific audiences. </p>
            <div class="mt-8">

                <Disclosure as="div" class="border-y" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between px-4 py-4 hover:bg-gray-100">
                        <span class="text-xl">Policymakers</span>
                        <Icon v-if="!open" name="heroicons:plus" class="h-5 w-5 " />
                        <Icon v-else name="heroicons:minus" class="h-5 w-5 " />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pb-8 pt-4 text-lg text-gray-500">
                        The AI risk classification database and frameworks may provide indispensable resources for
                        C-suite executives, HR directors, and risk managers, crucial for developing comprehensive and
                        up-to-date risk mitigation frameworks, optimizing hiring and recruitment strategies, and
                        formulating robust organizational policies.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="border-y" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between px-4 py-4 hover:bg-gray-100">
                        <span class="text-xl">Risk evaluation professionals</span>
                        <Icon v-if="!open" name="heroicons:plus" class="h-5 w-5 " />
                        <Icon v-else name="heroicons:minus" class="h-5 w-5 " />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pb-8 pt-4 text-lg text-gray-500">
                        The AI risk classification database and frameworks may provide indispensable resources for
                        C-suite executives, HR directors, and risk managers, crucial for developing comprehensive and
                        up-to-date risk mitigation frameworks, optimizing hiring and recruitment strategies, and
                        formulating robust organizational policies.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="border-y" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between px-4 py-4 hover:bg-gray-100">
                        <span class="text-xl">Academics</span>
                        <Icon v-if="!open" name="heroicons:plus" class="h-5 w-5 " />
                        <Icon v-else name="heroicons:minus" class="h-5 w-5 " />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pb-8 pt-4 text-lg text-gray-500">
                        The AI risk classification database and frameworks may provide indispensable resources for
                        C-suite executives, HR directors, and risk managers, crucial for developing comprehensive and
                        up-to-date risk mitigation frameworks, optimizing hiring and recruitment strategies, and
                        formulating robust organizational policies.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" class="border-y" v-slot="{ open }">
                    <DisclosureButton
                        class="flex w-full justify-between px-4 py-4 hover:bg-gray-100">
                        <span class="text-xl">Other decision makers</span>
                        <Icon v-if="!open" name="heroicons:plus" class="h-5 w-5 " />
                        <Icon v-else name="heroicons:minus" class="h-5 w-5 " />
                    </DisclosureButton>
                    <DisclosurePanel class="px-4 pb-8 pt-4 text-lg text-gray-500">
                        The AI risk classification database and frameworks may provide indispensable resources for
                        C-suite executives, HR directors, and risk managers, crucial for developing comprehensive and
                        up-to-date risk mitigation frameworks, optimizing hiring and recruitment strategies, and
                        formulating robust organizational policies.
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </div>
    </div>
</template>


<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/vue'
</script>