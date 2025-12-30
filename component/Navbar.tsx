"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartShoppingContext } from '@/context/CartShoppingContext';

const Navbar = () => {
    const {cartTotalQty} = useCartShoppingContext();
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
            
            <div className='flex '>
               <Link className='text-2xl relative mr-3' href={"/cartShopping"}><FaShoppingCart /> </Link>
               <span className='absolute top-1 right-5 bg-red-500 text-amber-50 rounded-full px-2'>{cartTotalQty}</span>
            </div>
            
        </div>
    );
}

export default Navbar;
