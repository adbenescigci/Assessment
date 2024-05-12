import coloredCellRender from "./coloredCellRender";
import textFieldCellRender from "./textFieldCellRender";

const header = [
  {
    name: "id",
    label: "ID",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "studentId",
    label: "Student ID",
    options: {
      filter: false,
    },
    draggableColumns: {
      enabled: true,
    },
  },
  {
    name: "lastName",
    label: "Last N.",
    options: {
      filter: false,
      tooltip: "LAST NAME",
      draggable: true,
    },
  },
  {
    name: "firstName",
    label: "First N.",
    options: {
      filter: false,
    },
  },
  {
    name: "cohort",
    label: "Cohort",
  },
  {
    name: "gradeLevel",
    label: "Grade",
    tooltip: "GRADE LEVEL",
  },
  {
    name: "grade",
    label: "Grade",
  },
  {
    name: "section",
    label: "Section",
  },

  {
    name: "currentlyEnrolledForTableGT",
    label: "Currently Enrolled",
  },
  {
    name: "currentlyEnrolledForTable4Y",
    label: "Currently Enrolled",
  },
  {
    name: "schoolName",
    label: "School Name",
  },
  {
    name: "buildingName",
    label: "Building Name",
  },
  {
    name: "indicatorMetCount",
    label: "Indicator Count",
  },
  {
    name: "psaScore",
    label: "PSA",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) =>
        coloredCellRender(value, tableMeta, updateValue),
    },
  },
  {
    name: "psaColorCode",
    label: "PSA Color",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "psaLevelName",
    label: "PSA Level",
    options: {
      display: "excluded",
    },
  },
  {
    name: "peaScore",
    label: "PEA",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) =>
        coloredCellRender(value, tableMeta, updateValue),
    },
  },
  {
    name: "peaColorCode",
    label: "PEA Color",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "peaLevelName",
    label: "PEA Level",
    options: {
      display: "excluded",
    },
  },
  {
    name: "pslScore",
    label: "PSL",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) =>
        coloredCellRender(value, tableMeta, updateValue),
    },
  },
  {
    name: "pslColorCode",
    label: "PSL Color",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "pslLevelName",
    label: "PSL Level",
    options: {
      display: "excluded",
    },
  },
  {
    name: "REGENTS-CCAI-score",
    label: "CCAI",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) =>
        coloredCellRender(value, tableMeta, updateValue),
    },
  },
  {
    name: "REGENTS-CCAI-colorCode",
    label: "CCAI Color",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "REGENTS-CCAI-levelName",
    label: "CCAI Level",
    options: {
      display: "excluded",
    },
  },
  {
    name: "REGENTS-CCAI-regentsName",
    label: "CCAI Name",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "REGENTS-CCG-score",
    label: "CCG",
    options: {
      filter: false,
      customBodyRender: (value, tableMeta, updateValue) =>
        coloredCellRender(value, tableMeta, updateValue),
    },
  },
  {
    name: "REGENTS-CCG-colorCode",
    label: "CCG Color",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "REGENTS-CCG-levelName",
    label: "CCG Level",
    options: {
      display: "excluded",
    },
  },
  {
    name: "REGENTS-CCG-regentsName",
    label: "CCG Regents",
    options: {
      display: "excluded",
      filter: false,
    },
  },
  {
    name: "star",
    label: "Star",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        textFieldCellRender(value, tableMeta, updateValue),
      setCellProps: (value) => {
        return {
          style: { width: 80 },
        };
      },
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        textFieldCellRender(value, tableMeta, updateValue),
      setCellProps: (value) => {
        return {
          style: { width: 80 },
        };
      },
    },
  },
  {
    name: "regents",
    label: "Regents",
    options: {
      filter: true,
      customBodyRender: (value, tableMeta, updateValue) =>
        textFieldCellRender(value, tableMeta, updateValue),
      setCellProps: (value, index) => {
        return {
          style: { width: 80 },
        };
      },
    },
  },
  {
    name: "first_name",
    label: "First Name",
    options: {
      filter: false,
    },
  },
  {
    name: "last_name",
    label: "Last Name",
    options: {
      filter: false,
    },
  },
  {
    name: "faculty_buildings",
    label: "Building Name",
    options: {
      filter: true,
    },
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
      filterList: ["No process"],
    },
  },
];

export default header;
