import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import NavNoSign from './components/user_not_sign_in/NavNoSign';
import SelectionAreaNoSignIn from './components/user_not_sign_in/SelectionAreaNoSignIn';
import CardCombination from './components/CardCombination';
import SmalCard from './components/SmalCard';
import BigImage from './components/BigImage';
import SideLocationWithFollow from './components/SideLocationWithFollow';
import ModalCreateNew from './components/ModalCreateNew';
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


const App = () => {
    return (
        <>
            <ModalCreateNew />
            <div className='mb-5'>
                <NavNoSign />
                <BigImage />
                <SelectionAreaNoSignIn className='' />
                <div className='content-section p-2 d-flex  flex-row' >
                    <div className='' >
                        <CardCombination />
                        <SmalCard />
                    </div>
                    <div>
                        <SideLocationWithFollow />
                    </div>
                </div>
            </div>

        </>
    )
}

export default App