<template>
  <div class="flex itenm-center justify-center mt-8 overflow-auto">
    <table class="table table-striped table-bordered w-full">
      <tbody>
        <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData" :key="rowIndex">
          <tr v-if="!data.sheets[0].data[0].rowMetadata[rowIndex].hiddenByFilter">
            <template v-for="(cell, colIndex) in row.values" :key="colIndex">
              <td v-if="
                !data.sheets[0].data[0].rowMetadata[rowIndex]
                  .hiddenByFilter &&
                shouldDisplayCell(
                  rowIndex + (baseStart - 1),
                  colIndex + 1,
                  merges,
                  columnGroups
                )
              " :style="FromSheetsStyleToCss(cell.effectiveFormat)" :rowspan="getRowSpan(
                  rowIndex + (baseStart - 2),
                  colIndex + 1,
                  mergesCells
                )
                  " :colspan="getColumnSpan(
                  rowIndex + (baseStart - 2),
                  colIndex + 1,
                  mergesCells
                )
                  ">
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
import {
  getRowSpan,
  getColumnSpan,
  shouldDisplayCell,
} from "../../composables/SpanControll";

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: "B11:L42",
});

const baseStart = Number(props.cellRange.split(":")[0].replace(/^[a-z]+/i, ""));
const config = useRuntimeConfig();

const { data } = await useFetch('/api/get-table-with-css?tabName=Causal%20x%20Domain%20Taxonomy%20comparison&cellRange=B11:L42')

const mergesCells = ref(data.value.sheets[0].merges);
const merges = ref(data.value.sheets[0].merges);
const columnGroups = ref(data.value.sheets[0].columnGroups);
</script>

