"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Empty = () => {
  return <></>;
};

export default function AppLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  let AppNavbar: any = Header;
  let AppFooter: any = Footer;

  if (pathname?.includes("/sign-in") || pathname?.includes("/sign-up")) {
    AppNavbar = Empty;
    AppFooter = Empty;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AppNavbar />
      <div className="flex-grow ">{children}</div>
      {/* <AppFooter /> */}
    </div>

  );
}
