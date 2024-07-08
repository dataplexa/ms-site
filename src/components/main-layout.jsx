"use client";

import Footer from "./footer";
import Header from "./header";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <Header animateScroll={pathname === "/"} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
