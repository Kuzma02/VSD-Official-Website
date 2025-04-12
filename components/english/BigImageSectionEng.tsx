import {TitleAndSubtitle} from "@/components/index";
import Image from "next/image";

const BigImageSectionEng = () => {
    return (
        <div className="mt-32 px-5 flex flex-col items-center">
            <TitleAndSubtitle title={"winning design and quality"}
                              subtitle={"every small detail is our specialty"}/>
            <Image alt={"m3 photo"} width={2000} height={700} src={"/m3.png"}
                   className={"max-w-full w-full h-auto mt-12"}/>
        </div>
    );
}

export default BigImageSectionEng;