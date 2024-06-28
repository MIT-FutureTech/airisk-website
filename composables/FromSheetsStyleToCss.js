export const FromSheetsStyleToCss= (obj) => {
    const cssRules = [];
    const defaultColor = { red: 0, green: 0, blue: 0 };
    const rgbToCss = (color) => `rgb(${Math.round(color.red * 255)}, ${Math.round(color.green * 255)}, ${Math.round(color.blue * 255)})`;

    // Helper function to add CSS rules
    const addCssRule = (property, value) => {
        if (value) cssRules.push(`${property}: ${value};`);
    };

    // Background Color
    if (obj.backgroundColor) {
        const bg = Object.keys(obj.backgroundColor).length ? obj.backgroundColor : defaultColor;
        addCssRule('background-color', rgbToCss(bg));
    }

    // Padding
    if (obj.padding) {
        const { top, right, bottom, left } = obj.padding;
        addCssRule('padding', `${top}px ${right}px ${bottom}px ${left}px`);
    }

    // Text Alignment
    if (obj.horizontalAlignment) {
        addCssRule('text-align', obj.horizontalAlignment.toLowerCase());
    }

    if (obj.verticalAlignment) {
        const vaMap = {
            "TOP": "flex-start",
            "MIDDLE": "center",
            "BOTTOM": "flex-end"
        };
        addCssRule('align-items', vaMap[obj.verticalAlignment]);
    }

    // Wrap Strategy
    if (obj.wrapStrategy) {
        const wsMap = {
            "OVERFLOW": "nowrap",
            "WRAP": "normal"
        };
        addCssRule('white-space', wsMap[obj.wrapStrategy]);
    }

    // Borders
    if (obj.borders) {
        const sides = ['top', 'left', 'bottom', 'right'];
        sides.forEach(side => {
            if (obj.borders[side]) {
                const { style, width, colorStyle } = obj.borders[side];
                if (style && width) {
                    addCssRule(`border-${side}`, `${width}px ${style.toLowerCase()}`);
                }
                if (colorStyle && colorStyle.rgbColor) {
                    addCssRule(`border-${side}-color`, rgbToCss(colorStyle.rgbColor));
                }
            }
        });
    }

    // Text Format
    if (obj.textFormat) {
        const { foregroundColor = {}, fontFamily, fontSize, bold, italic, strikethrough, underline } = obj.textFormat;
        const fg = Object.keys(foregroundColor).length ? foregroundColor : defaultColor;
        addCssRule('color', rgbToCss(fg));
        addCssRule('font-family', fontFamily && `'${fontFamily}'`);
        addCssRule('font-size', fontSize && `${fontSize}px`);
        addCssRule('font-weight', bold && 'bold');
        addCssRule('font-style', italic && 'italic');
        addCssRule('text-decoration', strikethrough ? 'line-through' : (underline && 'underline'));
    }

    // Text Rotation
    if (obj.textRotation && obj.textRotation.vertical) {
        addCssRule('writing-mode', 'vertical-rl');
    }

    // Hyperlink Display Type
    if (obj.hyperlinkDisplayType === "PLAIN_TEXT") {
        addCssRule('text-decoration', 'none');
    }

    return cssRules.join(' ');
}