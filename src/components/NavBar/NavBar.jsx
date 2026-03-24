import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigaitonData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const links = navigaitonData.map((route) => <Link key={route.id} route={route}></Link>)
    return (
        <div className='flex justify-between mx-5' onClick={() => setOpen(!open)}>
            <span className='flex gap-3'>
                {open? <X></X>: <Menu className='md:hidden'></Menu>}
                <ul className={`
                    md:hidden absolute duration-1000
                    ${open? 'top-6' : '-top-40'} 
                    bg-amber-200 `}>
                    {links}
                </ul>
                <h3>My nav</h3>
            </span>
            <ul className='hidden md:flex gap-3'>
                {links}
            </ul>
            {/* <ul className='flex gap-3'>
                {
                    navigaitonData.map ((router) => <li><a href={router.path}>{router.name}</a></li>)
                }
            </ul> */}
            {/* <ul className='flex gap-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">contact</a></li>
            </ul> */}
            <button>sign in</button>
        </div>
    );
};

export default NavBar;