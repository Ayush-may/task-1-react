import React from 'react'
import './../index.css'

const FollowUser = () => {
    return (
        <>
            <div className='d-flex flex-row justify-content-between gap-5' >
                <div className='recommed-name' >
                    <img src="https://www.figma.com/file/UdeH6M0qJgUS05xNwgunYZ/image/bb0d5f137ffa8afe7647578af2381ac9090c32e2" alt="" />
                    <p>Leisure</p>
                </div>
                <button className='recomend-follow'>follow</button>
            </div>
        </>
    )
}

export default FollowUser