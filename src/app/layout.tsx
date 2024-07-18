import React from "react";
//import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
//import theme from "./theme";

import "jsvectormap/dist/css/jsvectormap.css";
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
          <div className="dark:bg-boxdark-2 dark:text-bodydark">{children}</div>
        </StyledEngineProvider>
      </body>
    </html>
  );
}
