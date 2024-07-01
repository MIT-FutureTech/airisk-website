<template>
    <div class="mt-8 overflow-auto">
        <table class="table table-striped table-bordered w-full">
            <tbody>
                <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData" :key="rowIndex">

                    <tr v-if="!data.sheets[0].data[0].rowMetadata[rowIndex].hiddenByFilter">
                        <template v-for="(cell, colIndex) in row.values" :key="colIndex">
                            <td 
                            v-if="shouldDisplayCell(rowIndex+10, colIndex + 1, merges, columnGroups)"
                            :style="FromSheetsStyleToCss(cell.effectiveFormat)" :rowspan="getRowSpan(rowIndex+9, colIndex+1, mergesCells)"
                                :colspan="getColumnSpan(rowIndex+9, colIndex +1, mergesCells)">
                                <Cell :cell="cell" />
                            </td>
                        </template>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { FromSheetsStyleToCss } from '~/composables/FromSheetsStyleToCss'
import { getRowSpan, getColumnSpan, shouldDisplayCell } from '~/composables/SpanControll.js'

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: 'B11:D20'
});

const tabName = "Causal Taxonomy of AI Risks v0.1"
const range = `'${tabName}'!${props.cellRange}`

const { data } = await useFetch(
    `${process.env.SHEETS_BASE_URL}/${process.env.SPREADSHEET_ID}?key=${process.env.API_KEY}&ranges=${range}&includeGridData=${process.env.includeGridData}`
);

const mergesCells = ref(data.value.sheets[0].merges);
const merges = ref(data.value.sheets[0].merges);
const columnGroups = ref(data.value.sheets[0].columnGroups);
</script>