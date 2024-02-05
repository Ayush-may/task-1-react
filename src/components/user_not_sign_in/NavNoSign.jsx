import React from 'react'
import whole from './../../assets/whole.jpg'
import { TfiSearch } from "react-icons/tfi";
import 'bootstrap/dist/css/bootstrap.css'
import './../../index.css'

const NavNoSign = () => {
    return (
        <nav className='navbar bg-white shadow-sm' >
            <img src={whole} className='logo' alt="" />
            <div style={{ backgroundColor: '#F2F2F2' }} className='rounded-[40px] inputArea py-1 px-6 flex items-center' >
                <button className='mr-2' > <TfiSearch /> </button>
                <input type="text" placeholder='search for your favorite groups in ATG' className='inputField text-sm bg-transparent text-stone-900 font-semibold' />
            </div>
            <p className='create_new font-semibold mt' >
                create account. <span className='text-sky-600' >it's free!</span>
            </p>
        </nav>
    )
}

export default NavNoSign