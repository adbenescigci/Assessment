import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Stack from "@mui/material/Stack";

export const metadata: Metadata = {
  title: "Next.js Test Template",
  description: "This Test Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Stack className="flex flex-row gap-8">
          <p>a</p>
          <p>b</p>
        </Stack>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
