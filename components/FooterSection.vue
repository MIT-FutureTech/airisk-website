<template>
    <div>
        <Particles id="footer-particles" class="h-16" />
        <footer class="bg-[#1A1A1A] text-white  py-4 px-4 border-t-8 border-[#A32035]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  py-8">
                <div>
                    <div class="text-3xl sm:text-5xl font-medium leading-10">
                        AI Risk <span class="text-[#A32035]">Repository</span>
                    </div>
                    <div class="text-[11px] sm:text-sm tracking-wider font-light">
                        A Comprehensive Framework of Risks from AI Systems
                    </div>
                </div>

                <div class="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 grid-flow-row">  
                    <div v-for="link in links" :key="link.name">
                        <NuxtLink as="a" class="text-sm py-2 px-2 cursor-pointer font-light hover:text-[#A32035]" :to="link.href">{{ link.name }}</NuxtLink>
                    </div>
                    <a class="text-sm py-2 px-2 cursor-pointer font-light hover:text-[#A32035]" href="https://accessibility.mit.edu/" target="_blank" aria-label="MIT Acessability">
                        Accessibility
                    </a>
                </div>  
        
                <div class="border-t-2 border-gray-500 mt-16 pt-8">
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-4">
                            <div class="text-sm">
                                © {{ new Date().getFullYear() }} MIT AI Risk Repository
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </footer>
    </div>
</template>

<script setup>
const links = [
    { "name": 'Overview', "href": '/#' + "Repository Overview".toLowerCase().replaceAll(' ', '-'), "aria-label": "Repository Overview"},
    { "name": 'AI Risk Database', "href": '/#' + "AI Risk Database".toLowerCase().replaceAll(' ', '-'), "aria-label": "AI Risk Database"},
    { "name": 'Causal Taxonomy', "href": '/#' + "Causal Taxonomy of AI Risks".toLowerCase().replaceAll(' ', '-'), "aria-label": "Causal Taxonomy of AI Risks"},
    { "name": 'Domain Taxonomy', "href": '/#' + "Domain Taxonomy of AI Risks".toLowerCase().replaceAll(' ', '-'), "aria-label": "Domain Taxonomy of AI Risks"},
    { "name": 'How to use', "href": '/#' + "How to use the AI Risks Repository".toLowerCase().replaceAll(' ', '-'), "aria-label": "How to use the AI Risks Repository"},
    { "name": 'FAQ', "href": '/#' + "Frequently Asked Questions ".toLowerCase().replaceAll(' ', '-'), "aria-label": "Frequently Asked Questions"},
]

</script>