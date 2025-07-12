import {HiChevronDoubleRight} from "react-icons/hi2";
import Link from "next/link";

const BannerEng = () => {
    return <div className="banner h-[650px] w-full max-md:h-[500px] max-sm:h-[400px]">
        <div
            className={"flex flex-col justify-center items-center h-full max-w-6xl mx-auto gap-5 px-10 max-md:px-5 max-sm:px-2"}>
            <h2 className="bannerTitle uppercase text-white text-6xl font-bold z-10 max-[1200px]:text-5xl max-md:text-4xl max-sm:text-2xl">professional
                car cosmetics</h2>
            <p className="bannerDesc text-xl text-white text-center z-10 max-[1200px]:text-lg max-md:text-base max-sm:text-sm">Discover
                the secrets of perfect car cosmetics! Keep your car in top condition with our expert advice and
                products. Enjoy the bright appearance and long-term protection of your vehicle!</p>
            <Link
                href={"https://www.gumenepatosnice.rs"}
                className="bg-white text-black w-full max-w-4xl h-[50px] uppercase text-2xl font-bold flex justify-center items-center gap-2 z-10 max-[1200px]:text-xl max-md:text-lg max-md:h-[40px] max-sm:text-base max-sm:h-[30px]">visit
                the online store <HiChevronDoubleRight className="text-3xl max-[1200px]:text-xl  max-sm:text-base"/>
            </Link>
        </div>

    </div>
}

export default BannerEng;