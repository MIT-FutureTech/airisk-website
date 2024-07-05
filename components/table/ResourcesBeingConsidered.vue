<template>
  <div class="mt-8 overflow-auto">
    <table class="table table-striped table-bordered w-full">
      <tbody>
        <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData" :key="rowIndex">
          <tr v-if="!data.sheets[0].data[0].rowMetadata[rowIndex].hiddenByFilter">
            <template v-for="cell in row.values" :key="colIndex">
              <td :style="FromSheetsStyleToCss(cell.effectiveFormat)">
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
import { useFetch } from "nuxt/app";
import { FromSheetsStyleToCss } from "../../composables/FromSheetsStyleToCss";

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: "B11:I24",
});

const { data } = await useFetch('/api/get-table-with-css?tabName=Resources%20being%20considered&cellRange=B11:I24')
</script>
