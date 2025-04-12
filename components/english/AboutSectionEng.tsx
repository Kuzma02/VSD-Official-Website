import {TitleAndSubtitle} from "@/components/index";
import Image from "next/image";

const AboutSectionEng = () => {
    return <div className={"mt-24 max-w-6xl mx-auto flex gap-12 flex-col px-5"}>
        <TitleAndSubtitle title={"briefly about us"} subtitle={"find out our mission, who we are and what we do"}/>
        <p className={"text-2xl font-bold text-white text-center max-sm:text-lg"}>
            We are a company dedicated to providing our customers with premium auto cosmetics products. Our mission is to
            ensure quality, innovation and satisfaction through everything we do. With many years of experience and a team
            experts, we strive to exceed expectations and build long-term relationships with our customers.
            <br/>
            <br/>
            Our vision is to be an industry leader, known for our commitment to quality and satisfaction
            clients. Thank you for being part of our story!
            <br/>
            <br/>
            Our mission is to inspire and enable our clients to achieve their goals through innovative
            products and services. We are committed to sustainability, quality and creating a positive impact on the community.
        </p>
        <div className={"flex gap-3 justify-center items-center px-5 max-md:flex-col "}>
            <Image src={"/vsd prodavnica.jpeg"} alt={"vsd prodavnica"} className={"w-[500px] h-[500px] max-sm:h-auto"} width={500}
                   height={500}/>
            <Image src={"/vsd prodavnica 2.jpeg"} alt={"vsd prodavnica"} className={"w-[500px] h-[500px] max-sm:h-auto"} width={500}
                   height={500}/>
        </div>

    </div>
}

export default AboutSectionEng;