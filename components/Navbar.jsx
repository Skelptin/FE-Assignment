import React from 'react';
import Logo from '@/public/logos.svg';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Sidebar } from './Sidebar';
import { Input } from "@/components/ui/input"
import './Form.css'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"


const Navbar = () => {
    const navLinks = [
        { name: 'Home', link: '/' },
        { name: 'Marketplace', link: '/marketplace' },
        { name: 'About Us', link: '/aboutus' },
        { name: 'Contact Us', link: '/contactus' },
    ];

    return (
        <nav className="flex justify-between lg:justify-around nav items-center p-5 shadow-2xl">
            <div className="logo ">
                <Link href={'/'}>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="50px" className='bg-white text-red-900' viewBox="0 0 200.000000 200.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M856 1719 c-57 -20 -156 -77 -156 -90 0 -4 6 -12 14 -18 10 -9 25 -4
65 23 63 43 104 56 198 63 87 7 187 -20 252 -67 34 -25 45 -29 57 -19 21 17
18 21 -34 56 -113 73 -273 94 -396 52z"/>
                            <path d="M880 1618 c-30 -11 -68 -30 -83 -41 -25 -17 -27 -22 -15 -34 12 -11
23 -9 77 19 56 29 73 33 141 33 68 0 85 -4 141 -33 54 -28 65 -30 77 -19 12
12 9 18 -17 36 -84 60 -222 77 -321 39z"/>
                            <path d="M742 1378 c-47 -30 -101 -86 -123 -130 -17 -34 -18 -41 -6 -70 8 -18
31 -55 51 -81 21 -27 35 -51 33 -53 -5 -5 -52 46 -79 86 -9 14 -17 19 -17 12
-1 -16 89 -113 99 -107 13 8 43 -33 34 -47 -6 -10 -4 -10 9 1 10 8 15 16 13
19 -3 2 0 14 6 26 7 11 11 24 10 28 -1 5 2 7 6 5 5 -1 38 30 74 70 37 39 68
69 71 67 2 -2 12 5 22 16 10 11 26 20 35 20 10 0 23 7 31 16 11 14 10 15 -7
12 -11 -2 -18 2 -17 9 2 7 -3 12 -10 10 -6 -1 -11 4 -9 11 1 8 -2 11 -7 7 -6
-3 -41 16 -78 43 -77 55 -96 59 -141 30z"/>
                            <path d="M870 1379 c19 -12 44 -29 56 -38 11 -9 3 1 -19 22 -22 20 -47 37 -56
37 -9 0 0 -9 19 -21z"/>
                            <path d="M333 1252 c-98 -150 -98 -354 0 -504 35 -52 39 -55 56 -34 10 12 6
23 -19 57 -39 54 -70 155 -70 229 0 74 31 175 70 229 25 34 29 45 19 57 -17
21 -21 18 -56 -34z"/>
                            <path d="M1610 1285 c-11 -13 -9 -19 7 -38 55 -59 88 -175 80 -276 -7 -88 -21
-130 -63 -192 -27 -40 -32 -55 -23 -65 17 -21 21 -18 56 34 98 145 98 354 0
504 -35 53 -39 55 -57 33z"/>
                            <path d="M423 1203 c-35 -49 -63 -140 -63 -203 0 -63 28 -154 63 -203 17 -25
22 -27 34 -15 12 13 10 22 -16 70 -52 100 -50 208 6 307 22 38 23 45 10 58
-13 13 -17 11 -34 -14z"/>
                            <path d="M1542 1218 c-10 -12 -6 -27 20 -78 29 -55 33 -72 33 -140 0 -68 -4
-85 -33 -141 -28 -54 -30 -65 -19 -77 12 -12 18 -9 37 17 34 48 60 135 60 199
0 67 -30 164 -63 206 -19 24 -25 26 -35 14z"/>
                            <path d="M994 1080 c-33 -26 -75 -69 -92 -95 l-31 -47 62 -56 c34 -31 80 -76
102 -99 23 -24 48 -43 57 -43 20 0 134 103 158 143 l17 27 -94 96 c-51 53 -93
99 -93 104 0 24 -32 12 -86 -30z"/>
                            <path d="M1317 879 c31 -34 83 -64 83 -47 -1 24 -25 53 -45 54 -11 1 -29 5
-40 9 -19 8 -19 7 2 -16z"/>
                            <path d="M1343 822 c4 -13 -100 -132 -108 -124 -5 4 -5 -1 -2 -11 4 -11 3 -16
-3 -12 -6 4 -22 -3 -35 -14 l-26 -19 22 -21 c27 -25 42 -26 63 -6 8 8 17 15
21 15 8 0 91 87 112 117 12 18 12 26 2 45 -12 23 -28 38 -41 38 -5 0 -7 -4 -5
-8z"/>
                            <path d="M1114 660 c12 -41 29 -60 53 -60 15 0 -18 58 -46 84 -19 17 -19 17
-7 -24z"/>
                            <path d="M781 456 c-16 -19 26 -49 105 -76 101 -35 233 -18 315 41 26 18 29
24 17 36 -12 11 -23 9 -78 -19 -55 -29 -73 -33 -139 -33 -64 0 -85 5 -136 30
-33 17 -63 31 -66 33 -3 1 -11 -4 -18 -12z"/>
                            <path d="M709 384 c-7 -9 -9 -18 -3 -22 104 -74 184 -102 294 -102 94 0 177
24 252 73 52 34 55 39 35 55 -10 8 -24 4 -58 -18 -75 -51 -159 -73 -248 -67
-97 7 -138 19 -201 62 -29 19 -53 35 -55 35 -1 0 -8 -7 -16 -16z"/>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className='sm:visible  md:visible max-lg:hidden'>
                <Input
                    className="rounded-3xl w-3/4 mx-auto item-center border-white"
                    placeholder="Search"
                />
            </div>
            {console.log(Logo)}
            <ul className="hidden lg:flex gap-10">
                {navLinks.map(({ name, link }) => (
                    <li key={link}>
                        <Link href={link}>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="lg:hidden">
            
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <Button variant="outline">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="absolute bg-slate-200 right-0 top-0 h-full w-full">
                    
                        <div className="p-4 h-full flex flex-col justify-between">
                            <div>
                                <ul className="flex flex-col gap-4">
                                    {navLinks.map(({ name, link }) => (
                                        <li key={link}>
                                            <Link href={link}>
                                                {name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <DrawerClose asChild>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav>
    );
};

export default Navbar;
