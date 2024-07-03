<template>
    <component :data="data" v-if="Object.keys(TableComponents).includes(data.table_name)" :is="TableComponents[data.table_name]" />
    <div v-else class="mt-8 bg-gray-500 h-96">
        {{ data }} is not supported yet. {{ Object.keys(TableComponents)}}
    </div>
</template>

<script setup>

defineProps({
    data: {
        type: Object,
        required: true,
    },
});

const TableComponents = {
    'AI Risk Database v0.1': resolveComponent('TableAIRiskDatabase'),
    'Causal Taxonomy of AI Risks v0.1': resolveComponent('TableCausalTaxonomy'),
    'Domain Taxonomy of AI Risks v0.1': resolveComponent('TableDomainTaxonomy'),
    'Causal Taxonomy statistics': resolveComponent('TableCausalTaxonomyStatics'),
    'Causal Taxonomy statistics overleap': resolveComponent('TableCausalTaxonomyStaticsTwo'),
    'Domain Taxonomy statistics': resolveComponent('TableDomainTaxonomyStatistics'),
    'Causal x Domain Taxonomy comparison': resolveComponent('TableCausalxDomainTaxonomy'),
    'Domain Taxonomy resource mapping': resolveComponent('TableDomainTaxonomyResourceMapping'),
    'Included resources': resolveComponent('TableIncludedResources'),
    'Resources being considered': resolveComponent('TableResourcesBeingConsidered'),
};  

</script>