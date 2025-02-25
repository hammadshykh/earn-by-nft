import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function Layout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <>
   <main className="min-h-screen bg-gradient-to-br from-[#FAF5FF] via-[#FDFDEA] to-[#E3FDFD]">
    <Header />
    {children}
    <Footer />
   </main>
  </>
 );
}
