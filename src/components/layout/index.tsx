import React from "react";
import { Header } from "../header";

type LayoutProps = {
  children?: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="pb-11">
      <Header />
      {children}
    </main>
  );
};

export { Layout };
