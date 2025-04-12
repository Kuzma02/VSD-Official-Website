import Image from "next/image";
import {TitleAndSubtitle} from "@/components/index";

const QualitySection = () => {
    return (
        <div className="mt-32 px-5">
            <TitleAndSubtitle title={"vrhunski kvalitet iznad svega"}
                              subtitle={"kvalitetna, profesionalna i dugotrajna auto kozmetika"}/>

            <div className="mt-16 max-w-6xl mx-auto flex flex-col gap-6">
                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="relative w-full h-[300px] max-sm:h-[200px]">
                        <Image src="/banner.jpg" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[200px]"/>
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">vrhunski kvalitet
                            patosnica</h3>
                        <p className="text-xl text-white max-sm:text-lg">Naše patosnice odlikuje vrhunski kvalitet
                            izrade i
                            materijala. Pažljivo odabrani materijali i
                            napredne tehnologije proizvodnje garantuju dugotrajnost i izdržljivost. Inovativni dizajn i
                            precizna izrada čine naše patosnice estetski privlačnim dodatkom svakom prostoru. Uživajte u
                            udobnosti i eleganciji naših patosnica, napravljenih po najvišim standardima kvaliteta.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="flex flex-col gap-2 max-md:order-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">kvalitetan
                            materijal</h3>
                        <p className="text-xl text-white max-sm:text-lg">Naše patosnice su izrađene od najkvalitetnijih
                            materijala.
                            Pažljivo odabrane sirovine osiguravaju izdržljivost i dugotrajnost. Korišćeni materijali su
                            otporni na habanje i lako se održavaju. Uživajte u udobnosti i estetici naših patosnica,
                            napravljenih od materijala vrhunskog kvaliteta.</p>
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
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">Auto kozmetika</h3>
                        <p className="text-xl text-white max-sm:text-lg">U svetu automobila, izgled i očuvanost vozila
                            igraju ključnu ulogu, ne samo u estetskom smislu, već i u očuvanju vrednosti automobila.
                            Auto kozmetika obuhvata širok spektar proizvoda i usluga koji su dizajnirani da očiste,
                            zaštite i unaprede izgled vašeg vozila. Na našem sajtu, pružamo vam sve potrebne informacije
                            o auto kozmetici, kako biste mogli da održavate svoj automobil u vrhunskom stanju.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="flex flex-col gap-2 max-md:order-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">Gume za sve vremenske
                            uslove</h3>
                        <p className="text-xl text-white max-sm:text-lg">Naša misija je da vam pružimo sve potrebne
                            informacije i proizvode kako biste odabrali prave gume za vaše vozilo. U ponudi imamo širok
                            spektar guma za sve tipove automobila, od letnjih i zimskih do all-season guma, renomiranih
                            brendova koji garantuju kvalitet i sigurnost na putu.</p>
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

export default QualitySection;