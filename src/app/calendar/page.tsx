"use client";
import Calendar from "@/components/Calender";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SampleTableView from "./SampleTable/SampleTableView";
import { mockData } from "./mockData";
import { Button } from "@mui/material";
import { selectCount } from "@/redux/features/counter/counterSlice";
import { useAppSelector } from "@/redux/hooks";

const CalendarPage = () => {
  console.log("[CalendarPage]", "render");

  const count = useAppSelector(selectCount);

  return (
    <DefaultLayout>
      <Button>Redux Count:{count}</Button>
      <SampleTableView
        loading={false}
        showData={mockData}
        handleAddPoolDialogShow={function (...args: any) {
          throw new Error("Function not implemented.");
        }}
        selectedCourse={0}
        myPoolCheck={false}
        handleMyPoolSwitch={function (...args: any) {
          throw new Error("Function not implemented.");
        }}
        handleActivePoolSwitch={function (...args: any) {
          throw new Error("Function not implemented.");
        }}
        activePoolCheck={false}
      />
      {/* <Calendar /> */}
    </DefaultLayout>
  );
};

export default CalendarPage;
