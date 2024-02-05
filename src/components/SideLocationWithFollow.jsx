import React from 'react'
import { BsHandThumbsUp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import FollowUser from './FollowUser';
import './../index.css'
import 'bootstrap/dist/css/bootstrap.css'

const SideLocationWithFollow = () => {
    return (
        <div className='sideLocationNotLogin-wrapper' >
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

            <div className='recommended ' >
                <p> < BsHandThumbsUp className='d-inline' /> RECOMMENDED GROUPS</p>
                <div className='d-flex flex-column align-items-center justify-content-between gap-2' >
                    <FollowUser />
                    <FollowUser />
                    <FollowUser />
                </div>
            </div>
        </div>
    )
}

export default SideLocationWithFollow