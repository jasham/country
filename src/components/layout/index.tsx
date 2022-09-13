import React from "react";
import { Header } from "../header";

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export { Layout };
