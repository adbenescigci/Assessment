import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";

const ECommerce = dynamic(() => import("@/components/Dashboard/E-commerce"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Next.js Test Template",
  description: "This is a test template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Button className="m-1 bg-green-200  bg-blend-color-dodge">Test</Button>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
