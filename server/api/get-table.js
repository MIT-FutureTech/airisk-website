export default defineCachedEventHandler(async (event) => {
    const { tabName, cellRange } = getQuery(event);

    const range = `'${tabName}'!${cellRange}`;

    const config = useRuntimeConfig();

    const data = await $fetch(
      `${config.public.sheetsBaseUrl}/${config.public.spreadsheetId}/values/${range}?key=${config.public.apiKey}`
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