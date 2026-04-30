"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [tabletExpanded, setTabletExpanded] = useState(false);

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const res = await fetch("/api/Users", { method: "GET" });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.client);
                }
            } catch (err) {
                console.log(err);
            }
        };
        handleFetch();
    }, []);

    const navItems = [
        { icon: '📊', label: 'پیشخوان', active: true },
        { icon: '📦', label: 'سفارشها', badge: 2 },
        { icon: '↩️', label: 'مرجوعیها' },
        { icon: '❤️', label: 'علاقهمندیها' },
        { icon: '💬', label: 'پیامها', badge: 3 },
        { icon: '🎫', label: 'تیکتها' },
        { icon: '⚙️', label: 'اطلاعات حساب' },
    ];

    const stats = [
        { icon: '📦', label: 'کل سفارشها', value: '۲۴', sub: '۲ سفارش فعال', color: 'border-l-primary' },
        { icon: '💰', label: 'مجموع خرید', value: '۴.۸ میلیون', sub: '۶ ماه گذشته', color: 'border-l-amber-400' },
        { icon: '🎫', label: 'تیکتهای باز', value: '۲', sub: '۱ پاسخ جدید', color: 'border-l-cyan-400' },
        { icon: '💳', label: 'اعتبار کیف پول', value: '۳۴۰,۰۰۰ ت', sub: '۳۱,۰۰۰ ت cashback', color: 'border-l-purple-400' },
    ];

    const activeOrders = [
        { id: '#۴۵۲۱', date: '۲۵ فروردین', items: 'کتونی نایک + هدفون بیسیم', total: '۳,۴۸۰,۰۰۰', status: 'در حال ارسال', progress: 60, color: 'bg-amber-50 border-amber-300', badge: 'bg-amber-50 text-amber-600' },
        { id: '#۴۵۱۸', date: '۲۲ فروردین', items: 'پیراهن زنانه + شلوار جین', total: '۸۴۰,۰۰۰', status: 'آماده ارسال', progress: 30, color: 'bg-cyan-50 border-cyan-300', badge: 'bg-cyan-50 text-cyan-600' },
    ];

    const wishlist = [
        { name: 'ساعت هوشمند', price: '۱,۸۹۰,۰۰۰', img: '⌚', drop: '۱۲٪ تخفیف' },
        { name: 'کیف چرم', price: '۸۹۰,۰۰۰', img: '👜', drop: null },
        { name: 'عینک آفتابی', price: '۲۸۰,۰۰۰', img: '🕶️', drop: 'موجود شد!' },
    ];

    const recentOrders = [
        { id: '#۴۵۱۷', items: 'شومیز + دامن', date: '۱۸ فروردین', amount: '۷۹۰,۰۰۰', status: 'تحویل شده', color: 'bg-green-50 text-green-600' },
        { id: '#۴۵۱۴', items: 'صندل زنانه', date: '۱۰ فروردین', amount: '۳۴۰,۰۰۰', status: 'تحویل شده', color: 'bg-green-50 text-green-600' },
        { id: '#۴۵۱۰', items: 'مانتو تابستانه', date: '۲۸ اسفند', amount: '۵۹۰,۰۰۰', status: 'مرجوع شده', color: 'bg-red-50 text-red-500' },
        { id: '#۴۵۰۸', items: 'بلوز + شال', date: '۲۲ اسفند', amount: '۴۳۰,۰۰۰', status: 'لغو شده', color: 'bg-gray-100 text-gray-500' },
    ];

    const quickActions = [
        { icon: '↩️', label: 'درخواست مرجوعی', desc: 'تا ۷ روز پس از تحویل' },
        { icon: '💬', label: 'پشتیبانی آنلاین', desc: 'پاسخ در کمتر از ۵ دقیقه' },
        { icon: '📥', label: 'دانلود فاکتور', desc: 'آخرین خریدها' },
        { icon: '🎟️', label: 'کد تخفیف', desc: '۳ کد فعال داری' },
    ];

    const showLabels = tabletExpanded;

    return (
        <div className="flex min-h-screen bg-[#F8F8FA] pt-16">
            <div className="lg:hidden absolute top-16 left-0 right-0 z-30 flex items-center justify-between p-4 bg-white border-b">
                <h1 className="text-lg font-bold">حساب من</h1>
                <button
                    onClick={() => setMobileOpen(true)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <aside
                className={`
                    fixed lg:sticky top-16 right-0 z-40 h-[calc(100vh-4rem)] bg-white border-l
                    transition-all duration-300 shrink-0
                    ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
                    lg:translate-x-0
                    ${showLabels ? 'w-64' : 'w-16 lg:w-20'}
                `}
            >
                <div className={`h-16 flex items-center border-b px-3 ${showLabels ? 'justify-between' : 'justify-center'}`}>
                    {showLabels ? (
                        <>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                <h2 className="text-lg font-bold hidden sm:block">حساب من</h2>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setTabletExpanded(false)}
                                    className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100 items-center justify-center"
                                    title="بستن منو"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    ) : (
                        <button
                            onClick={() => setTabletExpanded(true)}
                            className="hidden lg:flex p-2 rounded-lg hover:bg-gray-100"
                            title="باز کردن منو"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                <nav className="flex flex-col p-2 lg:p-4 gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className={`
                                flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium w-full
                                transition-all
                                ${item.active ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}
                                ${showLabels ? '' : 'justify-center'}
                            `}
                            title={!showLabels ? item.label : undefined}
                        >
                            <span className="text-lg shrink-0">{item.icon}</span>
                            {showLabels && (
                                <>
                                    <span className="flex-1 text-right">{item.label}</span>
                                    {item.badge && (
                                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4 border-t">
                    <div className={`flex items-center ${showLabels ? 'gap-3' : 'justify-center'}`}>
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0 text-sm font-medium">
                            {user?.name?.[0] || '👤'}
                        </div>
                        {showLabels && (
                            <div className="text-sm overflow-hidden">
                                <p className="font-medium truncate">{user?.name || 'کاربر'}</p>
                                <p className="text-gray-500 text-xs truncate">{user?.email || 'user@example.com'}</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>

            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <main className="flex-1 p-4 lg:p-6 overflow-y-auto min-h-[calc(100vh-4rem)]">
                <h2 className="text-xl lg:text-2xl font-bold mb-2">
                    سلام {user?.name || 'کاربر'}، خوش اومدی!
                </h2>
                <p className="text-sm text-gray-500 mb-6">۴ سفارش فعال | ۱ پیام جدید</p>

                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-4 mb-6">
                    {stats.map((s, i) => (
                        <div key={i} className={`bg-white rounded-2xl p-3 lg:p-4 border-l-4 ${s.color}`}>
                            <span className="text-2xl">{s.icon}</span>
                            <p className="text-lg lg:text-xl font-bold mt-2">{s.value}</p>
                            <p className="text-xs lg:text-sm text-gray-500">{s.label}</p>
                            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6 mb-6">
                    <div className="bg-white rounded-2xl p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold">سفارش‌های در جریان</h3>
                            <button className="text-sm text-primary">همه سفارش‌ها ←</button>
                        </div>
                        <div className="space-y-3">
                            {activeOrders.map((order, i) => (
                                <div key={i} className={`p-3 lg:p-4 rounded-xl border ${order.color}`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-medium">{order.id}</span>
                                        <span className={`text-xs px-2 py-1 rounded-full ${order.badge}`}>
                                            {order.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2">{order.items}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold">{order.total} ت</span>
                                        <span className="text-xs text-gray-400">{order.date}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
                                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${order.progress}%` }}></div>
                                    </div>
                                    <button className="text-xs text-primary mt-2">پیگیری سفارش</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 lg:p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold">❤️ علاقه‌مندی‌ها</h3>
                            <span className="text-sm text-gray-500">۸ قلم</span>
                        </div>
                        <div className="space-y-3">
                            {wishlist.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50">
                                    <span className="text-2xl">{item.img}</span>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{item.name}</p>
                                        <p className="text-xs text-gray-500">{item.price} ت</p>
                                    </div>
                                    {item.drop && (
                                        <span className="text-xs bg-red-50 text-red-600 px-2 py-1 rounded-full">
                                            {item.drop}
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button className="text-sm text-primary mt-4 w-full text-center">
                            مشاهده همه علاقه‌مندی‌ها
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-4 lg:p-6 mb-6">
                    <h3 className="font-bold mb-4">📋 تاریخچه سفارش‌ها</h3>
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                        {['همه', 'تحویل شده', 'مرجوعی', 'لغو شده'].map(tab => (
                            <button key={tab} className="px-4 py-2 rounded-lg text-sm bg-gray-100 hover:bg-gray-200 whitespace-nowrap">
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                        <div className="inline-block min-w-full align-middle">
                            <table className="min-w-full text-sm">
                                <thead>
                                <tr className="border-b text-gray-500">
                                    <th className="text-right py-2 px-2">شماره</th>
                                    <th className="text-right py-2 px-2">محصولات</th>
                                    <th className="text-right py-2 px-2 hidden sm:table-cell">تاریخ</th>
                                    <th className="text-right py-2 px-2">مبلغ</th>
                                    <th className="text-right py-2 px-2">وضعیت</th>
                                    <th className="text-right py-2 px-2"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {recentOrders.map((row, i) => (
                                    <tr key={i} className="border-b hover:bg-gray-50">
                                        <td className="py-3 px-2 whitespace-nowrap">{row.id}</td>
                                        <td className="py-3 px-2">{row.items}</td>
                                        <td className="py-3 px-2 hidden sm:table-cell whitespace-nowrap">{row.date}</td>
                                        <td className="py-3 px-2 whitespace-nowrap">{row.amount} ت</td>
                                        <td className="py-3 px-2">
                                                <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${row.color}`}>
                                                    {row.status}
                                                </span>
                                        </td>
                                        <td className="py-3 px-2">
                                            <button className="text-gray-400 hover:text-gray-600">⋮</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                    {quickActions.map((action, i) => (
                        <button key={i} className="bg-white rounded-2xl p-3 lg:p-4 text-right hover:shadow-md transition-shadow">
                            <span className="text-2xl">{action.icon}</span>
                            <p className="text-sm font-medium mt-2">{action.label}</p>
                            <p className="text-xs text-gray-400 mt-1">{action.desc}</p>
                        </button>
                    ))}
                </div>
            </main>
        </div>
    );
}
