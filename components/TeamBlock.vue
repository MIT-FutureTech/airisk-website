<template>

    <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="flex flex-col" v-for="(teamMember, index) in data.team_members" :key="index">            
            <div class="flex items-center">
                <img class="w-16 h-16 bg-[#A32035] rounded-full" v-if="teamMember.item.headshot"
                    :src="useRuntimeConfig().public.directus.url + 'assets/' + teamMember.item.headshot.id"></img>
                <div class="w-16 h-16 bg-[#A32035] rounded-full" v-else></div>
                <div class="ml-4">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">
                        {{ teamMember.item.name }} </h3>
                    <p class="mt-1 text-sm text-gray-500">
                        {{ teamMember.item.affiliation }} </p>
                </div>
            </div>

        </div>
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
