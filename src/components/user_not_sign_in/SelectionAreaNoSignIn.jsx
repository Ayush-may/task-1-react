import React from 'react'
import './../../index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { IoPeople } from "react-icons/io5";

const SelectionAreaNoSignIn = () => {
    return (
        <>
            {/* selction area */}
            <div className='first-section w-full ' >
                <div className='article-section relative mt-3 d-flex justify-content-between align-items-center' >
                    <ul className='d-flex article-ul align-items-center' >
                        <li>All Posts(32)</li>
                        <li>Article</li>
                        <li>Event</li>
                        <li>Education</li>
                        <li>Job</li>
                    </ul>
                    <div className='d-flex justify-content-between align-items-center gap-3' >
                        <button className='write_post shadow-sm' >Write Post</button>
                        <button className='join_group shadow-sm' > <IoPeople className='ml-3 mr-2' /> Join Group</button>
                    </div>
                    <div className='last_border' ></div>
                </div>
            </div>
        </>
    )
}

export default SelectionAreaNoSignIn