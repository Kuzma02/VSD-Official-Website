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
                        Email: kontakt@example.com
                    </p>
                    <p className="text-2xl text-white text-center mt-2 max-sm:text-xl">
                        Telefon: +123 456 789
                    </p>
                    <p className="text-2xl text-white text-center mt-2 max-sm:text-xl">
                        Adresa: Ulica 123, Grad, Država
                    </p>
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