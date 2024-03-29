"use client";

import AppSessionProvider from "@/entities/session/app-session-provider";
import { ThemeProvider } from "@/features/theme/theme-provider";
import ComposeChildren from "@/shared/lib/react";
import TanstackProvider from "@/shared/tanstack/tanstack-provider";
import React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      <AppSessionProvider />
      <TanstackProvider />
      {children}
    </ComposeChildren>
  );
};

export default AppProvider;
