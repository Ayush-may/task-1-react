import React from 'react'
import './../index.css'
import 'bootstrap/dist/css/bootstrap.css'

const BigImage = () => {
    return (
        <div className='w-full h-[500px] bigImage  overflow-hidden object-top relative' >
            <div className='computer-text' >
                <p className='text-white fw-bold'>Computer Engineering</p>
                <p className='text-white fs-6' >142,765 Computer Engineers follow this</p>
            </div>
            <div className='img-section ' >
                <div className='blackImg' ></div>
                <img src="https://s3-alpha-sig.figma.com/img/756e/302b/7d56a759ac56bc165f65c40094aba4e8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WyKQetNKMXvHoHoOmLLTWVpXLIZODFtvWUsu-b8f~8ThF28scIGqJbzns9MVqpJ1ODV2Fvj0hkRdOP4rMRzzVBmxr56~mBCsO91~5nhdqFMrpISDQwMNuX0u5SjOX-XLEwBW2RCHxmwf0H~oFtiZr7OCiqeuEN8FMWz5wFaBUOkXSy1c~ynbG4D0dDVe2YwHxXUFVtjgEHVs~Rljkk98D7u1txGVX0TEVPr-j61Bu8lWQXjDz75m-s6UCgNBsX4gy1iZEytMhc173djJ3zzsb9aNegYXyTRFCGaHu04mNOZvsPIg5HPTTP3H-UajVwWuD1OK3MjHhJZ5u6bP7~VPDg__"
                    className='w-full h-full object-cover object-center absolute top-0 left-0 z-[-1]'
                    alt="" />
            </div>
        </div>
    )
}

export default BigImage