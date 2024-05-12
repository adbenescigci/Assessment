import React from 'react';

const coloredCellRender = (value, tableMeta, updateValue) => {
    console.log(tableMeta,'COLOR_CODE')
    const background= tableMeta.rowIndex % 2 === 0 ? '#EEEEEE': 'white'
    return (
        <div style={{
            position: "sticky",
            left: 0,
            background: background,
            zIndex: 200
        }}>{value}</div>
    )
}

export default coloredCellRender;
