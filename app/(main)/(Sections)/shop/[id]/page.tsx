import Link from "next/link";


export default async function ProductPage({params} : {params : Promise<{id:string}>}) {
    const {id} =await params
    let product;
    try {
        const res=await fetch(`http://localhost:3000/api/Products/product?prod=${id}`)
        if (res.ok){
            const data = await res.json()
            console.log(data.product)
            product = data.product
        }
    }catch (err){
        
    }
    return (
        <div className="min-h-screen bg-[#F8F8FA]">

            {/* BREADCRUMB */}
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-[#8E8E93]">
                    <Link href="#" className="hover:text-[#FF5E8C] transition-colors">فروشگاه</Link>
                    <span>/</span>
                    <Link  href="#" className="hover:text-[#FF5E8C] transition-colors">پوشاک زنانه</Link >
                    <span>/</span>
                    <span className="text-[#2C2C2E] font-medium">{product.name}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* PRODUCT IMAGES */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="bg-white rounded-2xl border border-[#E5E5EA] p-8 aspect-square flex items-center justify-center relative overflow-hidden group">
                            <span className="text-9xl transition-transform group-hover:scale-110 duration-500">👗</span>
                            <span className="absolute top-4 left-4 bg-[#FF5E8C] text-white text-xs px-3 py-1.5 rounded-full font-medium">۲۰٪ تخفیف</span>
                            <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg shadow-sm hover:shadow-md transition-all hover:text-[#FF5E8C]">
                                ♡
                            </button>
                        </div>
                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-3">
                            {['👗', '👗', '👗', '👗'].map((img, i) => (
                                <button key={i}
                                        className={`aspect-square bg-white rounded-xl border-2 flex items-center justify-center text-3xl transition-all
                    ${i === 0 ? 'border-[#FF5E8C] shadow-sm' : 'border-[#E5E5EA] hover:border-[#FF5E8C]/50'}`}>
                                    {img}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <div className="space-y-6">
                        {/* Title & Rating */}
                        <div>
                            <h1 className="text-2xl font-bold text-[#2C2C2E] leading-tight">{product.name}</h1>
                            <div className="flex items-center gap-3 mt-3">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`text-sm ${i < 4 ? 'text-amber-400' : 'text-[#E5E5EA]'}`}>★</span>
                                    ))}
                                </div>
                                <span className="text-sm text-[#8E8E93]">{product.rating}</span>
                                <span className="text-sm text-green-600 font-medium">{product.SoldAmount} فروش </span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="bg-[#FFE5EF] rounded-2xl p-4 flex items-center gap-3">
                            <span className="text-3xl font-bold text-[#FF5E8C]">{product.price}</span>
                            <span className="text-sm text-[#8E8E93]">تومان</span>
                            {product.offer?
                                <span className="bg-white text-[#8E8E93] text-xs px-2 py-1 rounded-lg line-through">{product.price}</span>
                                :  "" }
                        </div>

                        {/* Color Selection */}
                        <div>
                            <p className="text-sm font-medium text-[#2C2C2E] mb-3">رنگ: <span className="text-[#8E8E93]">صورتی</span></p>
                            <div className="flex gap-3">
                                {[
                                    { color: 'bg-pink-300', label: 'صورتی' },
                                    { color: 'bg-gray-200', label: 'سفید' },
                                    { color: 'bg-gray-400', label: 'طوسی' },
                                    { color: 'bg-gray-900', label: 'مشکی' },
                                ].map((c, i) => (
                                    <button key={i}
                                            className={`w-10 h-10 rounded-xl ${c.color} border-2 transition-all
                      ${i === 0 ? 'border-[#FF5E8C] ring-2 ring-[#FF5E8C]/20' : 'border-transparent hover:border-[#FF5E8C]/50'}`}
                                            title={c.label}>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-sm font-medium text-[#2C2C2E]">سایز</p>
                                <Link  href="#" className="text-xs text-[#FF5E8C] hover:underline">راهنمای سایز</Link >
                            </div>
                            <div className="flex gap-2">
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
                                    <button key={size}
                                            className={`w-12 h-12 rounded-xl text-sm font-medium transition-all
                      ${i === 1
                                                ? 'bg-[#FF5E8C] text-white shadow-md'
                                                : 'bg-white border border-[#E5E5EA] text-[#2C2C2E] hover:border-[#FF5E8C]'}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity & Add to Cart */}
                        <div className="flex gap-3">
                            <div className="flex items-center bg-white border border-[#E5E5EA] rounded-xl">
                                <button className="w-10 h-12 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5E8C] transition-colors">−</button>
                                <span className="w-12 text-center font-medium text-[#2C2C2E]">۱</span>
                                <button className="w-10 h-12 flex items-center justify-center text-[#8E8E93] hover:text-[#FF5E8C] transition-colors">+</button>
                            </div>
                            <button className="flex-1 bg-[#FF5E8C] text-white rounded-xl font-medium hover:bg-[#FF5E8C]/90 transition-all hover:shadow-lg hover:shadow-[#FF5E8C]/20 active:scale-[0.98]">
                                🛒 افزودن به سبد خرید
                            </button>
                        </div>

                        {/* Buy Now */}
                        <button className="w-full bg-[#2C2C2E] text-white rounded-xl py-3.5 font-medium hover:bg-[#2C2C2E]/90 transition-all hover:shadow-lg active:scale-[0.98]">
                            ⚡ خرید سریع
                        </button>

                        {/* Features */}
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { icon: '🚚', text: 'ارسال رایگان' },
                                { icon: '🔄', text: '۷ روز ضمانت بازگشت' },
                                { icon: '✅', text: 'ضمانت اصالت کالا' },
                            ].map((f, i) => (
                                <div key={i} className="text-center p-3 bg-white rounded-xl border border-[#E5E5EA]">
                                    <span className="text-lg">{f.icon}</span>
                                    <p className="text-[10px] text-[#8E8E93] mt-1">{f.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Accordion Details */}
                        <div className="bg-white rounded-2xl border border-[#E5E5EA] divide-y divide-[#E5E5EA]">
                            {[
                                { title: '📋 توضیحات محصول', content: `${product.description}` },
                                { title: '📏 مشخصات', content: 'جنس: نخ پنبه | قد: ۱۱۰ سانت | آستین: سه ربع | یقه: گرد' },
                                { title: '📦 روش ارسال', content: 'ارسال به سراسر کشور با پست پیشتاز (۲-۴ روز کاری). ارسال رایگان برای خریدهای بالای ۵۰۰ هزار تومان.' },
                            ].map((section, i) => (
                                <details key={i} className="group" open={i === 0}>
                                    <summary className="px-5 py-4 cursor-pointer text-sm font-medium text-[#2C2C2E] hover:text-[#FF5E8C] transition-colors list-none flex items-center justify-between">
                                        {section.title}
                                        <span className="text-[#8E8E93] group-open:rotate-180 transition-transform">▾</span>
                                    </summary>
                                    <p className="px-5 pb-4 text-sm text-[#8E8E93] leading-relaxed">{section.content}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RELATED PRODUCTS */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-[#2C2C2E]">🎯 محصولات مشابه</h2>
                        <Link  href="#" className="text-sm text-[#FF5E8C] font-medium hover:underline">مشاهده همه</Link >
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { name: 'مانتو طرح دار', price: '۴۵۰', img: '👚', rating: '۴.۶' },
                            { name: 'شومیز تابستانه', price: '۳۸۰', img: '👔', rating: '۴.۳' },
                            { name: 'دامن گلدار', price: '۲۹۰', img: '👘', rating: '۴.۸' },
                            { name: 'بلوز نخ پنبه', price: '۲۱۰', img: '👕', rating: '۴.۵' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-4 border border-[#E5E5EA] hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
                                <div className="bg-[#F8F8FA] rounded-xl p-6 mb-3 text-center relative">
                                    <span className="text-5xl group-hover:scale-110 inline-block transition-transform">{item.img}</span>
                                    <button className="absolute top-2 left-2 w-8 h-8 bg-white rounded-lg flex items-center justify-center text-sm shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:text-[#FF5E8C]">
                                        ♡
                                    </button>
                                </div>
                                <p className="text-sm font-medium text-[#2C2C2E] truncate">{item.name}</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="text-amber-400 text-xs">★</span>
                                    <span className="text-xs text-[#8E8E93]">{item.rating}</span>
                                </div>
                                <p className="text-sm font-bold text-[#2C2C2E] mt-1">{item.price} هزار ت</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
