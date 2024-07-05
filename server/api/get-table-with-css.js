export default defineCachedEventHandler(async (event) => {
    const { tabName, cellRange } = getQuery(event);

    const range =`'${tabName}'!${cellRange}`;

    const config = useRuntimeConfig();

    const NUXT_PUBLIC_API_KEY = process.env.NUXT_PUBLIC_API_KEY
    const NUXT_PUBLIC_SPREADSHEET_ID = process.env.NUXT_PUBLIC_SPREADSHEET_ID
    const NUXT_PUBLIC_INCLUDE_GRID_DATA = process.env.NUXT_PUBLIC_INCLUDE_GRID_DATA
    const NUXT_PUBLIC_SHEETS_BASE_URL = process.env.NUXT_PUBLIC_SHEETS_BASE_URL

    const uri = `${NUXT_PUBLIC_SHEETS_BASE_URL}/${NUXT_PUBLIC_SPREADSHEET_ID}?key=${NUXT_PUBLIC_API_KEY}&ranges=${range}&includeGridData=${NUXT_PUBLIC_INCLUDE_GRID_DATA}`
    const url = encodeURI(uri)

    const data = await $fetch(url)

    return data;
});