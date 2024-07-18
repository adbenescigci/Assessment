import { Metadata } from "next";
import dynamic from "next/dynamic";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Chart = dynamic(() => import("@/components/Charts/page"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const BasicChartPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Chart />
    </DefaultLayout>
  );
};

export default BasicChartPage;
