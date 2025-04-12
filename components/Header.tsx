"use client";
import Image from "next/image";
import Logo from "../public/logo svg.svg"
import Link from "next/link";
import {HiBars4, HiXMark} from "react-icons/hi2";
import {useState} from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    return <header>
        <div className={"bg-white "}>
            <Link href={"/home"}>
            <p className={"text-xl font-bold text-center flex gap-2 items-center justify-center h-12 uppercase max-sm:text-lg"}>Go
                to
                the website in English <Image src="/english icon.png" alt={"english language"} width={30} height={30}
                                              className={"w-7 h-7 max-sm:w-6 max-sm:h-6"}/></p>
            </Link>
        </div>
        <div className={"bg-black h-[211px] flex justify-center items-center max-sm:h-[170px]"}>
            <Link href={"/"}><Image src={Logo} alt={"VSD logo"}
                                    className={"w-[300px] h-[163px] max-sm:w-[250px]"}/></Link>
        </div>

        <nav
            className={"bg-black flex gap-6 justify-center text-white h-[106px] items-center border-t border-red-700 max-sm:gap-5 max-sm:h-[80px]"}>
            <Link href={"/"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>Početna</Link>
            <Link href={"https://all-for-car-ecommerce.vercel.app"} className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>internet
                prodavnica</Link>
            <Link href={"/o-nama"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>O
                nama</Link>
            <Link href={"/kontakt"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>kontakt</Link>
            <Link href={"/nase-prodavnice"}
                  className={"uppercase font-bold text-2xl max-md:text-xl max-sm:text-lg max-sm:hidden"}>Prodavnice</Link>
            {!isMenuOpen ? <HiBars4 className={"text-white text-3xl sm:hidden cursor-pointer"} onClick={toggleMenu}/> :
                <HiXMark className={"text-white text-3xl sm:hidden cursor-pointer"} onClick={toggleMenu}/>}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className="bg-black text-white flex flex-col items-center gap-4 py-4 sm:hidden transition-all">
                <Link href={"/"} className={"uppercase font-bold text-xl"}>
                    Početna
                </Link>
                <Link href={"https://all-for-car-ecommerce.vercel.app"} className={"uppercase font-bold text-xl"}>
                    internet prodavnica
                </Link>
                <Link href={"/o-nama"} className={"uppercase font-bold text-xl"}>
                    O nama
                </Link>
                <Link href={"/kontakt"} className={"uppercase font-bold text-xl"}>
                    kontakt
                </Link>
                <Link href={"/nase-prodavnice"} className={"uppercase font-bold text-xl"}>
                    Prodavnice
                </Link>
            </div>
        )}
    </header>
}

export default Header;