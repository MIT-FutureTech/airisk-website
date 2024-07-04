export default defineCachedEventHandler(async (event) => {
    const { tabName, cellRange } = getQuery(event);

    const range = `'${tabName}'!${cellRange}`;

    const config = useRuntimeConfig();

    const NUXT_PUBLIC_API_KEY = process.env.NUXT_PUBLIC_API_KEY
    const NUXT_PUBLIC_SPREADSHEET_ID = process.env.NUXT_PUBLIC_SPREADSHEET_ID
    const NUXT_PUBLIC_INCLUDE_GRID_DATA = process.env.NUXT_PUBLIC_INCLUDE_GRID_DATA
    const NUXT_PUBLIC_SHEETS_BASE_URL = process.env.NUXT_PUBLIC_SHEETS_BASE_URL

    const data = await $fetch(
      `${NUXT_PUBLIC_SHEETS_BASE_URL}/${NUXT_PUBLIC_SPREADSHEET_ID}/values/${range}?key=${NUXT_PUBLIC_API_KEY}`
    );


    const headers = data.values[1];
    const values = data.values.slice(2).map((row, rowIndex) => {
        const rowData = {};
        row.forEach((cell, colIndex) => {
            rowData[headers[colIndex]] = cell;
        });
        return rowData;
    });

    return {
        headers,
        values,
    }
});