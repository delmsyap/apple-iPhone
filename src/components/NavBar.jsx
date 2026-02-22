import React from 'react'
import {navLists} from "../constants";
import {appleImg, searchImg, bagImg} from "../utils";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img src={appleImg} alt='Apple logo'/>

                <ul>
                    {navLists.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className='flex-center gap-7'>
                    <button>
                        <img src={searchImg} alt='Search' width={18} height={18} />
                    </button>
                    <button>
                        <img src={bagImg} alt='Cart' width={18} height={18} />
                    </button>
                </div>
            </nav>
        </header>
    )
}


export default NavBar