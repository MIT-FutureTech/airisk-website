<template>
  <div class="mt-8 overflow-auto h-[70vh]">
    <table class="table table-striped table-bordered">
      <tbody>
        <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData" :key="rowIndex">
          <tr>
            <template v-for="(cell, colIndex) in row.values" :key="colIndex">
              <td v-if="
                !data.sheets[0].data[0].rowMetadata[rowIndex]
                  .hiddenByFilter &&
                shouldDisplayCell(
                  rowIndex + 1,
                  colIndex,
                  merges,
                  columnGroups
                )
              " :style="FromSheetsStyleToCss(cell.effectiveFormat)"
                :rowspan="getRowSpan(rowIndex, colIndex, mergesCells)"
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

<script setup lang="ts">
import { FromSheetsStyleToCss } from "../../composables/FromSheetsStyleToCss";
import {
  getRowSpan,
  getColumnSpan,
  shouldDisplayCell,
} from "../../composables/SpanControll.js";
const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: "A2:S",
  });
  
  const tabName = "AI Risk Database v0.1";
  const range = `'${tabName}'!${props.cellRange}`;
  
const config = useRuntimeConfig();

const { data } = await useFetch(
  `${config.public.sheetsBaseUrl}/${config.public.spreadsheetId}?key=${config.public.apiKey}&ranges=${range}&includeGridData=${config.public.includeGridData}`
);

const mergesCells = ref(data.value.sheets[0].merges);
const merges = ref(data.value.sheets[0].merges);
const columnGroups = ref(data.value.sheets[0].columnGroups);
</script>
