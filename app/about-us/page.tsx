import Image from "next/image";

export const metadata = {
    title: "VSD Mobil Max | About Us",
    description: "Learn more about VSD Mobil Max, our mission, and our commitment to quality auto parts and services.",
    keywords: [
        "about us",
        "VSD Mobil Max",
        "auto parts",
        "company mission",
        "quality service"
    ],
    openGraph: {
        title: "VSD Mobil Max | About Us",
        description: "Learn more about VSD Mobil Max, our mission, and our commitment to quality auto parts and services.",
        type: "website"
    }
}

const AboutUsPageEng = () => {
    return <div className="mt-20 px-5 max-sm:mt-10">
        <h2 className="text-6xl font-bold tracking-tight text-white max-sm:text-4xl uppercase text-center">
            About Us
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
                    <h3 className="text-4xl text-white font-bold uppercase mb-4">Who are we?</h3>
                    <p className="text-xl text-white leading-relaxed">
                        We are a company dedicated to providing superior products and services to our customers. Ours
                        mission is to ensure quality, innovation and satisfaction through everything we do. With
                        with many years of experience and a team of experts, we strive to exceed expectations and build
                        long-term relationships with our customers.
                    </p>
                    <p className="text-xl text-white leading-relaxed mt-4">
                        Our vision is to be an industry leader, known for our commitment to quality and
                        customer satisfaction. Thank you for being part of our story!
                    </p>
                </div>
            </div>

            {/* Our Mission Section */}
            <div className="mt-16">
                <h3 className="text-4xl text-white font-bold uppercase mb-4 text-center">Our Mission</h3>
                <p className="text-xl text-white leading-relaxed text-center">
                    Our mission is to inspire and enable our clients to achieve their goals through
                    innovative products and services. We are committed to sustainability, quality and creating
                    positivity
                    impact on the community.
                </p>
            </div>
        </div>
    </div>
}

export default AboutUsPageEng;