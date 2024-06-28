<template>
    <div class="mt-8 overflow-auto">
        <table class="table table-striped table-bordered ">
            <tbody>
                <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData.slice(0, 100)" :key="rowIndex">

                    <tr>
                        <template v-for="(cell, colIndex) in row.values" :key="colIndex">
                            <td 
                            v-if="shouldDisplayCell(rowIndex+1, colIndex, merges, columnGroups)"
                            :style="FromSheetsStyleToCss(cell.effectiveFormat)" :rowspan="getRowSpan(rowIndex, colIndex, mergesCells)"
                                :colspan="getColumnSpan(rowIndex, colIndex, mergesCells)">
                                <Cell :cell="cell" />
                            </td>
                        </template>
                    </tr>
                </template>
            </tbody>
        </table>

    </div>
</template>

<script setup>
import { FromSheetsStyleToCss } from '~/composables/FromSheetsStyleToCss'
import { getRowSpan, getColumnSpan, shouldDisplayCell } from '~/composables/SpanControll.js'

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets'
const spreadsheetId = '1evwjF4XmpykycpeZFq0FUteEAt7awx2i2oE6kMrV_xE'
const range = "'AI Risk Database v0.1'!A2:S"
const includeGridData = true
const key = 'AIzaSyDJZ56R-7j6imFkvj6s_QOWLEkugYRF5Zc'

const { data } = await useFetch(`${baseURL}/${spreadsheetId}?key=${key}&ranges=${range}&includeGridData=${includeGridData}`)

const mergesCells = ref(data.value.sheets[0].merges);
const merges = ref(data.value.sheets[0].merges);
const columnGroups = ref(data.value.sheets[0].columnGroups);

</script>