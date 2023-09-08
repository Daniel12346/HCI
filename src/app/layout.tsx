import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Nav from "./Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <body className="bg-violet-50 flex flex-col w-full align-center "> */}
      <body className="bg-violet-50 grid lg:grid-cols-[2fr_8fr_2fr]">
        <div className="col-span-full">
          <Nav />
        </div>
        {/* @ts-expect-error Server Component */}

        <Sidebar />
        <div className="flex flex-col items-center w-full min-h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
