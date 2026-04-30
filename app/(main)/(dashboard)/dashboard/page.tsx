"use client"
import {useEffect, useState} from "react";

export default function Dashboard() {
    const [user,setUser] = useState(Object)

    useEffect(() => {
        const handlefetch=async ()=>{
            try {
                const res = await fetch("/api/Users",{
                    method:"GET"
                })
                if (res.ok){
                    const data = await res.json()
                    console.log(data)
                    setUser(data.client)
                }
            }
            catch (err){
                console.log(err)
            }

        }
        handlefetch()
    }, []);
    return (
        <div className="flex h-screen bg-surface overflow-hidden">

            {/* SIDEBAR */}
            <aside className="w-64 bg-white border-l border-border flex flex-col shrink-0">
                <div className="h-16 flex items-center justify-center gap-2 border-b border-border">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <h1 className="text-xl font-bold text-dark">حساب من</h1>
                </div>

                <nav className="flex-1 px-3 py-6 space-y-1">
                    {[
                        { icon: '📊', label: 'پیشخوان', active: true },
                        { icon: '📦', label: 'سفارش‌ها' },
                        { icon: '↩️', label: 'مرجوعی‌ها' },
                        { icon: '❤️', label: 'علاقه‌مندی‌ها' },
                        { icon: '💬', label: 'پیام‌ها' },
                        { icon: '🎫', label: 'تیکت‌ها' },
                        { icon: '👤', label: 'اطلاعات حساب' },
                    ].map(item => (
                        <a key={item.label} href="#"
                           className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all
                ${item.active
                               ? 'bg-soft text-primary font-medium shadow-sm'
                               : 'text-muted hover:bg-soft/50 hover:text-primary hover:translate-x-1'
                           }`}>
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                            {item.label === 'سفارش‌ها' && <span className="mr-auto bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">۲ فعال</span>}
                            {item.label === 'پیام‌ها' && <span className="mr-auto bg-red-400 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">۳</span>}
                        </a>
                    ))}
                </nav>

                <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-3">
                        <img src={user?.image} alt="" className="w-10 h-10 rounded-full ring-2 ring-primary/20" />
                        <div>
                            <p className="text-sm font-medium text-dark">{user?.name}</p>
                            <p className="text-[10px] text-muted">{user?.email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* MAIN */}
            <main className="flex-1 flex flex-col overflow-auto">

                <header className="h-16 bg-white/80 backdrop-blur-lg border-b border-border flex items-center justify-between px-6 shrink-0">
                    <h2 className="text-lg font-bold text-dark">👋 سلام
                        {user?.name}
                        ، خوش اومدی!</h2>
                    <div className="flex items-center gap-3">
                        <button className="relative p-2 rounded-xl hover:bg-soft">
                            <span className="text-xl">🔔</span>
                            <span className="absolute top-0 left-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">۴</span>
                        </button>
                        <button className="relative p-2 rounded-xl hover:bg-soft">
                            <span className="text-xl">🛒</span>
                            <span className="absolute top-0 left-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">۱</span>
                        </button>
                    </div>
                </header>

                <div className="p-6 space-y-6">

                    {/* STAT ROW */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: '📦', label: 'کل سفارش‌ها', value: '۲۴', sub: '۲ سفارش فعال', color: 'border-l-primary' },
                            { icon: '💰', label: 'مجموع خرید', value: '۴.۸ میلیون', sub: '۶ ماه گذشته', color: 'border-l-amber-400' },
                            { icon: '🎫', label: 'تیکت‌های باز', value: '۲', sub: '۱ پاسخ جدید', color: 'border-l-cyan-400' },
                            { icon: '💎', label: 'اعتبار کیف پول', value: '۳۴۰,۰۰۰ ت', sub: '۳۱,۰۰۰ ت cashback', color: 'border-l-purple-400' },
                        ].map((s, i) => (
                            <div key={i} className={`bg-white rounded-2xl p-5 border border-border border-l-4 ${s.color} hover:shadow-lg hover:-translate-y-1 transition-all`}>
                                <span className="text-2xl">{s.icon}</span>
                                <p className="text-2xl font-bold text-dark mt-2">{s.value}</p>
                                <p className="text-sm font-medium text-dark">{s.label}</p>
                                <p className="text-xs text-muted mt-1">{s.sub}</p>
                            </div>
                        ))}
                    </div>

                    {/* ACTIVE ORDERS + WISHLIST ROW */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                        {/* ACTIVE ORDERS */}
                        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-border">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-dark">🚚 سفارش‌های در جریان</h3>
                                <a href="#" className="text-sm text-primary font-medium">همه سفارش‌ها ←</a>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        id: '#۴۵۲۱', date: '۲۵ فروردین', items: 'کتونی نایک + هدفون بیسیم', total: '۳,۴۸۰,۰۰۰',
                                        status: 'در حال ارسال', progress: 60, step: 'ارسالی از انبار تهران',
                                        color: 'bg-amber-50 border-amber-300', badge: 'bg-amber-50 text-amber-600'
                                    },
                                    {
                                        id: '#۴۵۱۸', date: '۲۲ فروردین', items: 'پیراهن زنانه + شلوار جین', total: '۸۴۰,۰۰۰',
                                        status: 'آماده ارسال', progress: 30, step: 'بسته‌بندی در انبار',
                                        color: 'bg-cyan-50 border-cyan-300', badge: 'bg-cyan-50 text-cyan-600'
                                    },
                                ].map((order, i) => (
                                    <div key={i} className={`${order.color} border rounded-2xl p-4`}>
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-bold text-dark">{order.id}</span>
                                                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${order.badge}`}>{order.status}</span>
                                                </div>
                                                <p className="text-xs text-muted mt-1">{order.date} — {order.items}</p>
                                            </div>
                                            <span className="text-sm font-bold text-dark">{order.total} ت</span>
                                        </div>
                                        <div className="bg-white/60 rounded-full h-2 w-full mb-2">
                                            <div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${order.progress}%` }}>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <p className="text-[10px] text-muted">{order.step}</p>
                                            <a href="#" className="text-xs text-primary font-medium hover:underline">پیگیری سفارش</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* WISHLIST SUMMARY */}
                        <div className="bg-white rounded-2xl p-5 border border-border">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-bold text-dark">❤️ علاقه‌مندی‌ها</h3>
                                <span className="text-xs text-muted bg-surface px-2 py-1 rounded-full">۸ قلم</span>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'ساعت هوشمند', price: '۱,۸۹۰,۰۰۰', img: '⌚', drop: '۱۲٪ تخفیف خورده' },
                                    { name: 'کیف چرم', price: '۸۹۰,۰۰۰', img: '👜', drop: null },
                                    { name: 'عینک آفتابی', price: '۲۸۰,۰۰۰', img: '🕶️', drop: 'موجود شد!' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface transition-colors cursor-pointer">
                                        <span className="text-2xl">{item.img}</span>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-dark truncate">{item.name}</p>
                                            <p className="text-xs font-bold text-dark mt-0.5">{item.price} ت</p>
                                            {item.drop && <p className="text-[10px] text-primary mt-0.5">{item.drop}</p>}
                                        </div>
                                        <button className="text-lg opacity-40 hover:opacity-100 transition-opacity">🛒</button>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 py-2.5 border-2 border-dashed border-border rounded-xl text-sm text-muted hover:border-primary hover:text-primary transition-colors">
                                مشاهده همه علاقه‌مندی‌ها
                            </button>
                        </div>
                    </div>

                    {/* RECENT ORDERS TABLE */}
                    <div className="bg-white rounded-2xl p-5 border border-border">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-dark">📋 تاریخچه سفارش‌ها</h3>
                            <div className="flex bg-surface rounded-xl p-1 gap-1">
                                {['همه', 'تحویل شده', 'مرجوعی', 'لغو شده'].map(tab => (
                                    <button key={tab}
                                            className={`px-3 py-1.5 rounded-lg text-xs transition-all
                      ${tab === 'همه' ? 'bg-white text-primary shadow-sm font-medium' : 'text-muted hover:text-dark'}`}>
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-right">
                                <thead>
                                <tr className="text-xs font-bold text-muted border-b border-border">
                                    <th className="pb-3">شماره</th>
                                    <th className="pb-3">محصولات</th>
                                    <th className="pb-3">تاریخ</th>
                                    <th className="pb-3">مبلغ</th>
                                    <th className="pb-3">وضعیت</th>
                                    <th className="pb-3"></th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                {[
                                    { id: '#۴۵۱۷', items: 'شومیز + دامن', date: '۱۸ فروردین', amount: '۷۹۰,۰۰۰', status: 'تحویل شده', color: 'bg-green-50 text-green-600' },
                                    { id: '#۴۵۱۴', items: 'صندل زنانه', date: '۱۰ فروردین', amount: '۳۴۰,۰۰۰', status: 'تحویل شده', color: 'bg-green-50 text-green-600' },
                                    { id: '#۴۵۱۰', items: 'مانتو تابستانه', date: '۲۸ اسفند', amount: '۵۹۰,۰۰۰', status: 'مرجوع شده', color: 'bg-red-50 text-red-500' },
                                    { id: '#۴۵۰۸', items: 'بلوز + شال', date: '۲۲ اسفند', amount: '۴۳۰,۰۰۰', status: 'لغو شده', color: 'bg-gray-100 text-gray-500' },
                                ].map((row, i) => (
                                    <tr key={i} className="text-sm hover:bg-surface transition-colors cursor-pointer">
                                        <td className="py-3 font-medium text-primary">{row.id}</td>
                                        <td className="py-3 text-dark">{row.items}</td>
                                        <td className="py-3 text-muted">{row.date}</td>
                                        <td className="py-3 font-medium">{row.amount} ت</td>
                                        <td className="py-3">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${row.color}`}>{row.status}</span>
                                        </td>
                                        <td className="py-3">
                                            <button className="text-muted hover:text-primary transition-colors text-lg">⋯</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* QUICK ACTIONS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { icon: '🔄', label: 'درخواست مرجوعی', desc: 'تا ۷ روز پس از تحویل' },
                            { icon: '💬', label: 'پشتیبانی آنلاین', desc: 'پاسخ در کمتر از ۵ دقیقه' },
                            { icon: '📥', label: 'دانلود فاکتور', desc: 'آخرین خریدها' },
                            { icon: '🎁', label: 'کد تخفیف', desc: '۳ کد فعال داری' },
                        ].map((action, i) => (
                            <button key={i}
                                    className="bg-white border border-border rounded-2xl p-4 text-center hover:border-primary hover:shadow-md transition-all group">
                                <span className="text-2xl group-hover:scale-110 inline-block transition-transform">{action.icon}</span>
                                <p className="text-sm font-medium text-dark mt-2">{action.label}</p>
                                <p className="text-[10px] text-muted mt-1">{action.desc}</p>
                            </button>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}
