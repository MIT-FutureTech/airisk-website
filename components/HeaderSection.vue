<template>
    <header class="fixed w-full top-0 z-50 bg-[#1A1A1A] text-white py-4 px-4 border-b-8 border-[#A32035] transition-all">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <NuxtLink as="a" class="py-2 px-2 cursor-pointer" to="/#home">
                <div class=" font-medium leading-none transition-all min-w-max"
                    :class="consenseHeader ? 'text-3xl sm:text-3xl' : 'text-3xl  sm:text-5xl'">
                    AI Risk <span class="text-[#A32035]">Index</span>
                </div>
                <div class="leading-none  tracking-wider font-light transition-all"
                    :class="consenseHeader ? 'text-[0px] tracking-[0px] sm:text-[0px]' : 'text-[11px] sm:text-sm'">
                    A Comprehensive Framework of Risks from AI Systems
                </div>
            </NuxtLink>
            <div>
                <nav class="font-light tracking-wide hidden md:flex">
                    <ul class="flex space-x-8">
                        <li v-for="link in links" :key="link.name">
                            <NuxtLink as="a" class="py-2 px-2 cursor-pointer hover:text-[#A32035]" :to="link.href">{{ link.name }}</NuxtLink>

                        </li>

                    </ul>
                </nav>
                <button @click="toggleMenu" class="md:hidden flex items-center">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="md:hidden">
            <ul class="flex flex-col space-y-4 mt-4">
                <li v-for="link in links" :key="link.name">
                    <NuxtLink as="a" class="py-2 px-2 cursor-pointer" :to="link.href" @click="toggleMenu">{{ link.name
                        }}</NuxtLink>
                </li>

            </ul>
        </nav>
    </header>
</template>

<script setup>
const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const links = [
    { "name": 'AI Risk Database', "href": '/#ai-risk-database', "aria-label": "AI Risk Database"},
    { "name": 'Taxonomy of AI Risk', "href": '/#taxonomy-of-ai-risk', "aria-label": "Taxonomy of ai risk" },
    { "name": 'Key insights', "href": '/#key-insights', "aria-label": "Key insights" },
    { "name": 'How to use the index', "href": '/#how-to-use-the-index', "aria-label": "How to use index" },
]

const consenseHeader = ref(false);
let lastScrollY = 0;

onMounted(() => {
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 400 && !consenseHeader.value && currentScrollY > lastScrollY) {
            consenseHeader.value = true;
        } else if (currentScrollY < 200 && consenseHeader.value && currentScrollY < lastScrollY) {
            consenseHeader.value = false;
        }

        lastScrollY = currentScrollY;
    });
});




</script>