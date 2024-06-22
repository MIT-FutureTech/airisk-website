<template>
    <div class="bg-white   scroll-mt-28" id="team">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
                Team </h2>

            <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col" v-for="(teamMember, index) in team" :key="index">
                    <div class="flex items-center">
                        <div class="w-16 h-16 bg-[#A32035] rounded-full"></div>
                        <div class="ml-4">
                            <h3 class="text-lg font-medium leading-6 text-gray-900">
                                {{ teamMember.name }} </h3>
                            <p class="mt-1 text-sm text-gray-500">
                                {{ teamMember.affiliation }} </p>
                        </div>
                    </div>

                </div>
               
            </div>


        </div>
    </div>
</template>

<script setup>

const team = [
    {
        name: "Peter Slattery",
        affiliation: "MIT Futuretech",
        Image: "/images/team/peter.png"
    },
    {
        name: "Alexander K. Saeri",
        affiliation: "",
        Image: "/images/team/alexander.png"
    },
    {
        name: "Emily A. C. Grundy",
        affiliation: "MIT Futuretech",
        Image: "/images/team/emily.png"
    },
    {
        name: "Jess Graham",
        affiliation: "",
        Image: "/images/team/jess.png"
    },
    {
        name: "Michael Noetel",
        affiliation: "",
        Image: "/images/team/michael.png"
    },
    {
        name: "Risto Uuk",
        affiliation: "",
        Image: "/images/team/risto.png"
    },
    {
        name: "James Dao",
        affiliation: "",
        Image: "/images/team/james.png"
    },
    {
        name: "Soroush Pour",
        affiliation: "",
        Image: "/images/team/soroush.png"
    },
    {
        name: "Stephen Casper",
        affiliation: "",        
        Image: "/images/team/stephen.png"
    },
    {
        name: "Neil Thompson",
        affiliation: "MIT Futuretech",
        Image: "/images/team/neil.png"
    }   
    
]
</script>






