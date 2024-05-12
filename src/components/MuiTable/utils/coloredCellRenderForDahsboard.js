import React from 'react';

const coloredCellRender = (value, tableMeta, updateValue) => {
    console.log(tableMeta,'COLOR_CODE')
    const lastIndex = tableMeta.rowData.length -1
    const cellColor = tableMeta.rowData[lastIndex] ? tableMeta.rowData[lastIndex] : null
    return (
        <div style={{ backgroundColor: cellColor }}>{value}</div>
    )
}

export default coloredCellRender;
