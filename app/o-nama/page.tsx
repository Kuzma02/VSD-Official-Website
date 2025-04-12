import Image from "next/image";

const AboutUsPage = () => {
    return <div className="mt-20 px-5 max-sm:mt-10">
        <h2 className="text-6xl font-bold tracking-tight text-white max-sm:text-4xl uppercase text-center">
            O Nama
        </h2>
        <div className="max-w-6xl mx-auto mt-12">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center max-sm:gap-5">
                <div className="relative w-full h-96 max-lg:w-[500px] max-lg:h-[300px] max-sm:w-full">
                    <Image
                        src="/logo%20svg.svg"
                        alt="About Us"
                        fill={true}
                        className="w-full h-full"
                    />
                </div>
                <div>
                    <h3 className="text-4xl text-white font-bold uppercase mb-4">Ko smo mi?</h3>
                    <p className="text-xl text-white leading-relaxed">
                        Mi smo kompanija posvećena pružanju vrhunskih proizvoda i usluga našim klijentima. Naša
                        misija je da obezbedimo kvalitet, inovaciju i zadovoljstvo kroz sve što radimo. Sa
                        dugogodišnjim iskustvom i timom stručnjaka, trudimo se da premašimo očekivanja i izgradimo
                        dugoročne odnose sa našim kupcima.
                    </p>
                    <p className="text-xl text-white leading-relaxed mt-4">
                        Naša vizija je da budemo lider u industriji, poznati po našoj posvećenosti kvalitetu i
                        zadovoljstvu klijenata. Hvala Vam što ste deo naše priče!
                    </p>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="mt-16">
                <h3 className="text-4xl text-white font-bold uppercase mb-4 text-center">Naša Misija</h3>
                <p className="text-xl text-white leading-relaxed text-center">
                    Naša misija je da inspirišemo i omogućimo našim klijentima da postignu svoje ciljeve kroz
                    inovativne proizvode i usluge. Posvećeni smo održivosti, kvalitetu i stvaranju pozitivnog
                    uticaja na zajednicu.
                </p>
            </div>
        </div>
    </div>
}

export default AboutUsPage;