
export const metadata = {
    title: "VSD Mobil Max | Our shops",
    description: "Find the nearest VSD Mobil Max shop and enjoy top-quality auto parts and cosmetics.",
    keywords: [
        "our shops",
        "VSD Mobil Max",
        "auto parts",
        "car cosmetics",
        "find shops",
        "shop locator"
    ],
    openGraph: {
        title: "VSD Mobil Max | Our shops",
        description: "Find the nearest VSD Mobil Max shop and enjoy top-quality auto parts and cosmetics.",
        type: "website"
    }
}

const OurShopsPage = () => {
    return (
        <div className="mt-20 px-5 max-sm:mt-10">
            <h2 className="text-6xl font-bold tracking-tight text-white max-sm:text-4xl uppercase text-center">
                Our shops
            </h2>
            <div className="max-w-6xl mx-auto mt-12">
                {/* Shops Grid */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Example Shop */}
                    <div className="bg-black p-6 rounded-lg border border-white">
                        <h3 className="text-2xl text-white font-bold uppercase">Shop 1</h3>
                        <p className="text-xl text-white mt-2">Adress: Majora Zorana Radosavljevića 160, Batajnica</p>
                        <a href="tel:+38162462211" className="text-xl text-white mt-2">Phone: +381 62 462 211</a>
                        <p className="text-xl text-white mt-2">Working hours: 9:00 - 21:00</p>
                    </div>
                    {/* Add more shops as needed */}
                </div>

                {/* Map Section */}
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
            </div>
        </div>
    );
};

export default OurShopsPage;