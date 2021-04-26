import React, { useState, useEffect } from "react"



const ScrollTop = () => {


    const [buttonTop, setButtonTop] = useState(false)

    const visibility = () => {
        if(window.pageYOffset > 600) {
            setButtonTop(true)
            
        } else {
            setButtonTop(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", visibility)
    })

    
    return (
        <div className={buttonTop ? 'opacity-100 transition ease-in-out duration-300' : 'opacity-0 transition ease-in-out duration-300'}>
            <a id="buttonTop" className="w-12 bg-white rounded-full h-12 fixed z-50 bottom-12 right-5 text-center " href="#top">
                        <p className="mt-2 antonio text-black font-thin text-4xl">^</p>
                        <p className="antonio animate">Ke-atas</p>
            </a>
        </div>
    )
}

export default ScrollTop