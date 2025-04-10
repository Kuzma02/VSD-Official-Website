const OurShopsPage = () => {
    return (
        <div className="mt-20 px-5 max-sm:mt-10">
            <h2 className="text-6xl font-bold tracking-tight text-white max-sm:text-4xl uppercase text-center">
                Naše Prodavnice
            </h2>
            <div className="max-w-6xl mx-auto mt-12">
                {/* Shops Grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Example Shop */}
                    <div className="bg-black p-6 rounded-lg border border-white">
                        <h3 className="text-2xl text-white font-bold uppercase">Prodavnica 1</h3>
                        <p className="text-xl text-white mt-2">Adresa: Ulica 123, Grad</p>
                        <p className="text-xl text-white mt-2">Telefon: +123 456 789</p>
                        <p className="text-xl text-white mt-2">Radno vreme: 9:00 - 21:00</p>
                    </div>
                    <div className="bg-black p-6 rounded-lg border border-white">
                        <h3 className="text-2xl text-white font-bold uppercase">Prodavnica 2</h3>
                        <p className="text-xl text-white mt-2">Adresa: Ulica 456, Grad</p>
                        <p className="text-xl text-white mt-2">Telefon: +987 654 321</p>
                        <p className="text-xl text-white mt-2">Radno vreme: 10:00 - 22:00</p>
                    </div>
                    {/* Add more shops as needed */}
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h3 className="text-4xl text-white font-bold uppercase mb-4 text-center">Mapa Lokacija</h3>
                    <div className="w-full h-96 bg-gray-800 rounded-lg">
                        {/* Placeholder for map */}
                        <p className="text-xl text-white text-center pt-40">Mapa će biti ovde</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShopsPage;