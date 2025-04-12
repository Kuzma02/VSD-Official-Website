import Image from "next/image";
import {TitleAndSubtitle} from "@/components/index";

const QualitySectionEng = () => {
    return (
        <div className="mt-32 px-5">
            <TitleAndSubtitle title={"top quality above all else"}
                              subtitle={"high-quality, professional and long-lasting car cosmetics"}/>

            <div className="mt-16 max-w-6xl mx-auto flex flex-col gap-6">
                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="relative w-full h-[300px] max-sm:h-[200px]">
                        <Image src="/banner.jpg" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[200px]"/>
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">top quality mats</h3>
                        <p className="text-xl text-white max-sm:text-lg">Our mats are distinguished by the top quality
                            of workmanship and materials. Carefully selected materials and advanced production
                            technologies guarantee longevity and durability. Innovative design and precise manufacturing
                            make our mats an aesthetically appealing addition to any space. Enjoy the comfort and
                            elegance of our floor mats, made according to the highest quality standards.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="flex flex-col gap-2 max-md:order-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">quality material</h3>
                        <p className="text-xl text-white max-sm:text-lg">Our mats are made of the highest quality
                            materials. Carefully selected raw materials ensure durability and longevity. The materials
                            used are wear-resistant and easy to maintain. Enjoy the comfort and aesthetics of our mats,
                            made of top quality materials.</p>
                    </div>
                    <div className="relative w-full h-[300px] max-md:order-1 max-sm:h-[250px]">
                        <Image src="/kvalitet 3.jpg" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[250px]"/>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="relative w-full h-[300px] max-sm:h-[250px]">
                        <Image src="/car cosmetics.jpg" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[250px]"/>
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">Car cosmetics</h3>
                        <p className="text-xl text-white max-sm:text-lg">In the automotive world, the appearance and
                            maintenance of a vehicle play a key role, not only in terms of aesthetics, but also in
                            preserving the value of the car. Car care encompasses a wide range of products and services
                            designed to clean, protect and enhance the appearance of your vehicle. On our website, we
                            provide you with all the information you need about car care to keep your car in top
                            condition.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="flex flex-col gap-2 max-md:order-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">All-weather tires</h3>
                        <p className="text-xl text-white max-sm:text-lg">Our mission is to provide you with all the
                            information and products you need to choose the right tires for your vehicle. We offer a
                            wide range of tires for all types of cars, from summer and winter to all-season tires, from
                            renowned brands that guarantee quality and safety on the road.</p>
                    </div>
                    <div className="relative w-full h-[300px] max-md:order-1 max-sm:h-[200px]">
                        <Image src="/guma2.png" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[200px]"/>
                        <div className="absolute inset-0 bg-black opacity-0"></div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default QualitySectionEng;