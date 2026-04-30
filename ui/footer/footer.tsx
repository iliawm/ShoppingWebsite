import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className={
                "w-full h-fit bg-[#2c2c2c] text-white/80 pt-10 pb-5 mt-20 border-t border-white/10"
            }
            dir={"rtl"}
        >
            <div
                className={
                    "flex w-full h-full flex-col lg:flex-row gap-8 px-5 lg:px-20"
                }
            >
                <div className={"flex flex-col gap-3 w-full lg:w-1/3"}>
                    <Link href={"/"} className={"flex items-center gap-2"}>
                        <div className={"relative w-10 h-10 rounded-lg overflow-hidden"}>
                            <Image
                                src={"/placeholder.png"}
                                alt={"فروشگاه من"}
                                fill
                                sizes="40px"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <h2 className={"text-xl font-bold text-white"}>فروشگاه من</h2>
                    </Link>
                    <p className={"text-sm leading-7 text-white/60"}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                        استفاده از طراحان گرافیک است.
                    </p>
                </div>

                <div className={"flex flex-col gap-3 w-full lg:w-1/6"}>
                    <h3 className={"text-lg font-semibold text-white mb-2"}>
                        دسترسی سریع
                    </h3>
                    <Link
                        href={"/"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        خانه
                    </Link>
                    <Link
                        href={"/shop"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        فروشگاه
                    </Link>
                    <Link
                        href={"/about"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        درباره ما
                    </Link>
                    <Link
                        href={"/contact"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        تماس با ما
                    </Link>
                    <Link
                        href={"/blog"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        وبلاگ
                    </Link>
                </div>

                <div className={"flex flex-col gap-3 w-full lg:w-1/6"}>
                    <h3 className={"text-lg font-semibold text-white mb-2"}>
                        خدمات مشتریان
                    </h3>
                    <Link
                        href={"/faq"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        سوالات متداول
                    </Link>
                    <Link
                        href={"/shipping"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        روش‌های ارسال
                    </Link>
                    <Link
                        href={"/returns"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        مرجوعی
                    </Link>
                    <Link
                        href={"/privacy"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        حریم خصوصی
                    </Link>
                    <Link
                        href={"/terms"}
                        className={"text-sm text-white/60 hover:text-white transition-colors"}
                    >
                        قوانین و مقررات
                    </Link>
                </div>

                <div className={"flex flex-col gap-4 w-full lg:w-1/3"}>
                    <h3 className={"text-lg font-semibold text-white mb-2"}>
                        ارتباط با ما
                    </h3>
                    <div className={"flex flex-col gap-2"}>
                        <p className={"text-sm text-white/60"}>
                            <span className={"font-medium text-white/80"}>آدرس: </span>
                            تهران، خیابان ولیعصر، کوچه برلیان، پلاک ۱۲
                        </p>
                        <p className={"text-sm text-white/60"}>
                            <span className={"font-medium text-white/80"}>تلفن: </span>
                            ۰۲۱-۱۲۳۴۵۶۷۸
                        </p>
                        <p className={"text-sm text-white/60"}>
                            <span className={"font-medium text-white/80"}>ایمیل: </span>
                            info@example.com
                        </p>
                    </div>

                    <div className={"flex gap-3 mt-2"}>
                        <Link
                            href={"#"}
                            className={
                                "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fc1374] transition-colors"
                            }
                            aria-label={"اینستاگرام"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={"text-white"}
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </Link>
                        <Link
                            href={"#"}
                            className={
                                "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fc1374] transition-colors"
                            }
                            aria-label={"تلگرام"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={"text-white"}
                            >
                                <path d="M21.5 3.5L2.5 10.5L10.5 13.5L13.5 21.5L21.5 3.5Z"></path>
                                <line x1="10.5" y1="13.5" x2="21.5" y2="3.5"></line>
                            </svg>
                        </Link>
                        <Link
                            href={"#"}
                            className={
                                "w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#fc1374] transition-colors"
                            }
                            aria-label={"توییتر"}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={"text-white"}
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            <div
                className={
                    "w-full h-fit border-t border-white/10 mt-8 pt-5 px-5 lg:px-20"
                }
            >
                <div
                    className={
                        "flex flex-col sm:flex-row items-center justify-between gap-3"
                    }
                >
                    <p className={"text-sm text-white/60"}>
                        © {new Date().getFullYear()} تمامی حقوق برای <strong>فروشگاه من</strong> محفوظ است.
                    </p>
                    <div className={"flex gap-4"}>
                        <div className={"relative w-[60px] h-[20px]"}>
                            <Image
                                src={"/placeholder.png"}
                                alt={"زرین پال"}
                                fill
                                sizes="60px"
                                style={{ objectFit: "contain" }}
                                className={"opacity-60 hover:opacity-100 transition-opacity"}
                            />
                        </div>
                        <div className={"relative w-[60px] h-[20px]"}>
                            <Image
                                src={"/placeholder.png"}
                                alt={"سامان"}
                                fill
                                sizes="60px"
                                style={{ objectFit: "contain" }}
                                className={"opacity-60 hover:opacity-100 transition-opacity"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
