import React, {useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
    const [nav, setNav ] = useState(false);
    const Links = [
        {
            id: 1,
            child: (
                <>
                    E-mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:atallah.ndiaye@gmail.com"
        },
        {
            id: 2,
            child: (
                <>
                 Resume <BsFillPersonLinesFill size={30} />
                </>
            )
        }
    ]

  return (
    <div className="flex items-center w-full h-20 text-white bg-[#d5968c] px-4 fixed">
        <Link to={"Home"} smooth duration={500}> <h1 className="text-5xl font-signature ml-2"> Gavin </h1>
        </Link>

        {/* <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden snap-center">
        
        {nav ? <FaTimes size={35} /> : <FaBars size={35} /> }
        </div> */}
        {/* social links desktop */}
        {/* {nav && (
            <ul className=''>
                 {Links.map(({id, child, href}) => ( <li key={id} className={"flex items-start w-full"}>
              <a
                  href={href}
                  className=""
                  target='_blank'
                  rel="noreferrer"
                  >
                      {child}
                  </a>
                  </li>))}
                  </ul>     
        )} */}
    </div>
  )
}

export default Navbar;