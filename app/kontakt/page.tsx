
export const metadata = {
    title: "Kontakt | VSD Mobil Max",
    description: "Kontaktirajte nas za sve informacije o auto delovima i uslugama. Rado ćemo vam pomoći.",
    keywords: [
        "kontakt",
        "auto delovi",
        "usluge",
        "VSD Mobil Max"
    ],
    openGraph: {
        title: "Kontakt | VSD Mobil Max",
        description: "Kontaktirajte nas za sve informacije o auto delovima i uslugama. Rado ćemo vam pomoći.",
        type: "website"
    }
}

const ContactPage = () => {
    return (
        <div className="mt-20 px-5 max-sm:mt-10">
            <h2 className="text-6xl font-bold tracking-tight text-white max-sm:text-4xl uppercase text-center">
                Kontakt
            </h2>
            <div className="max-w-6xl mx-auto mt-12">

                {/* Contact Information */}
                <div className="mt-16 mb-10">
                    <h3 className="text-4xl text-white font-bold uppercase mb-4 text-center max-sm:text-3xl">Kontakt
                        Informacije</h3>
                    <p className="text-2xl text-white text-center max-sm:text-xl">
                        Email: office@mobilmax.rs
                    </p>
                    <p className="text-2xl text-white text-center mt-2 max-sm:text-xl">
                        Telefon: <a href="tel:+38162462211">+381 62 462 211</a>
                    </p>
                    <p className="text-2xl text-white text-center mt-2 max-sm:text-xl">
                        Adresa: Majora Zorana Radosavljevića 160
                    </p>
                </div>

                <div className="my-12 flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.2096875077386!2d20.285000276679973!3d44.898729970989194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a5df5c61366c3%3A0x1709c4529c6ba80a!2zTWFqb3JhIFpvcmFuYSBSYWRvc2F2bGpldmnEh2EgMTYwLCDQkdC10L7Qs9GA0LDQtCAxMTI3Mw!5e0!3m2!1ssr!2srs!4v1752314237593!5m2!1ssr!2srs"
                        width="100%"
                        height="450"
                        className="border-0 rounded-lg w-full max-w-3xl"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="bg-black p-6 rounded-lg border border-white">
                    <h3 className="text-4xl text-white font-bold uppercase mb-6 text-center max-sm:text-3xl">Pošaljite
                        Nam Poruku</h3>
                    <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-white text-xl font-bold uppercase mb-2">Ime</label>
                            <input
                                type="text"
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                placeholder="Vaše ime"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-xl font-bold uppercase mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                placeholder="Vaš email"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-white text-xl font-bold uppercase mb-2">Naslov</label>
                            <input
                                type="text"
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                placeholder="Naslov poruke"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-white text-xl font-bold uppercase mb-2">Poruka</label>
                            <textarea
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                rows={5}
                                placeholder="Vaša poruka"
                            ></textarea>
                        </div>
                        <div className="sm:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="uppercase text-white bg-black px-6 py-3 text-2xl font-bold border border-white hover:bg-white hover:text-black"
                            >
                                Pošalji
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ContactPage;