import React from 'react';

const coloredCellRender = (value, tableMeta, updateValue) => {
    const columnIndex = tableMeta.columnIndex
    const cellColor = tableMeta.rowData[columnIndex + 1] ? tableMeta.rowData[columnIndex + 1] : "#fff"
    return (
        <div style={{ backgroundColor: cellColor }}>{value}</div>
    )
}

export default coloredCellRender;