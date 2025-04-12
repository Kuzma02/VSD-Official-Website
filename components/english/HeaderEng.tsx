"use client";
import Image from "next/image";
import Logo from "../../public/logo svg.svg"
import Link from "next/link";
import {HiBars4, HiXMark} from "react-icons/hi2";
import {useState} from "react";

const HeaderEng = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return <header>
        <div className={"bg-white "}>
            <Link href={"/"}>
                <p className={"text-xl font-bold text-center flex gap-2 items-center justify-center h-12 uppercase max-sm:text-lg"}>Idi na sajt na srpskom jeziku <Image src="/serbia icon.png" alt={"serbian language"} width={30}
                                                  height={30}
                                                  className={"w-7 h-7 max-sm:w-6 max-sm:h-6"}/></p>
            </Link>
        </div>
        <div className={"bg-black h-[211px] flex justify-center items-center max-sm:h-[170px]"}>
            <Link href={"/home"}><Image src={Logo} alt={"VSD logo"}
                                    className={"w-[300px] h-[163px] max-sm:w-[250px]"}/></Link>
        </div>

        <nav
            className={"bg-black flex gap-6 justify-center text-white h-[106px] items-center border-t border-red-700 max-sm:gap-5 max-sm:h-[80px]"}>
            <Link href={"/home"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>Home</Link>
            <Link href={"https://all-for-car-ecommerce.vercel.app"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>Web Shop</Link>
            <Link href={"/about-us"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>About Us</Link>
            <Link href={"/contact"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>Contact</Link>
            <Link href={"/our-shops"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>Shops</Link>
            {!isMenuOpen ? <HiBars4 className={"text-white text-3xl sm:hidden cursor-pointer"} onClick={toggleMenu}/> :
                <HiXMark className={"text-white text-3xl sm:hidden cursor-pointer"} onClick={toggleMenu}/>}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="bg-black text-white flex flex-col items-center gap-4 py-4 sm:hidden transition-all">
                <Link href={"/home"} className={"uppercase font-bold text-xl"}>
                    Home
                </Link>
                <Link href={"https://all-for-car-ecommerce.vercel.app"} className={"uppercase font-bold text-xl"}>
                    Web Shop
                </Link>
                <Link href={"/about-us"} className={"uppercase font-bold text-xl"}>
                    About Us
                </Link>
                <Link href={"/contact"} className={"uppercase font-bold text-xl"}>
                    Contact
                </Link>
                <Link href={"/our-shops"} className={"uppercase font-bold text-xl"}>
                    Shops
                </Link>
            </div>
        )}
    </header>
}

export default HeaderEng;