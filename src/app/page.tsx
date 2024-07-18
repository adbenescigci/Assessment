import { Metadata } from "next";
import { Button } from "@mui/material";
import ECommerce from "@/components/Dashboard/E-commerce"

export const metadata: Metadata = {
  title: "Next.js Test Template",
  description: "This is a test template",
};

export default function Home() {
  return (
    <>
        <Button className="m-1 bg-green-200  bg-blend-color-dodge">Test</Button>
        <ECommerce />
    </>
  );
}
