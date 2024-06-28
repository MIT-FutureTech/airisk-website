<template>
    <div class="mt-8 overflow-auto">
        <table class="table table-striped table-bordered ">
            <tbody>
                <template v-for="(row, rowIndex) in data.sheets[0].data[0].rowData.slice(0, 100)" :key="rowIndex">

                    <tr>
                        <template v-for="(cell, colIndex) in row.values" :key="colIndex">
                            <td 
                            v-if="shouldDisplayCell(rowIndex+1, colIndex)"
                            :style="mapObjectToCSS(cell.effectiveFormat)" :rowspan="getRowSpan(rowIndex, colIndex)"
                                :colspan="getColumnSpan(rowIndex, colIndex)">
                                <Cell :cell="cell" />
                            </td>
                        </template>
                    </tr>
                </template>
            </tbody>
        </table>

    </div>
</template>

<script setup>

const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets'
const spreadsheetId = '1evwjF4XmpykycpeZFq0FUteEAt7awx2i2oE6kMrV_xE'
const range = "'AI Risk Database v0.1'!A2:S"
const includeGridData = true
const key = 'AIzaSyDJZ56R-7j6imFkvj6s_QOWLEkugYRF5Zc'
console.log(`${baseURL}/${spreadsheetId}?key=${key}&ranges=${range}&includeGridData=true`)

const { data } = await useFetch(`${baseURL}/${spreadsheetId}?key=${key}&ranges=${range}&includeGridData=true`)
console.log(data)

function mapObjectToCSS(obj) {
    const cssRules = [];

    const defaultColor = { red: 0, green: 0, blue: 0 };

    if (obj.backgroundColor) {
        const bg = Object.keys(obj.backgroundColor).length ? obj.backgroundColor : defaultColor;
        cssRules.push(`background-color: rgb(${Math.round(bg.red * 255)}, ${Math.round(bg.green * 255)}, ${Math.round(bg.blue * 255)});`);
    }

    if (obj.padding) {
        const padding = obj.padding;
        cssRules.push(`padding: ${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px;`);
    }

    if (obj.horizontalAlignment) {
        cssRules.push(`text-align: ${obj.horizontalAlignment.toLowerCase()};`);
    }

    if (obj.verticalAlignment) {
        const vaMap = {
            "TOP": "flex-start",
            "MIDDLE": "center",
            "BOTTOM": "flex-end"
        };
        cssRules.push(`align-items: ${vaMap[obj.verticalAlignment]};`);
    }

    if (obj.wrapStrategy) {
        const wsMap = {
            "OVERFLOW": "nowrap",
            "WRAP": "normal"
        };
        cssRules.push(`white-space: ${wsMap[obj.wrapStrategy]};`);
    }

    if (obj.textFormat) {
        const tf = obj.textFormat;
        const fg = Object.keys(tf.foregroundColor || {}).length ? tf.foregroundColor : defaultColor;
        cssRules.push(`color: rgb(${Math.round(fg.red * 255)}, ${Math.round(fg.green * 255)}, ${Math.round(fg.blue * 255)});`);

        if (tf.fontFamily) {
            cssRules.push(`font-family: '${tf.fontFamily}';`);
        }
        if (tf.fontSize) {
            cssRules.push(`font-size: ${tf.fontSize}px;`);
        }
        if (tf.bold) {
            cssRules.push('font-weight: bold;');
        }
        if (tf.italic) {
            cssRules.push('font-style: italic;');
        }
        if (tf.strikethrough) {
            cssRules.push('text-decoration: line-through;');
        }
        if (tf.underline) {
            cssRules.push('text-decoration: underline;');
        }
    }

    if (obj.textRotation && obj.textRotation.vertical) {
        cssRules.push('writing-mode: vertical-rl;');
    }

    if (obj.hyperlinkDisplayType === "PLAIN_TEXT") {
        cssRules.push('text-decoration: none;');
    }

    return cssRules.join(' ');
}

function getRowSpan(rowIndex, colIndex) {
    const mergesCells = data.value.sheets[0].merges;
    const merges = mergesCells.filter(merge => merge.startRowIndex === (rowIndex + 1) && merge.startColumnIndex === colIndex);
    if (merges.length === 0) {
        return 1
    }
    return merges[0].endRowIndex - merges[0].startRowIndex
}

function getColumnSpan(rowIndex, colIndex) {
    const mergesCells = data.value.sheets[0].merges;
    const merges = mergesCells.filter(merge => merge.startRowIndex === (rowIndex + 1) && merge.startColumnIndex === colIndex);
    if (merges.length === 0) {
        return 1
    }
    return merges[0].endColumnIndex - merges[0].startColumnIndex
}


function shouldDisplayCell(rowIndex, colIndex) { 
    const merges = data.value.sheets[0].merges;
    const columnGroups = data.value.sheets[0].columnGroups;
    // Check if the cell is within any merged range
    
    for (const merge of merges) {
        if (
            rowIndex >= merge.startRowIndex &&
            rowIndex < merge.endRowIndex &&
            colIndex > merge.startColumnIndex &&
            colIndex < merge.endColumnIndex
        ) {
            return false; // Cell is within a merged range
        }
    }

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

    return true; // Cell should be displayed
}

</script>