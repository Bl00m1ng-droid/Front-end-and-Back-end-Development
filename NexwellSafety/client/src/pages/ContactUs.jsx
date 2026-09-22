import React from "react";
import backgroundImage from "../assets/nexwellsafety.jpg";
import Footer from "../components/Footer";
import {useState} from "react";

const [formData, setFormData] = useState({
  name: "",
  surname: "",
  email: "",
  message: ""
});

const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}

const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
        const response = await fetch(
            "http://localhost:5000/api/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(formData)
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        setStatus("Your message has been sent successfully!");

        setFormData({
            name: "",
            surname: "",
            email: "",
            message: ""
        });

    } catch (error) {

        console.error(error);

        setStatus(
            "Unable to send your message. Please try again."
        );

    } finally {
        setLoading(false);
    }
};

function Contact() {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Faint background overlay */}
      <div className="absolute inset-0 bg-white/25"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Contact Us
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a question about our safety wear products or need assistance
              with your order? Get in touch with the Nexwell Safety Wear team.
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-3">

            {/* Quick Response Section */}
            <div className="bg-orange-500 text-white p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need a quick response?
              </h2>

              <p className="text-orange-100 mb-8 leading-relaxed">
                For quick questions, product enquiries or urgent assistance,
                chat with us directly on WhatsApp.
              </p>

              <a
                href="https://wa.me/263715337733"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-md"
              >
                {/* WhatsApp Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.846 1.213 3.044.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M20.52 3.449A11.815 11.815 0 0012.04 0C5.495 0 .16 5.335.157 11.88c0 2.093.547 4.136 1.588 5.938L.057 24l6.336-1.663a11.875 11.875 0 005.644 1.436h.005c6.542 0 11.878-5.335 11.881-11.88a11.82 11.82 0 00-3.403-8.444zM12.04 21.785h-.004a9.86 9.86 0 01-5.032-1.378l-.361-.214-3.759.986 1.004-3.666-.235-.375a9.853 9.853 0 01-1.51-5.258C2.146 6.458 6.59 2.014 12.04 2.014a9.79 9.79 0 017.002 2.903 9.8 9.8 0 012.899 7.01c-.003 5.45-4.447 9.858-9.901 9.858z" />
                </svg>

                Chat on WhatsApp
              </a>

              <div className="mt-8 pt-6 border-t border-orange-400">
                <p className="text-sm text-orange-100">
                  WhatsApp support
                </p>
                <p className="font-semibold mt-1">
                  Available for quick enquiries
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send us a message
              </h2>

              <p className="text-gray-500 mb-8">
                Fill in the form below and we'll get back to you.
              </p>

              <form action="" method="post" className="space-y-6" onSubmit={handleSubmit}>

                {/* Name + Surname */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="surname"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Surname
                    </label>

                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      onChange={handleChange}
                      placeholder="Enter your surname"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                      required
                    />
                  </div>

                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-md"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <p className={`mt-4 text-sm ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                    {status}
                  </p>
                )}

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;