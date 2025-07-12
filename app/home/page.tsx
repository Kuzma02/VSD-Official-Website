import {AboutSectionEng, BannerEng, BigImageSectionEng, QualitySectionEng, TireSectionEng} from "@/components";

export const metadata = {
    title: "VSD Mobil Max | Auto Parts and Accessories",
    description: "Your first destination for quality auto parts and accessories",
    keywords: [
        "auto parts",
        "accessories",
        "car care",
        "VSD Mobil Max"
    ],
    openGraph: {
        title: "VSD Mobil Max | Auto Parts and Accessories",
        description: "Your first destination for quality auto parts and accessories",
        type: "website"
    }
}

const HomePageEng = () => {
    return <>
        <BannerEng/>
        <AboutSectionEng/>
        <QualitySectionEng/>
        <BigImageSectionEng/>
        <TireSectionEng/>
    </>
}

export default HomePageEng;