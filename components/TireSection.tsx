import Image from "next/image";
import {TitleAndSubtitle} from "@/components/index";

const TireSection = () => {
    return (
        <div className="mt-32 max-w-6xl mx-auto max-xl:px-5">
            <TitleAndSubtitle title="tehnologija bez rivalstva" subtitle="prvoklasne gume za sve vremenske uslove"/>

            <div className="grid grid-cols-2 gap-x-1 mt-12">
                <Image src={"/guma1.png"} alt={"Guma 1"} width={600} height={600}
                       className={"max-w-full object-cover"}/>
                <Image src={"/guma2.png"} alt={"Guma 2"} width={600} height={600}
                       className={"max-w-full object-cover"}/>
            </div>
            <div className={"w-full relative mt-1"}>
                <Image src={"/guma3.png"} alt={"Guma 3"} width={700} height={700}
                       className={"max-w-full w-full object-cover h-auto"}/>
            </div>

        </div>
    );
}

export default TireSection;