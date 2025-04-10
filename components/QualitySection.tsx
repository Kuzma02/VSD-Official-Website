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
                        <div className="absolute inset-0 bg-black opacity-50"></div>
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
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="relative w-full h-[300px] max-sm:h-[250px]">
                        <Image src="/kvalitet 4.jpg" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[250px]"/>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">profesionalna
                            proizvodnja</h3>
                        <p className="text-xl text-white max-sm:text-lg">Naše patosnice prolaze kroz proces
                            profesionalne proizvodnje.
                            Svaki korak izrade nadgleda stručni tim s dugogodišnjim iskustvom. Primenjujemo
                            najnaprednije tehnologije i standarde kvaliteta u proizvodnji. Rezultat je savršeno izrađen
                            proizvod koji će zadovoljiti i one najzahtevnije kupce.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center gap-x-8 max-md:grid-cols-1 max-md:gap-y-5">
                    <div className="flex flex-col gap-2 max-md:order-2">
                        <h3 className="text-4xl text-white font-bold uppercase max-sm:text-3xl">od eksperata u ovoj
                            oblasti</h3>
                        <p className="text-xl text-white max-sm:text-lg">Naše patosnice dizajniraju i proizvode eksperti
                            u ovoj
                            oblasti. Timovi stručnjaka s dugogodišnjim iskustvom pažljivo nadziru svaki korak
                            proizvodnje. Njihovo znanje i veštine osiguravaju da naši proizvodi dostignu najviše
                            standarde kvaliteta. Možete biti sigurni da ćete s našim patolsnicama dobiti rezultat koji
                            su kreirali pravi stručnjaci u ovom polju.</p>
                    </div>
                    <div className="relative w-full h-[300px] max-md:order-1 max-sm:h-[200px]">
                        <Image src="/kvalitet 1.jpg" alt={"Kvalitet 1 slika"} width={565} height={353}
                               className="w-[565px] h-[300px] max-sm:h-[200px]"/>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}

export default QualitySection;