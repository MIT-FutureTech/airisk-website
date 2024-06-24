<template>
    <div>
        <Header />
        <Hero />
        <KeyInsightsAndArtifacts />
        <AIRiskDatabase />
        <TaxonomyOfAIRisk />
        <KeyInsights />
        <HowToUseTheIndex />
        <FAQ />
        <Feedback />
        <About />
        <NextSteps />
        <Team />
        <Acknowledgments />
        <Footer />
    </div>
</template>

<script setup>
useHead({
    title: 'Ai Risk',
    meta: [
        {
            name: 'description', content: 'The AI Risk Index will serve as a foundation for a more coordinated, coherent, and complete approach to defining, auditing, and managing the risks posed by AI systems' }
    ],
    htmlAttrs: {
        lang: 'en',
    },
})

</script>

<style>
html {
    scroll-behavior: smooth;    
}
</style>