import React from 'react';
import Link from './Link';

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
    return (
        <div>
            <ul className='flex gap-3'>
                {
                    navigaitonData.map((route) => <Link key={route.id} route={route}></Link>)
                }
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
        </div>
    );
};

export default NavBar;