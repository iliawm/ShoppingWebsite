
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Users,
    Package,
    FileText,
    Shield,
    ChevronDown,
    Bell,
    LogOut,
    Menu,
    X,
} from "lucide-react";

const sidebarItems = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/admin",
    },
    {
        title: "Management",
        icon: Shield,
        items: [
            { title: "Users", href: "/admin/management/users" },
            { title: "Admins", href: "/admin/management/admins" },
            { title: "Roles", href: "/admin/management/roles" },
            { title: "Settings", href: "/admin/management/settings" },
        ],
    },
    {
        title: "Products",
        icon: Package,
        items: [
            { title: "All Products", href: "/admin/products" },
            { title: "Categories", href: "/admin/products/categories" },
            { title: "Reviews", href: "/admin/products/reviews" },
        ],
    },
    {
        title: "Posts",
        icon: FileText,
        items: [
            { title: "Pending", href: "/admin/posts/pending" },
            { title: "Approved", href: "/admin/posts/approved" },
            { title: "Reported", href: "/admin/posts/reported" },
        ],
    },
];

export default function AdminLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expanded, setExpanded] = useState<string[]>([]);
    const pathname = usePathname();
    const [mouse, setMouse] = useState(false);
    

    const toggleExpand = (title: string) => {
        setExpanded((prev) =>
            prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
        );
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex">
            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-zinc-900 border-r border-zinc-800 transform transition-transform ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0`}
            >
                <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-800 cursor-pointer" onMouseEnter={()=>{
                    setMouse(true)
                }}
                     onMouseLeave={()=>{
                         setMouse(false)
                     }}>
                    <h1 className="text-lg font-bold tracking-tight " >
                        {
                            mouse ?
                                <Link href={`/`} className={"hover:text-green-500"}>Home</Link> :
                                <Link href={`/Admin`} className={""}>Admin Panel</Link>
                        }
                       
                    </h1>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden text-zinc-400 hover:text-white"
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
                    {sidebarItems.map((item) => (
                        <div key={item.title}>
                            {item.items ? (
                                <>
                                    <button
                                        onClick={() => toggleExpand(item.title)}
                                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={18} />
                                            <span className="text-sm">{item.title}</span>
                                        </div>
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${
                                                expanded.includes(item.title) ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>
                                    {expanded.includes(item.title) && (
                                        <div className="ml-8 mt-1 space-y-1">
                                            {item.items.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                                                        pathname === sub.href
                                                            ? "bg-indigo-500/20 text-indigo-400"
                                                            : "text-zinc-500 hover:text-zinc-300"
                                                    }`}
                                                >
                                                    {sub.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                                        pathname === item.href
                                            ? "bg-indigo-500/20 text-indigo-400"
                                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                    }`}
                                >
                                    <item.icon size={18} />
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-4 lg:px-6 bg-zinc-900/50 backdrop-blur sticky top-0 z-30">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden text-zinc-400 hover:text-white"
                    >
                        <Menu size={20} />
                    </button>
                    <div className="flex items-center gap-4 ml-auto mr-5">
                        <button className="relative text-zinc-400 hover:text-white">
                            <Bell size={18} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">
                                A
                            </div>
                            <span className="text-sm text-zinc-400 hidden sm:block">
                Admin
              </span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-4 lg:p-6 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
