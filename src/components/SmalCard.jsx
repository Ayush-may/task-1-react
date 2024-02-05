import React from 'react'
import { SlOptions } from "react-icons/sl";
import { IoEyeOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import './../index.css'
import 'bootstrap/dist/css/bootstrap.css'


const SmalCard = () => {
    return (
        <div className='small-card '>
            <div className='d-flex flex-column p-3 fw-bold card-content'>
                <p>💼️ Job</p>
                <div className='card-big-text '>
                    <div>
                        Software Developer
                    </div>
                    <SlOptions />
                </div>
                <div className='small-card-location' >
                    <p> <IoBagOutline className='d-inline mr-1' />Innovaccer Analytics Private Ltd. </p>
                    <p> <CiLocationOn className='d-inline' />Noida </p>
                </div>
                <button className='small-card-button' > Apply on Timesjob</button>
                <div className='card-footer d-flex justify-content-between align-items-center'>
                    <div className='card-footer-profile d-flex flex-row align-items-center ' >
                        <img src='https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IBXF0tcBNx-K51IQbebSM5dRYL5cOg7mj14e8r56kYOWfqDrL8gZPJ3p~mdOQYnXpd6JmdIsFf~Q1gBBHRQV7~NRqPTOPATFAACBhXRbDQRh9EUyCGC53JhT18HBMvRp3jR-QQ~QdBNSRirQOsGR320UprR-kYM~BN3OGx7C1mGsNjBRhgdVjILePOUN03ieri3ZAd4ZseM~7GxztZbuPiowTJxwa7HInmC2UBiqWmWXARNoh8PVpiEPw2jdUA510viH6-9VCmR-o2MshxwC-Tw0ZljRHizFqODSehyyCprN-a37jNbS8TeE1fL1sHyKYm-9faW1IyVhy986TO6JSQ__' alt="" />
                        <p className='mt-3 ml-3' >Joseph Gray</p>
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
}

export default SmalCard