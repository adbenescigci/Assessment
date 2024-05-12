import React from 'react';
import CustomToolbarSelect from '../CustomToolbarSelect';

export const tableOptions = {
    filterType: 'multiselect',
    fixedHeader: true,
    rowsPerPage: 25,
    search: false,
    customSearchRender: () => null,
    rowsPerPageOptions: [10, 25, 50, 100, 250],
    selectableRows: "none",
    selectToolbarPlacement: "above",
    //resizableColumns: true,
    setTableProps: () => {
        return {
            // material ui v4 only
            size: "small",
        };
    },
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
        <CustomToolbarSelect selectedRows={selectedRows} displayData={displayData} setSelectedRows={setSelectedRows}/>
    ),
    sortOrder: {
        name: 'interventionId',
        direction: 'desc'
    },
    downloadOptions: {
        filename: 'excel-format.csv',
        separator: ',',
        filterOptions: {
            useDisplayedColumnsOnly: false,
            useDisplayedRowsOnly: true,
        }
    },
    onDownload: (buildHead, buildBody, columns, data) => {
        return `${buildHead(columns)}${buildBody(data)}`;
    },
    textLabels: {
        body: {
            columnHeaderTooltip: column => {
               return `Sort for ${column.tooltip || column.label}`
            }
        }
    }
};
