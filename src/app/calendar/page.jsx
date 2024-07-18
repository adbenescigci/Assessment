import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";

const SampleTableView = dynamic(() => import("./SampleTable/SampleTableView"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

//export const revalidate = 10;
const CalendarPage = async () => {
  const response = await fetch(
    "https://66914caf26c2a69f6e8f4a32.mockapi.io/nextApi/list",
    { cache: "no-store" },
  );

  const data = await response.json();
  console.log("[CalendarPage]", "render", data[0].poolName);

  return (
    <DefaultLayout>
      <SampleTableView
        loading={false}
        showData={data}
        selectedCourse={0}
        myPoolCheck={false}
      />
    </DefaultLayout>
  );
};

export default CalendarPage;
