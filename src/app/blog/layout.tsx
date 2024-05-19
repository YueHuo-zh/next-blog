import type { Metadata } from "next";


export const metadata: Metadata = {
    title: '31号避难所 - Blog',
    description: "记录一下逃难生活",
}

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}