<template>
  <div class="flex itenm-center justify-center mt-8 overflow-auto">
    <table class="table table-striped table-bordered w-[60%] h-[80%]">
      <tbody>
        <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData" :key="rowIndex">
          <tr>
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

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: "B11:E41",
});

const tabName = "Domain Taxonomy statistics";
const range = `'${tabName}'!${props.cellRange}`;
const baseStart = Number(props.cellRange.split(":")[0].replace(/^[a-z]+/i, ""));

const { data } = await useFetch(
  `${process.env.SHEETS_BASE_URL}/${process.env.SPREADSHEET_ID}?key=${process.env.API_KEY}&ranges=${range}&includeGridData=${process.env.includeGridData}`
);
</script>
