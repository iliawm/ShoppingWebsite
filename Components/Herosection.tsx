"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Herosection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const [index, setIndex] = useState(0);
    const [dir, setDir] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const hero = [
        { src: "/Herobanners/hero.jpg", link: "/products?category=laptop" },
        { src: "/Herobanners/hero2.webp", link: "/courses?category=school" },
        { src: "/Herobanners/hero3.webp", link: "/courses?category=school" }
    ];

    const scrollTo = (newIndex: number) => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollTo({
            left: newIndex * scrollRef.current.clientWidth,
            behavior: "smooth"
        });
        setIndex(newIndex);
    };

    const next = () => {
        let newIndex = index + dir;
        if (newIndex >= hero.length) {
            newIndex = hero.length - 2;
            setDir(-1);
        } else if (newIndex < 0) {
            newIndex = 1;
            setDir(1);
        }
        scrollTo(newIndex);
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(next, 3000);
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [index, dir]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        let newIndex = direction === "right" ? index + 1 : index - 1;
        if (newIndex < 0) newIndex = 0;
        if (newIndex >= hero.length) newIndex = hero.length - 1;
        scrollTo(newIndex);
        resetTimer();
    };

    return (
        <div className="relative w-full">
            <div
                ref={scrollRef}
                className="w-full flex overflow-x-auto snap-mandatory snap-x hide-scrollbar gap-2"
                dir="ltr"
                style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            >
                {hero.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative w-full shrink-0 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] snap-start block"
                    >
                        <Image src={item.src} alt="" fill className="md:object-fill object-cover" priority={idx === 0} sizes="100vw" />
                    </Link>
                ))}
            </div>

            {!isMobile && (
                <>
                    <button onClick={() => scroll("left")} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10">
                        <ChevronLeft size={32} />
                    </button>
                    <button onClick={() => scroll("right")} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10">
                        <ChevronRight size={32} />
                    </button>
                </>
            )}
        </div>
    );
};

export default Herosection;
