<template>
    <div class="mt-8 overflow-auto">
        <table class="table table-striped table-bordered w-full">
            <tbody>
                <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData" :key="rowIndex">

                    <tr v-if="!data.sheets[0].data[0].rowMetadata[rowIndex].hiddenByFilter">
                        <template v-for="(cell, colIndex) in row.values" :key="colIndex">
                            <td 
                            :style="FromSheetsStyleToCss(cell.effectiveFormat)">
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
import { useFetch } from 'nuxt/app';
import { FromSheetsStyleToCss } from '../../composables/FromSheetsStyleToCss'

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: 'B11:I24'
});

const tabName = "Resources being considered"
const range = `'${tabName}'!${props.cellRange}`

const { data } = await useFetch(
    `${process.env.SHEETS_BASE_URL}/${process.env.SPREADSHEET_ID}?key=${process.env.API_KEY}&ranges=${range}&includeGridData=${process.env.includeGridData}`
);

</script>