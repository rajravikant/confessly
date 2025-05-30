import React from "react";
import dynamic from "next/dynamic";
const ShareNavbar =  dynamic(() => import("@/app/confessions/(components)/shared/ShareNavbar"));
const Footer =  dynamic(() => import("@/components/landing/Footer"));
import ReactQueryProvider from "@/lib/QueryProvider";
import { AuthProvider } from "@/lib/AuthProvider";
import { Toaster } from "@/components/ui/sonner";

const page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ReactQueryProvider>
      <AuthProvider>
        <div className="bg-background">
          <ShareNavbar />
          <Toaster />
          {children}
          <Footer className="py-16 lg:px-32 px-8" />
        </div>
      </AuthProvider>
    </ReactQueryProvider>
  );
};

export default page;
