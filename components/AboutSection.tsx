import {TitleAndSubtitle} from "@/components/index";

const AboutSection = () => {
    return <div className={"mt-24 max-w-6xl mx-auto flex gap-12 flex-col px-5"}>
        <TitleAndSubtitle title={"ukratko o nama"} subtitle={"saznajte našu misiju, ko smo i čime se bavimo"} />
        <p className={"text-2xl font-bold text-white text-center max-sm:text-lg"}>
            Mi smo kompanija posvećena pružanju vrhunskih proizvoda auto kozmetike našim klijentima. Naša misija je da obezbedimo kvalitet, inovaciju i zadovoljstvo kroz sve što radimo. Sa dugogodišnjim iskustvom i timom stručnjaka, trudimo se da premašimo očekivanja i izgradimo dugoročne odnose sa našim kupcima.
            <br />
            <br />
            Naša vizija je da budemo lider u industriji, poznati po našoj posvećenosti kvalitetu i zadovoljstvu klijenata. Hvala Vam što ste deo naše priče!
            <br />
            <br />
            Naša misija je da inspirišemo i omogućimo našim klijentima da postignu svoje ciljeve kroz inovativne proizvode i usluge. Posvećeni smo održivosti, kvalitetu i stvaranju pozitivnog uticaja na zajednicu.
        </p>
    </div>
}

export default AboutSection;