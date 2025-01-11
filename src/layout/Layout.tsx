import React from "react";
import Header from "../components/Header/Header.tsx";
import "./Layout.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="layout-wrapper">
        {/*<Sidebar />*/}
        <main>{children}</main>
      </div>
    </>
  );
}

export default Layout;
