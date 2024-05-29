import SiteLayout from "@/compoments/Layout/SiteLayout";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteLayout>
      { children }
    </SiteLayout>
  );
}