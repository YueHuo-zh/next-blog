import SiteLayout from "@/compoments/Layout/SiteLayout/SiteLaytou";

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