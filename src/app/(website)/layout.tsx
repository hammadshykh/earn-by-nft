import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <>
   <main className="min-h-screen bg-gradient-to-br from-[#E9EFFF] via-[#E4FFEF] to-[#FFEBF9]">
    <Header />
    {children}
    <Footer />
   </main>
  </>
 );
}
