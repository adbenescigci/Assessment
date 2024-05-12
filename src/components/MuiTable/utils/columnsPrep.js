import TableHeaders from "./headerVariables"

export function columnsPrep(tableData, customFilterValue) {
    const filteredColumnName = customFilterValue && customFilterValue.name
  
    const tableColumns = []
    TableHeaders.forEach(header =>
        Object.keys(tableData[0]).forEach(dataKey => {
            if (header.name === dataKey) {
                if(header.name === filteredColumnName ){
                    header.options.filterList =[customFilterValue.filterValue]
                    return tableColumns.push(header)
                } else return tableColumns.push(header)
            };
        })
    )
    return tableColumns
}