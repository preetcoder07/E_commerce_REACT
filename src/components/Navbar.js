import React from 'react'

export default function Navbar(props) {


    return (
        <div>
            <ul className='nav_items'>
                <li className='webname'><a href='/home'>  𝐁𝐥𝐢𝐧𝐤𝐁𝐚𝐲</a></li>
                <li><a href='/home'>𝐇𝐨𝐦𝐞</a></li>
                <li><a href='#'>𝐂𝐨𝐧𝐭𝐚𝐜𝐭</a></li>
                <li><a href='#'>𝐇𝐞𝐥𝐩</a></li>



                <div className='search_bar'>
                    <form>
                        <div className="dropdown">
                            <button className="dropbtn">Products</button>

                            <div className="dropdown-content" style={{ backgroundColor: props.darkmode === true ? "black" : "white", color: props.darkmode ? "white" : "black" }} >
                                <a style={{ backgroundColor: props.darkmode === true ? "black" : "white", color: props.darkmode ? "white" : "black" }} href="/electronics">Electronics</a>
                                <a href="/men's clothing">Men's clothing</a>
                                <a href="/women's clothing">Women's clothing</a>
                                <a href="/jewelery">Jewelery</a>

                            </div>
                        </div>
                        <input className='input_field' type='text' placeholder='Search items' />
                        <button className='btn' > <img className='searchicon' src="icons8-search-50.png" alt="" /></button>
                    </form>
                </div>
                <button className='darkbtn' onClick={props.toggle} >Dark mode</button>
                <li className='cart_nav'><a href='/carts'>🛒𝘾𝙖𝙧𝙩</a></li>

            </ul>

        </div>
    )
}

