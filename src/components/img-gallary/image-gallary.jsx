import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import EranIMG from "../../../public/aot-eran.avif"
import MikashaIMG from "../../../public/mikasha-aot.avif"
import ArminIMG from "../../../public/aot-armin.jpg"




gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother)

function ImageGallary() {

    const main = useRef();

    const contain = useRef()

    useGSAP(() => {

        gsap.to(".left-box", {
            x: -2200,
            rotation: -60,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: contain.current,
                start: "top 60%",
                end: "bottom 40%",
                scrub: true,
                markers: false,
            }
        })

        gsap.to(".right-box", {
            x: 2200,
            rotation: 40,
            duration: 5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: contain.current,
                start: "top 70%",
                end: "bottom 50%",
                scrub: true,
                markers: false,
            }
        })

        gsap.to(".first-left", {
            x: -2200,
            rotation: -40,
            duration: 5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: contain.current,
                start: "top 80%",
                end: "bottom 60%",
                scrub: true,
                markers: false,
            }
        })

    },
        { scope: main }
    )

    return (
        <>
            <div ref={main} >

                <div className="h-[80vh] bg-black flex flex-col justify-center items-center gap-20  " >

                    <div className="first-left bg-red-600 h-[300px] w-[700px] rounded-md shadow-md overflow-hidden">
                        <img src={EranIMG} alt="ERAN" className="h-fit w-fit object-center" />
                    </div>
                    <div className="right-box bg-yellow-600 h-[300px] w-[700px] rounded-md shadow-md overflow-hidden">
                        <img src={MikashaIMG} alt="MIKASHA" className="h-fit w-fit object-center" />
                    </div>
                </div>
                <div ref={contain} className="h-[100vh] bg-black flex flex-col  items-center gap-40 " >

                    <div className="left-box bg-red-600 h-[300px] w-[700px] rounded-md shadow-md">
                        <img src={ArminIMG} alt="ARMIN" width={1000} height={1000} />
                    </div>
                    {/* <div className="right-box bg-yellow-600 h-[300px] w-[700px] rounded-md shadow-md">
                        Inner Secound Box
                    </div> */}
                </div>


            </div>

        </>
    );
}
export default ImageGallary;