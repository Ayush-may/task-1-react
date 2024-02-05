import React from 'react'
import { SlOptions } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import './../index.css'
import 'bootstrap/dist/css/bootstrap.css'


const Card = ({ data }) => {
    return (
        data.map(element => {
            return (
                <div className='card-big ' >
                    <div className='img-con' >
                        <img src={`${element.bigImage}`} alt="" />
                    </div>
                    <div className='d-flex flex-column p-3 fw-bold card-content'>
                        <p>{element.type}</p>
                        <div className='card-big-text '>
                            <div className='md-fs-4' >
                                {element.bigText}
                            </div>
                            <SlOptions />
                        </div>
                        <p className='smaller-text-card' >{element.smallText}</p>

                        <div className='card-footer d-flex justify-content-between align-items-center'>
                            <div className='card-footer-profile d-flex flex-row align-items-center ' >
                                <img src={`${element.profile.img}`} alt="" />
                                <p className='mt-3 ml-3' >{element.profile.name}</p>
                            </div>
                            <div className='card-footer-share'>
                                <div className='d-flex gap-2 align-items-center' >
                                    <IoEyeOutline className='mb-3' color='#525252' />
                                    <p className=''>1.4k views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Card