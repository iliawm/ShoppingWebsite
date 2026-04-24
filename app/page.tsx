import Navbar from "@/Components/Navbar";
import Posts from "@/Components/posts";
import Herosection from "@/Components/Herosection";
import Offer from "@/Components/Offer";
import {Suspense} from "react";



export default function Home() {
  return (
  <main className={"w-full h-fit scroll-smooth snap-y snap-mandatory "} dir={"rtl"}>
      <div className={"flex w-full h-full flex-col gap-10 pb-20"}>
          <section  className={"w-full shrink-0 h-fit"}>
              <Posts/>
          </section>
          <section className={"w-full h-fit relative shrink-0"}>
                <Herosection/>
          </section>
          <section className={"w-full shrink-0 h-fit"}>
              <Suspense fallback={<div>loading...</div>}>
            <Offer/>
              </Suspense>
          </section>
      </div>
  </main>
  );
}
