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
              " :style="FromSheetsStyleToCss(cell.effectiveFormat)">
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
import { shouldDisplayCell } from "../../composables/SpanControll";

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: "B11:F34",
});

const baseStart = Number(props.cellRange.split(":")[0].replace(/^[a-z]+/i, ""));
const config = useRuntimeConfig();

const { data } = await useFetch('/api/get-table-with-css?tabName=Domain%20Taxonomy%20of%20AI%20Risks%20v0.1&cellRange=B11:F34')

</script>
