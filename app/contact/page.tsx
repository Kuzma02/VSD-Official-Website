const ContactPageEng = () => {
    return (
        <div className="mt-20 px-5 max-sm:mt-10">
            <h2 className="text-6xl font-bold tracking-tight text-white max-sm:text-4xl uppercase text-center">
                Contact
            </h2>
            <div className="max-w-6xl mx-auto mt-12">

                {/* Contact Information */}
                <div className="mt-16 mb-10">
                    <h3 className="text-4xl text-white font-bold uppercase mb-4 text-center max-sm:text-3xl">Contact Information</h3>
                    <p className="text-2xl text-white text-center max-sm:text-xl">
                        Email: mobilmaxvsd@gmail.com
                    </p>
                    <p className="text-2xl text-white text-center mt-2 max-sm:text-xl">
                        Phone: +381 62 462 211
                    </p>
                    <p className="text-2xl text-white text-center mt-2 max-sm:text-xl">
                        Address: Majora Zorana Radosavljevića 160
                    </p>
                </div>

                {/* Contact Form */}
                <div className="bg-black p-6 rounded-lg border border-white">
                    <h3 className="text-4xl text-white font-bold uppercase mb-6 text-center max-sm:text-3xl">Send Us a Message</h3>
                    <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-white text-xl font-bold uppercase mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-white text-xl font-bold uppercase mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-white text-xl font-bold uppercase mb-2">Title</label>
                            <input
                                type="text"
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                placeholder="Title of the message"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-white text-xl font-bold uppercase mb-2">Message</label>
                            <textarea
                                className="w-full p-3 text-xl bg-white text-black rounded-lg outline-none"
                                rows={5}
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="sm:col-span-2 flex justify-end">
                            <button
                                type="submit"
                                className="uppercase text-white bg-black px-6 py-3 text-2xl font-bold border border-white hover:bg-white hover:text-black"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ContactPageEng;