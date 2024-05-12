import React from "react";
import { ReadMore } from "@mui/icons-material";

// Table columns for the pools table view
function getTableHeaders(isActive) {
  let arr = [
    {
      name: "poolName",
      label: "Pool Name",
    },
    {
      name: "poolAbbreviation",
      label: "Abbreviation",
    },
    {
      name: "poolDescription",
      label: "Description",
      options: {
        sort: false,
        filter: false,
        customBodyRender: (value) => <ReadMore text={value} />,
      },
    },
    {
      name: "owner",
      label: "Owner",
    },
    {
      name: "dateCreatedForTable",
      label: "Created Date",
    },
    {
      name: "detail",
      label: "Detail",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
    {
      name: "share",
      label: "Share",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
    {
      name: "active",
      label: "Active",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
    {
      name: "activeForFilter",
      label: "Active",
      options: {
        display: "excluded",
        sort: false,
        print: false,
        download: false,
        filterList: isActive && ["Yes"],
      },
    },
    {
      name: "addQuestion",
      label: "Add Question",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
    {
      name: "edit",
      label: "Edit",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
    {
      name: "copy",
      label: "Copy",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
    {
      name: "delete",
      label: "Delete",
      options: {
        sort: false,
        filter: false,
        print: false,
        download: false,
      },
    },
  ];

  return arr;
}

export default getTableHeaders;
