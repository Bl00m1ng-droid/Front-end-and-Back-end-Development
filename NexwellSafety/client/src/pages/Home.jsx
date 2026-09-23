import poster from "../assets/poster2.jpg";
import {Link }from "react-router-dom";
import safetyshoe from "../assets/safetyshoe.jpeg";
import limeJacket from "../assets/limeJacket.jpeg";
import greenset from "../assets/greenstripTwopiece.jpeg";
import shirt1 from "../assets/shirt1.jpeg";

import Footer from "../components/Footer";


function WhatsappIcon({ className = "h-5 w-5" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M20.52 3.48A11.94 11.94 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.86 11.86 0 005.64 1.44h.01c6.54 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.13-3.38-8.44zM12.05 21.4a9.5 9.5 0 01-4.85-1.33l-.35-.21-3.8 1 1.01-3.7-.23-.38a9.53 9.53 0 01-1.46-5.04c0-5.27 4.29-9.56 9.57-9.56a9.5 9.5 0 016.76 2.8 9.5 9.5 0 012.8 6.76c0 5.27-4.29 9.56-9.57 9.56h.12zm5.24-7.16c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.13-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.77 1.17 2.96.14.19 2.03 3.1 4.92 4.35.69.3 1.22.47 1.64.61.69.22 1.32.19 1.81.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33z" />
        </svg>
    );
}


function FacebookIcon({ className = "h-5 w-5" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
        </svg>
    );
}


// ================= PRODUCT CATEGORIES =================

const famousProducts = [
    {
        name: "Safety Footwear",
        description:
            "Durable safety boots and protective footwear designed for demanding work environments.",
        image: safetyshoe,
    },
    {
        name: "Reflective Jackets",
        description:
            "High-visibility and protective clothing designed to keep workers visible and protected.",
        image: limeJacket,
    },
    {
        name: "Workwear Sets",
        description:
            "Complete workwear sets designed for comfort, durability and a smart appearance.",
        image: greenset,
    },
    {
        name: "Uniforms",
        description:
            "Professional work uniforms designed for safety, comfort and a polished appearance.",
        image: shirt1,
    }
];


function Home() {

    return (
        <>
        {/*SEO Meta Tags*/}
        <Head>
            <title>Nexwell Safety - Your Safety is Our Priority</title>
             <meta name="description" content="Your safety is our priority. Discover our range of quality safety equipment and protective products." />
             <meta name="keywords" content="safety equipment, protective gear, workwear, safety footwear" />
             <meta name="author" content="Nexwell Safety" />
        </Head>
       
            {/* ================= HERO ================= */}

            <section
                className="relative min-h-[85vh] flex items-center overflow-hidden"
                style={{
                    backgroundImage: `url(${poster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Orange subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>


                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-24">

                    <div className="max-w-2xl text-white">

                        <p className="text-orange-400 font-semibold uppercase tracking-[0.25em] mb-4">
                            Your Safety. Our Priority.
                        </p>

                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            Champions
                            <span className="block text-orange-400">
                                in Safety
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
                            Quality safety equipment and protective products
                            designed to keep you, your team, and your workplace safe.
                        </p>


                        <div className="mt-8 flex flex-col sm:flex-row gap-4">

                            <Link
                                to="/catalog"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-lg transition duration-300 shadow-lg text-center"
                            >
                                Shop Products
                            </Link>

                            <Link
                                to="/contactUs"
                                className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3.5 rounded-lg transition duration-300 text-center"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= FAMOUS PRODUCTS ================= */}

            <section className="bg-gray-50">

                <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

                    <div className="text-center mb-12">

                        <p className="text-orange-500 font-semibold uppercase tracking-widest">
                            Explore Our Range
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                            Famous Products
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Discover some of our most popular product categories
                            and find the protection that's right for you.
                        </p>

                    </div>


                    {/* Category Cards */}

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                        {famousProducts.map((product) => (

                            <div
                                key={product.name}
                                onClick={() => (window.location.href = "/catalog")}
                                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >

                                {/* Image */}

                                <div className="relative h-64 bg-gray-100 overflow-hidden">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Overlay */}

                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>

                                </div>


                                {/* Content */}

                                <div className="p-6">

                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {product.name}
                                    </h3>

                                    <p className="mt-3 text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="mt-5 text-orange-500 font-semibold flex items-center gap-2">
                                        View Products
                                        <span className="group-hover:translate-x-1 transition-transform">
                                            →
                                        </span>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= ABOUT ================= */}

            <section className="bg-white">

                <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="text-orange-500 font-semibold uppercase tracking-widest">
                            About Nexwell
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                            Safety You Can Trust
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                            At Nexwell Safety, we understand that safety is not
                            optional. We provide quality safety equipment and
                            protective products designed to support safer
                            workplaces across different industries.
                        </p>

                    </div>

                </div>

            </section>



            {/* ================= WHY CHOOSE US ================= */}

            <section className="bg-white">

                <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">

                    <div className="text-center mb-12">

                        <p className="text-orange-500 font-semibold uppercase tracking-widest">
                            Why Nexwell?
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
                            Protection You Can Depend On
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-md transition">

                            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                                🛡️
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                Reliable Protection
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Products selected with protection, durability
                                and safety in mind.
                            </p>

                        </div>


                        <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-md transition">

                            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                                ✓
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                Quality Products
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Dependable safety equipment for a wide range
                                of workplace needs.
                            </p>

                        </div>


                        <div className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-md transition">

                            <div className="w-14 h-14 mx-auto rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                                👷
                            </div>

                            <h3 className="text-xl font-bold mt-5">
                                Built for Safety
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Helping individuals and businesses create
                                safer working environments.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="relative bg-black overflow-hidden">

                <div className="max-w-5xl mx-auto px-6 py-20 text-center text-white">

                    <p className="text-orange-400 font-semibold uppercase tracking-widest">
                        Need Safety Equipment?
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                        Get in touch with us today
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Have a question about our products or need help
                        finding the right safety equipment?
                    </p>


                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                        <a
                            href="https://wa.me/263715337733?text=Hi!%20Nexwell%20Safety%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition"
                        >
                            <WhatsappIcon className="h-5 w-5" />
                            Chat on WhatsApp
                        </a>

                         <a
                            href="https://www.facebook.com/share/1N4bpLFD3g/?mibextid=wwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600
                            text-white py-2.5 px-5 rounded-lg transition"
                        >
                            <FacebookIcon className="h-5 w-5" />
                            Share on Facebook
                        </a>


                        <Link
                            to="/contactUs"
                            className="border border-gray-600 hover:border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-lg font-semibold transition"
                        >
                            Contact Us
                        </Link>
                            

                    </div>

                </div>

            </section>


            <Footer />

        </>
    );
}


export default Home;             