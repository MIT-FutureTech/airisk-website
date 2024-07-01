export const getRowSpan = (rowIndex, colIndex, mergesCells) => {
    const merges = mergesCells.filter(merge => merge.startRowIndex === (rowIndex + 1) && merge.startColumnIndex === colIndex);
    if (merges.length === 0) {
        return 1
    }
    return merges[0].endRowIndex - merges[0].startRowIndex
}

export const getColumnSpan = (rowIndex, colIndex, mergesCells) => {
    const merges = mergesCells.filter(merge => merge.startRowIndex === (rowIndex + 1) && merge.startColumnIndex === colIndex);
    if (merges.length === 0) {
        return 1
    }
    return merges[0].endColumnIndex - merges[0].startColumnIndex
}

export const shouldDisplayCell = (rowIndex, colIndex, merges, columnGroups) => {
    // Check if the cell is within any merged range
    if (merges) {

        for (const merge of merges) {
            if (
                (
                    rowIndex >= merge.startRowIndex &&
                rowIndex < merge.endRowIndex &&
                colIndex > merge.startColumnIndex &&
                colIndex < merge.endColumnIndex)
                || (
                    rowIndex > merge.startRowIndex &&
                rowIndex < merge.endRowIndex &&
                colIndex >= merge.startColumnIndex &&
                colIndex < merge.endColumnIndex)
            ) {
                return false; // Cell is within a merged range
            }
        }
    }
    if (columnGroups) {
    // Check if the cell's column is within any collapsed column group
    for (const group of columnGroups) {
        if (
            group.range.dimension === "COLUMNS" &&
            colIndex >= group.range.startIndex &&
            colIndex < group.range.endIndex &&
            group.collapsed
        ) {
            return false; // Cell's column is within a collapsed column group
        }
    }
}

    return true; // Cell should be displayed
}