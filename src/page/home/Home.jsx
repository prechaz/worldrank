import React from 'react'
import logo from '../../assets/Logo.svg'
import style from './home.module.css'

import Search from '../../component/Search'
import Aside from '../../component/Aside'
function Home() {
    return (
        <section>
        <div className={style.logo}>
        <img src={logo} alt="" />
        </div>
        <div className={style.container}>
            <Search/>
            <div className={style.mainContent}>
                <div className={style.asideFilter}>
                    <Aside/>
                </div>
                <div className={style.countryList}>
                </div>
            </div>

        </div>
            
        </section>
    )
}

export default Home
