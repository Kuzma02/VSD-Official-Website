import {TitleAndSubtitle} from "@/components/index";
import Image from "next/image";

const BigImageSection = () => {
    return (
        <div className="mt-32 px-5 flex flex-col items-center">
            <TitleAndSubtitle title={"pobednički dizajn i kvalitet"}
                              subtitle={"svaki sitni detalj je naša specijalnost"}/>
            <Image alt={"m3 photo"} width={2000} height={700} src={"/m3.png"}
                   className={"max-w-full w-full h-auto mt-12"}/>
        </div>
    );
}

export default BigImageSection;