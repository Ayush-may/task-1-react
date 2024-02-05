import React, { useRef, useState } from 'react'
import group from './../assets/Group.png'



const ModalCreateNew = () => {

    const [show, SetShow] = useState(true);

    const handleClick = ()=>{
        SetShow((prev)=> !prev);
    }

    return (
        <>
            {
                show && (
                    <>
                        <div className='modal-createNew'  >
                            <div className='modal-createNew-card'>
                                <div className='position-absolute modalClose' onClick={handleClick} >x</div>
                                <p className='modal-createNew-card-first' >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                                <div className='d-flex p-2 justify-content-between' >
                                    <div className='inputAndImage'>
                                        <div className='formArea'>
                                            <p className='createNew' >Create Account</p>
                                            <div className='inputArea '>
                                                <div className='row'>
                                                    <input type="text" className='col' placeholder='First Name' />
                                                    <input type="text" className='col' placeholder='Last Name' />
                                                </div>
                                                <div className='row'>
                                                    <input type="email" className='col' placeholder='Email' />
                                                </div>
                                                <div className='row'>
                                                    <input className='col' type="password" placeholder='Password' />
                                                </div>
                                                <div className='row'>
                                                    <input type="text" className='col' placeholder='Confirm Password' />
                                                </div>

                                                <div className='row'>
                                                    <input type="button" className='b col' value={'Create Account'} />
                                                </div>

                                                <div className='row mt-3'>
                                                    <button className='col facebook border py-1' >Sign up with facebook</button>
                                                </div>
                                                <div className='row mt-1 mb-3'>
                                                    <button className='col facebook border py-1' >Sign up with Google</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='modal-createNew-card-img'>
                                        <img src={group} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default ModalCreateNew