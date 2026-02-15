import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
    return (
        <section className="min-h-screen bg-base-100 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="text-5xl font-semibold tracking-tight">
                        Connect With <span className="text-primary">Nestara</span>
                    </h1>
                    <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                        Whether you are exploring prime properties or seeking strategic
                        investment opportunities, our advisory team is here to assist you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">

                    {/* LEFT SIDE – CONTACT DETAILS */}
                    <div className="space-y-10">

                        <div className="bg-base-200/60 backdrop-blur-lg rounded-3xl p-10 border border-base-300 shadow-xl">
                            <h2 className="text-2xl font-semibold mb-8">
                                Corporate Office
                            </h2>

                            <div className="space-y-8">

                                <div className="flex gap-6 items-start">
                                    <MapPin className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Headquarters</h3>
                                        <p className="text-base-content/70">
                                            1250 Wilshire Boulevard, Suite 400<br />
                                            Los Angeles, CA 90017
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <Phone className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Private Line</h3>
                                        <p className="text-base-content/70">
                                            +1 (310) 555-7890
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <Mail className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Email</h3>
                                        <p className="text-base-content/70">
                                            advisory@nestara.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <Clock className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-medium">Business Hours</h3>
                                        <p className="text-base-content/70">
                                            Monday – Friday: 9:00 AM – 6:00 PM<br />
                                            Saturday: By Appointment Only
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Premium Map Section */}
                        <div className="h-72 rounded-3xl overflow-hidden border border-base-300 shadow-lg">
                            <div className="h-full flex items-center justify-center bg-base-300/40 backdrop-blur-md">
                                <span className="text-base-content/50 font-medium">
                                    Interactive Location Map
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE – FORM */}
                    <div className="bg-base-100 rounded-3xl p-12 shadow-2xl border border-base-300">

                        <h2 className="text-2xl font-semibold mb-10">
                            Private Inquiry
                        </h2>

                        <form className="space-y-6">

                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input input-bordered rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="input input-bordered rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />

                            <input
                                type="text"
                                placeholder="Subject of Inquiry"
                                className="input input-bordered rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary/40"
                            />

                            <textarea
                                placeholder="Please share details of your inquiry..."
                                className="textarea textarea-bordered rounded-xl w-full h-36 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            ></textarea>

                            <button className="btn btn-primary w-full rounded-full py-3 text-sm tracking-wide font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300">
                                Submit Inquiry
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
