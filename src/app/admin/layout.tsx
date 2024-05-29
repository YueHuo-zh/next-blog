import React from "react";
import AdminLayout from "@/compoments/Layout/AdminLayout";

export default function Layout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    );
}