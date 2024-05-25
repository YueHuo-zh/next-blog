export default function BlogPostLayout ({
  children,
}:Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <div>
      { children }
    </div>
  );
}