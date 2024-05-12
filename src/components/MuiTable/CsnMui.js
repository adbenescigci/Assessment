import React, {useEffect, useState} from "react";
import MUIDataTable from "mui-datatables";
import {tableOptions} from "./utils/tableOptions";
import getMuiTheme from "./utils/getMuiTheme";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import getMuiThemeForCsnNote from "./utils/getMuiThemeForCsnNote";
import Grid from "@mui/material/Grid";
import "./utils/fixedColumnStyle.css";
import PropTypes from "prop-types";
import CustomFilter from "./Components/CustomFilter";
import {ThemeProvider} from "@mui/material/styles";

function CsnMui(props) {
    const {
        tableData,
        title,
        tableColumns,
        searchText,
        fixed,
        fixedCsn,
        fixedExCsn,
        fixedWithCheckbox,
        customOption,
        rowsPerPage,
        components,
        noteTable,
        customTableChange
    } = props;
    const [sortOrder, setSortOrder] = useState({});
    const [customSearchText, setCustomSearchText] = useState(searchText);
    const [headers, setHeaders] = useState([]);
    const [filterList, setFilterList] = useState(null);

    useEffect(() => {
        const rowNumberColumn = {
            name: '#',
            label: '#',
            options: {
                filter: false,
                download: false,
                print: false,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (<span>{rowIndex + 1}</span>)
                }
            },
        };
        const updatedTableColumns = [rowNumberColumn, ...tableColumns];
        updatedTableColumns.forEach((column) => {
            column.options = {
                setCellProps: () => {
                    return {
                        style: {border: "solid 1px #cccccc"},
                    };
                },
                customFilterListOptions: {
                    render: (v) => `${column.label}: ${v ? v : "Blanks"}`,
                },
                filterType: "custom",
                filterOptions: {
                    logic: (location, filters) => {
                        if (filters.length) return !filters.includes(location);
                        return false;
                    },
                    display: (filterList, onChange, index, column, filterData) => {
                        const optionValues = filterData[index]
                        return (
                            <CustomFilter filterList={filterList} options={optionValues} index={index}
                                          column={column} onChange={onChange}/>
                        );
                    },
                    renderValue: (v) => (v ? v : "Blanks"),
                },
                ...column.options,
            };
        });
        setHeaders(updatedTableColumns);
    }, [tableColumns])

    const customTitle = (title) => {
        return (
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>{title}</Grid>
                {!(customOption && customOption.filter === false) &&
                    tableData?.length !== 0 && (
                        <Grid item>
                            <Input
                                value={customSearchText}
                                onChange={(e) => setCustomSearchText(e.target.value)}
                                style={{margin: 10}}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <SearchIcon color="disabled"/>
                                    </InputAdornment>
                                }
                            />
                        </Grid>
                    )}
            </Grid>
        );
    };

    function onTableChange(action, tableState) {
        customTableChange && customTableChange(action, tableState);
        if (filterList === null) {
            setFilterList(tableState?.filterList)
        }
        if (action === "filterChange" || action === "resetFilters") {
            setFilterList(tableState?.filterList)
            const _headers = headers.map((header, index) => {
                const updatedHeader = {
                    ...header, options: {...header.options, filterList: tableState.filterList[index]}
                }
                return (updatedHeader)
            })
            setHeaders(_headers)
            if (customOption?.extraFunc) customOption.extraFunc(tableState.filterList)
        }
    }

    return (
        <ThemeProvider theme={noteTable ? getMuiThemeForCsnNote : getMuiTheme}>
            <MUIDataTable
                title={customTitle(title)}
                data={tableData}
                columns={headers}
                options={{
                    ...tableOptions,
                    ...customOption,
                    rowsPerPage,
                    onTableChange: (action, tableState) => {
                        onTableChange(action, tableState);
                    },
                    onColumnSortChange: (changedColumn, direction) => {
                        setSortOrder({name: changedColumn, direction});
                    },
                    sortOrder,
                    searchText: customSearchText,
                    setTableProps: () =>
                        fixed ? {className: "fixed-column"} : fixedWithCheckbox ?
                            {className: "fixed-column-csn-0 fixed-column-csn-2 fixed-column-csn-3 fixed-column-csn-5"} : fixedCsn ?
                                {className: "fixed-column-csn-1 fixed-column-csn-2 fixed-column-csn-3 fixed-column-csn-4"}
                                : fixedExCsn ? {className: "fixed-column-ex-csn"} : {},
                    print: tableData?.length > 0 ? true : "disabled",
                    download: tableData?.length > 0 ? true : "disabled",
                }}
                components={components}
            />
        </ThemeProvider>
    );
}

CsnMui.propTypes = {
    classes: PropTypes.object,
    tableData: PropTypes.array,
    title: PropTypes.object,
    tableColumns: PropTypes.array,
    searchText: PropTypes.string,
    fixed: PropTypes.bool,
    fixedCsn: PropTypes.bool,
    fixedExCsn: PropTypes.bool,
    customOption: PropTypes.object,
    rowsPerPage: PropTypes.number,
    components: PropTypes.object,
    noteTable: PropTypes.bool,
    fixedWithCheckbox: PropTypes.bool,
    customTableChange: PropTypes.func
};


export default CsnMui;
