import SiteLayout from "@/ui/Layout/SiteLayout/SiteLaytou";

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