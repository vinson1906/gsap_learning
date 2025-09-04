import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function FromTo() {

    useGSAP(() => {
        gsap.to('.box-1', {
            x: 300,
            rotation: 360,
            borderRadius: '100%',
            duration: 1,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut'
        })
    })

    useGSAP(() => {
        gsap.from('.box-2',{
            x: 300,
            duration: 1,
            yoyo: true,
            repeat: -1,
            borderRadius: '100%',
            ease:'power1.inOut',
            scale:0.5,
            rotate:360
        })
    })

    useGSAP(() => {
        gsap.fromTo('.box-3',{
            x:0,
            rotation:0,
            borderRadius:'0%',
            scale:1
        },{
            x:3000,
            rotation:360,
            borderRadius:'100%',
            scale:0.5,
            duration:2,
            repeat:-1,
            yoyo:true,
            ease:'power1.inOut'
        })
    },[])


    return (
        <>
            <div className='ml-10 '>
                <div>
                    <p className='text-purple-700 font-bold text-2xl'>this is gsap.to() method</p>
                </div>
                <div className='box-1 w-[150px] h-[150px] bg-purple-700 m-10 rounded-lg'>

                </div>
            </div>

            <div className='ml-10 '>
                <h1 className='text-purple-700 font-bold text-2xl'>this is gsap.from() method </h1>
                <div className='box-2 w-[150px] h-[150px] bg-purple-700 m-10 rounded-lg'>

                </div>
            </div>

            <div className='ml-10 '>
                <h1 className='text-purple-700 font-bold text-2xl'>this is gsap.fromTo() method </h1>
                <div className='box-3 w-[150px] h-[150px] bg-purple-700 m-10 rounded-lg'>

                </div>
            </div>
        </>

    )
}

export default FromTo