<template>
    <div class="flex item-center justify-center">
        <table class="table table-striped table-bordered w-[500px] h-[500px]">
            <tbody>
                <template v-for="row in data.sheets[0].data[0].rowData.slice(0, 100)" :key="row">
                    <tr>
                        <template v-for="cell in row.values" :key="cell">
                            <td class="text-center" :style="FromSheetsStyleToCss(cell.effectiveFormat)">
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

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets'
const spreadsheetId = '1evwjF4XmpykycpeZFq0FUteEAt7awx2i2oE6kMrV_xE'
const range = "'Causal Taxonomy of AI Risks v0.1'!B11:D20"
const includeGridData = true
const key = 'AIzaSyDJZ56R-7j6imFkvj6s_QOWLEkugYRF5Zc'

const { data } = await useFetch(`${baseURL}/${spreadsheetId}?key=${key}&ranges=${range}&includeGridData=${includeGridData}`);
</script>