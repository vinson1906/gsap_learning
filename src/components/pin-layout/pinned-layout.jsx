import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import { ChevronDown } from "lucide-react";

import "./layout.css";

gsap.registerPlugin(Observer);

export const LayoutExample = () => {
    const main = useRef();

    useGSAP(
        () => {
            const panels = gsap.utils.toArray(".panel");
            const total = panels.length;
            let current = 0;
            let animating = false;

            
            gsap.set(panels, { yPercent: 100, zIndex: 0 });
            gsap.set(panels[0], { yPercent: 0, zIndex: 1 });

            const goTo = (index, dir) => {
               
                if (animating || index < 0 || index >= total) return;
                animating = true;

                const next = index;
                const from = panels[current];
                const to = panels[next];

              
                gsap.set(from, { zIndex: 1 });
                gsap.set(to, { zIndex: 2, yPercent: dir === 1 ? 100 : -100 });

                gsap
                    .timeline({
                        defaults: { duration: 1.1, ease: "power3.inOut" },
                        onComplete: () => {
                            gsap.set(from, { yPercent: 100, zIndex: 0 });
                            current = next;
                            animating = false;
                        },
                    })
                    .to(to, { yPercent: 0 }, 0)
                    .to(from, { yPercent: dir === 1 ? -25 : 25 }, 0); 
            };


            Observer.create({
                type: "wheel,touch,pointer",
                wheelSpeed: -1,
                tolerance: 10,
                preventDefault: true,
                onUp: () => goTo(current + 1, 1),
                onDown: () => goTo(current - 1, -1),
            });

            const onKey = (e) => {
                if (e.key === "ArrowDown" || e.key === "PageDown") goTo(current + 1, 1);
                if (e.key === "ArrowUp" || e.key === "PageUp") goTo(current - 1, -1);
            };
            window.addEventListener("keydown", onKey);

            return () => window.removeEventListener("keydown", onKey);
        },
        { scope: main }
    );

    return (
        <main className="main-section" ref={main}>
            <section className="description panel">
                <div className="head-desc">
                    <h1 className="text-6xl font-bold">Layered Pinning Animation</h1>
                    <p>Use pinning to layer panels on top of each other as you scroll.</p>
                </div>

                <div className="scroll text-black flex flex-col items-center p-0 m-0">
                    <p>Scroll Down</p>
                    <ChevronDown size={40} className="animate-bounce" />
                </div>
            </section>
            <section className="panel bg-gray-900 text-white">One</section>
            <section className="panel bg-violet-500 text-white">Two</section>
            <section className="panel bg-orange-600 text-white">Three</section>
            <section className="panel bg-red-600 text-white">Four</section>
        </main>
    );
};