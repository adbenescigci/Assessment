"use client";
import { createTheme } from "@mui/material/styles";

const getMuiTheme = () =>
  createTheme({
    components: {
      MUIDataTableToolbar: {
        styleOverrides: {
          actions: {
            display: "flex",
            flex: "initial",
            // move all icons to the right
            "& > span, & > button": {
              order: 99,
            },
          },
        },
      },
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            textAlign: "center",
            justifyContent: "center",
            fontSize: 12,
            height: 26,
            overflow: "hidden",
            marginRight: 0,
            marginLeft: 0,
            paddingTop: 3,
            paddingBottom: 0,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        },
      },
      MUIDataTableBodyRow: {
        styleOverrides: {
          root: {
            "&:nth-child(odd)": {
              backgroundColor: "#EEEEEE",
            },
          },
        },
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            border: "solid 1px #cccccc",
            textAlign: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            fontSize: 15,
            height: 30,
            marginRight: 0,
            marginLeft: 0,
            paddingTop: 5,
            paddingBottom: 5,
          },
          toolButton: {
            justifyContent: "center",
          },
          contentWrapper: {
            display: "contents",
          },
        },
      },
      MUIDataTableFilterList: {
        styleOverrides: {
          root: {
            marginBottom: 5,
          },
        },
      },
    },
  });

export default getMuiTheme();
