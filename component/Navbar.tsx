"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Container from './Container';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
const pathname = usePathname();

    const NavLinks = [
        {
            href: "/",
            title: "Home"
        },
        {
            href: "/store",
            title: "Store"
        }
    ]
    return (
        <div className='shadow py-4 mb-3 flex items-center justify-between px-9'>
            <div>
                {NavLinks.map((item) => (
                <Link key={item.href} className={`mr-3 font-bold ${pathname === item.href ? "bg-blue-500 py-1 px-3 rounded-[8px] text-amber-50" : ""}`} href={item.href}>{item.title}</Link>
            ))}
            </div>
            
            <div className='text-2xl'>
               <Link href={"/cartShopping"}><FaShoppingCart /> </Link>
            </div>
            
        </div>
    );
}

export default Navbar;
