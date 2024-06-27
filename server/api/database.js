const columns = [
  { value: "Title", index: 0 },
  { value: "Quick Reference", index: 1 },
  { value: "Category level", index: 7 },
  { value: "Risk category", index: 8 },
  { value: "Risk subcategory", index: 9 },
  { value: "Description", index: 10 },
  { value: "Additional Evaluations", index: 11 },
  { value: "Entity", index: 14 },
  { value: "Intent", index: 15 },
  { value: "Timing", index: 16 },
  { value: "Domain", index: 17 },
  { value: "Sub-domain", index: 18 },
];

const tractableColumns = ["Entity", "Intent", "Timing", "Domain", "Sub-domain"];

const cleanData = (rows) => {
  return rows.map((item) => {
    const replacedItem = { ...item };

    if (replacedItem["Risk category"]) {
      replacedItem["Risk category"] = replacedItem["Risk category"].replace(
        /^Type \d+(\.\d+)?: /,
        ""
      );
    }

    tractableColumns.forEach((key) => {
      if (replacedItem[key]) {
        replacedItem[key] = replacedItem[key].replace(/^[^a-zA-Z]+/, "");
      }
    });

    return replacedItem;
  });
};

export default defineEventHandler(async () => {
  return cleanData(
    await connectToSpreadSheet("AI Risk Database v0.1", columns)
  );
});
