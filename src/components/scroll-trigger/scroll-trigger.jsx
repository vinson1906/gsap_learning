import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";


import "./scroll-trigger.css"

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export const ScrollTriggerExample = () => {

    const main = useRef()

    const smoother = useRef()

    const scrollTo = () => {
        smoother.current.scrollTo('.box-c', true, 'center center')
    }

    useGSAP(() => {
        smoother.current = ScrollSmoother.create({
            smooth: 2,
            effects: true
        })

        ScrollTrigger.create({
            trigger: '.box-c',
            pin: true,
            start: 'center center',
            end: '+=300',
            markers: true
        })
    }, {
        scope: main
    })

    return (
        <>
            <div id="smooth-wrapper" className="z-[900] " ref={main}>
                <div id="smooth-content">
                    <header className="header">
                        <h2 className="title">GSAP ScrollSmoother in React</h2>
                        <button className="btn cursor-pointer" onClick={scrollTo}>
                            Jump to C
                        </button>
                    </header>
                    <div className="box box-a bg-blue-400 h-[60px] w-[60px] flex justify-center items-center" data-speed="0.5">
                        a
                    </div>
                    <div className="box box-b bg-orange-400 h-[60px] w-[60px] flex justify-center items-center" data-speed="0.8">
                        b
                    </div>
                    <div className="box box-c bg-red-400 h-[60px] w-[60px] flex justify-center items-center" data-speed="1.5">
                        c
                    </div>
                    <div className="line"></div>
                </div>
            </div >
        </>
    )
}