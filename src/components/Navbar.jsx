import React from 'react'
import { TrainFront,Spline,Map,User } from 'lucide-react';
import LOGO from "../assets/KK_initials.png"

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a href="/find-route">Find Route </a></li>
                        <li><a href="/network-map">Network</a></li>
                        {/* <li>
                            <a>Lines</a>
                            <ul className="p-2">
                                <li><a>Network Map</a></li>
                                
                            </ul>
                        </li> */}
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" href="/"><TrainFront /> Home</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/find-route'>Find Route<Spline/></a></li>
                    <li><a href="/network-map">Network Map<Map/></a></li>
                    {/* <li>
                        <details>
                            <summary>Lines</summary>
                            <ul className="p-2">
                                <li><a href="/network/network-map" >Network Map</a></li>
                                
                            </ul>
                        </details>
                    </li> */}
                    <li><a href='/about'>About<User/></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/about" className="btn">
                    <img src={LOGO} className='w-10' />
                </a>
            </div>
        </div>
    )
}

export default Navbar
