<template>
  <div class="mt-8 ">
    <input type="text" 
    v-model="searchTerm"
    placeholder="Search" 
    class="w-full sm:w-1/4 mt-2 mx-auto border-2 border-[#A32035] rounded-lg p-2 outline-none" />
  <div class="mt-2 overflow-auto h-[70vh] text-xs">

      <table class=" relative w-full">
        <thead class="p-1 sticky top-0 z-10">
          <tr class="bg-black">

            <th class="text-white  text-left py-2 px-4 border-l  sticky top-0 z-10"
              v-for="header in filteredSupertitles" :key="header.key" :colspan="header.columnsSpan">

              {{ header.key }}


            </th>
          </tr>
          <tr class="bg-[#FCB3B3] text-left ">
            <th class="px-2 py-1" v-for="header in filteredHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in filteredRows" :key="rowIndex"
            :class="rowIndex % 2 === 0 ? 'bg-gray-100' : ''">
            <td class="px-2 py-1 max-w-80 " v-for="header in filteredHeaders" :key="header">
              {{ row[header] || '-' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const hiddenHeaders = [
  'QuickRef', 'Ev_ID', 'Paper_ID', 'Cat_ID', 'SubCat_ID', 'AddEv_ID',
  'Additional ev.', 'P.Def', 'p.AddEv', 'Description'
];

const superTitles = {
  'AI Risk Database': [
    'Title',
    'QuickRef',
    'Ev_ID',
    'Paper_ID',
    'Cat_ID',
    'SubCat_ID',
    'AddEv_ID',
    'Category level',
    'Risk category',
    'Risk subcategory',
    'Description',
    'Additional ev.',
    'P.Def',
    'p.AddEv',
  ],
  'High-level Causal Taxonomy': [
    'Entity',
    'Intent',
    'Timing',
  ],
  "Mid-level Domain Taxonomy": [
    'Domain',
    'Sub-domain',
  ]
}

const { data } = await useFetch('/api/get-table?tabName=AI%20Risk%20Database%20v0.1&cellRange=A2:S');
const visibleRows = ref(100);

const filteredHeaders = computed(() => {
  return data.value.headers.filter(header => !hiddenHeaders.includes(header));
});

const filteredSupertitles = computed(() => {
  return Object.keys(superTitles).map(key => {
    const columnsSpan = superTitles[key].filter(header => !hiddenHeaders.includes(header)).length;
    return {
      key,
      columnsSpan
    }
  }
  )
});

onMounted(() => {
  const tableContainer = document.querySelector('.overflow-auto');
  tableContainer.addEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const tableContainer = document.querySelector('.overflow-auto');
  const scrollTop = tableContainer.scrollTop;
  const newVisibleRows = Math.ceil(scrollTop / 40) + 100; // 40 is an estimate of row height
  if (newVisibleRows > visibleRows.value) {
    visibleRows.value = newVisibleRows;
  }
};

const searchTerm = ref('');

const filteredRows = computed(() => {
  if (searchTerm.value === '') {
    return data.value.values.slice(0, visibleRows.value);
  }
  const searchTermLowerCase = searchTerm.value.toLowerCase();
  return data.value.values.filter(row => {
    return Object.values(row).some(value => value.toLowerCase().includes(searchTermLowerCase));
  });
});
</script>
