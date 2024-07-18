import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <DefaultLayout>
              {children}
            </DefaultLayout>
          </div>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
