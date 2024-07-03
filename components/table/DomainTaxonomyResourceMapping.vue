<template>
  <div class="flex item-center justify-center">
    <table class="table table-striped table-bordered w-full h-[70vh]">
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

<script setup lang="ts">
import { useFetch } from "nuxt/app";
import { FromSheetsStyleToCss } from "../../composables/FromSheetsStyleToCss.js";

const props = withDefaults(defineProps<{ cellRange: string }>(), {
  cellRange: "B11:J55",
});

const tabName = "Domain Taxonomy resource mapping";
const range = `'${tabName}'!${props.cellRange}`;

const config = useRuntimeConfig();

const { data } = await useFetch(
  `${config.public.sheetsBaseUrl}/${config.public.spreadsheetId}?key=${config.public.apiKey}&ranges=${range}&includeGridData=${config.public.includeGridData}`
);

</script>
