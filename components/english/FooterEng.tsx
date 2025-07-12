import Image from "next/image";
import {FaFacebook} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa6";
import {FaYoutube} from "react-icons/fa6";
import {FaTiktok} from "react-icons/fa6";
import Link from "next/link";


const FooterEng = () => {
    return <footer className={"mt-16 flex flex-col justify-center items-center border-t border-red-700"}>
        <Link href={"/home"}><Image src={"/logo svg.svg"} alt={"Logo"} width={360} height={185}
                                className={"w-[360px] h-[185px] mt-8 max-md:w-[300px] max-md:h-auto max-sm:w-[250px]"}/></Link>
        <nav>
            <ul className={"flex gap-5 mt-16 max-sm:mt-10 max-sm:flex-col max-[500px]:gap-2 text-center"}>
                <li><Link href={"/home"}
                          className="text-white font-bold text-3xl max-lg:text-xl max-sm:text-xl uppercase">Home</Link></li>
                <li><Link href={"https://www.gumenepatosnice.rs"}
                          className="text-white font-bold text-3xl max-lg:text-xl max-sm:text-xl uppercase">Web Shop</Link></li>
                <li><Link href={"/about-us"} className="text-white font-bold text-3xl max-lg:text-xl max-sm:text-xl uppercase">About Us</Link></li>
                <li><Link href={"/contact"}
                          className="text-white font-bold text-3xl max-lg:text-xl max-sm:text-xl uppercase">Contact</Link></li>
                <li><Link href={"/our-shops"}
                          className="text-white font-bold text-3xl max-lg:text-xl max-sm:text-xl uppercase">Shops</Link>
                </li>
            </ul>
        </nav>
        <div className={"flex gap-7 mt-8"}>
            <FaFacebook className={"text-5xl text-white max-md:text-4xl max-sm:text-3xl"}/>
            <FaInstagram className={"text-5xl text-white max-md:text-4xl max-sm:text-3xl"}/>
            <FaLinkedin className={"text-5xl text-white max-md:text-4xl max-sm:text-3xl"}/>
            <FaYoutube className={"text-5xl text-white max-md:text-4xl max-sm:text-3xl"}/>
            <FaTiktok className={"text-5xl text-white max-md:text-4xl max-sm:text-3xl"}/>
        </div>
        <div className={"mt-8 bg-white w-full h-[72px] flex justify-center items-center max-sm:h-[50px]"}>
            <p className={"copyrightText text-3xl font-bold text-black uppercase max-md:text-2xl  max-sm:text-base"}>©Copyright
                vsd mobil max. all rights reserved.</p>
        </div>
    </footer>
}

export default FooterEng;