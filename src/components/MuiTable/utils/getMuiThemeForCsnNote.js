import {createTheme} from "@mui/material/styles";

const getMuiTheme = () => createTheme({
    overrides: {
        MUIDataTableToolbar: {
            actions: {
                display: "flex",
                flex: "initial",
                // move all icons to the right
                "& > span, & > button": {
                    order: 99
                }
            }
        },
        MUIDataTableBodyCell: {
            root: {
                maxWidth:  700,
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: 12,
                minHeight: 26,
                marginRight: 0,
                marginLeft: 0,
                paddingTop: 3,
                paddingBottom: 0,
                textOverflow: 'ellipsis'
            }
        },
        MUIDataTableBodyRow: {
            root: {
                '&:nth-child(odd)': {
                    backgroundColor: '#EEEEEE',
                }
            }
        },
        MUIDataTableHeadCell: {
            root: {
                border: 'solid 1px #cccccc',
                textAlign: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                fontSize: 15,
                height: 30,
                marginRight: 0,
                marginLeft: 0,
                paddingTop: 5,
                paddingBottom: 5,
            },
            toolButton: {
                justifyContent: 'center'
            },
        },
        MUIDataTableFilterList: {
            root: {
                marginBottom: 5
            }
        }
    }
})

export default getMuiTheme()
