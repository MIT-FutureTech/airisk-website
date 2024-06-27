import { google } from "googleapis";

const apiKey = process.env.API_KEY;
const spreadsheetId = process.env.SHEET_ID;

export const connectToSpreadSheet = async (sheetName, columnsKeys) => {
  const range = `${sheetName}!A1:ZZ`;
  const rows = await authAndFetch(range);

  if (rows.code) {
    return [];
  }

  return formatSheetResponse(rows.slice(3), columnsKeys);
};

async function authAndFetch(range) {
  try {
    const sheets = google.sheets({ version: "v4", auth: apiKey });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values;
  } catch (err) {
    return { err: err.message, code: 1 };
  }
}

const formatSheetResponse = (values, columnsKeys) => {
  return values.map((row) => {
    return columnsKeys.reduce((item, key) => {
      item[key.value] = row[key.index];
      return item;
    }, {});
  });
};