import React from 'react'



function Navbar() {
    const navlinks = [
        {
            label: 'From To Animation',
            link: '/from-to'
        },
        {
            label: 'Scroll Trigger',
            link: '/scroll-trigger'
        },
    ]


    return (
        <div>
            <div className='flex items-center  bg-gray-900 py-[10px] mx-4 rounded-xl mb-10'>
                {
                    navlinks.map((ele, i) => (
                        <div key={i}>
                            <a href={ele.link}>
                                <p className='px-5 mx-[5px] hover:cursor-pointer  traking-[1px] hover:bg-purple-800 rounded-xl ease-in transition-all'>
                                    {ele.label}
                                </p>
                            </a>
                        </div>
                    ))
                }
            </div>
            <div className='flex flex-col  mt-20 ml-5'>
                <h1 className='text-3xl font-bold mb-4'>In this section, we have learned about GSAP animations!</h1>
                {
                    navlinks.map((ele,i) => (
                        <div key={i} className='flex pb-5'>
                            <p>{i +1}.)</p>
                            <p className='px-5  hover:cursor-pointer  traking-[1px]  rounded-xl ease-in transition-all'>{ele.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default Navbar