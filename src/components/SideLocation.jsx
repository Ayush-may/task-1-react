import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import './../index.css'
import 'bootstrap/dist/css/bootstrap.css'

const SideLocation = () => {
    return (
        <div className='sideLocationNotLogin'>
            <div className='sideLocation_upperPart'>
                <div>
                    < CiLocationOn className='d-inline mr-1' />
                    <input type="text" value={'Noida , India'} />
                </div>
                <FaPen />
            </div>
            <p className='sideLocation_lowerPart'>Your location will help us serve better and extend a personalised experience.</p>
        </div>
    )
}

export default SideLocation