<template>
    <div class="relative mt-32  scroll-mt-28" id="home">
        <div class=" bg-radial-hero z-10 relative h-full w-full flex flex-col justify-center items-center">
            <div
                class=" py-16 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center items-center max-w-7xl rounded-2xl  border-[#464646] border-opacity-20 ">
                <h1 class="bg-radial-hero text-4xl sm:text-6xl font-bold text-center max-w-screen-md text-[#464646]">
                    We are creating a comprehensive index of risks</h1>
                <h2 class="bg-radial-hero text-lg sm:text-2xl text-center max-w-screen-lg mt-16 font-light">
                    The AI Risk Index will serve as a foundation for a more coordinated, coherent, and complete
                    approach to defining, auditing, and managing the risks posed by AI systems.</h2>

                <div class="flex flex-col gap-8 md:gap-32 md:flex-row mt-16">
                    <a href="https://docs.google.com/document/d/1zwhVJrUl6Ht7N0bWtEohiHknTTFiexkmIHOnHzCpbq4/edit" target="_blank" aria-label="Read paper" >
                        <button
                            class="py-4 w-64 cursor-pointer text-lg bg-[#A32035] rounded-lg text-white shadow-md flex items-center justify-center gap-2">
                            <Icon name="material-symbols:lab-profile-outline" class="w-6 h-6" />
                            Read Paper
                            
                        </button>
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1evwjF4XmpykycpeZFq0FUteEAt7awx2i2oE6kMrV_xE/edit#gid=697017607" target="_blank", aria-label="See Database">
                        <button
                            class="py-4 w-64 cursor-pointer text-lg text-[#A32035] border border-gray-100  rounded-lg bg-white shadow-md flex items-center justify-center gap-2">See
                            Database</button>
                    </a>
                </div>
            </div>
        </div>
        <Particles class="top-0 z-0 absolute h-full w-full" />
    </div>
</template>

<style scoped>
.bg-radial-hero {
    background: radial-gradient(#fff 50%, transparent);

}
</style>