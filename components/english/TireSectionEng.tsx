import Image from "next/image";
import {TitleAndSubtitle} from "@/components/index";

const TireSectionEng = () => {
    return (
        <div className="mt-32 max-w-6xl mx-auto max-xl:px-5">
            <TitleAndSubtitle title="technology without rivalry" subtitle="first class tires for all weather conditions"/>

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

export default TireSectionEng;