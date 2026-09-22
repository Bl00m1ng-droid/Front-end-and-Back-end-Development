import pioneersafetyshoe from "../assets/pioneersafetyshoe.jpeg";
import pinaclesafetyshoe from "../assets/pinaclesafetyshoe.jpeg";
import safetyjacket from "../assets/safetyjacket.jpeg";
import safetyjacket2 from "../assets/safetyjacket2.jpeg";
import worksuits from "../assets/worksuits.jpeg";
import shirt2 from "../assets/shirt2.jpeg";
import shirt1 from "../assets/shirt1.jpeg";
import set from "../assets/worksuitWithHat.jpeg";
import safetyshoe from "../assets/safetyshoe.jpeg";
import blackset from "../assets/blackSet.jpeg";
import darkmultiset from "../assets/darkmultiset.jpeg";
import greenset from "../assets/greenstripTwopiece.jpeg";
import greyOrangeSet from "../assets/greyOrangeSet.jpeg";
import limeJacket from "../assets/limeJacket.jpeg";
import limeSet from "../assets/limeSet.jpeg";
import multicolorset1 from "../assets/multicolourset1.jpeg";
import orangeJacket from "../assets/orangeJacket.jpeg";
import orangeSet from "../assets/orangeSet.jpeg";
import reflectiveShirtset from "../assets/reflectiveShirtset.jpeg";
import reflectiveHoodie1 from "../assets/reflectiveHoodie1.jpeg";
import silverstripWorksuit from "../assets/silverstripWorksuit.jpeg";

import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Pinnacle Black Safety Boots",
    category: "Safety Footwear",
    description: "Durable leather work boots with rugged soles and elastic side panels for comfort.",
    price: 30.00,
    sizesAvailable: ["6", "7", "8", "9", "10", "11", "12"],
    image: pinaclesafetyshoe
  },
  {
    id: 2,
    name: "Pioneer Brown Safety Boots",
    category: "Safety Footwear",
    description: "Heavy-duty boots with thick soles and reinforced design, ideal for industrial use.",
    price: 95.00,
    sizesAvailable: ["6", "7", "8", "9", "10", "11"],
    image: pioneersafetyshoe
  },
  {
    id: 3,
    name: "Two-Tone Reflective Jacket",
    category: "Reflective Jackets",
    description: "Tan and navy blue jacket with reflective stripes for visibility and safety.",
    price: 27.00,
    sizesAvailable: ["S", "M", "L", "XL", "XXL"],
    image: safetyjacket
  },
  {
    id: 4,
    name: "Blue High-Visibility Jacket",
    category: "Reflective Jackets",
    description: "High-visibility jacket with reflective stripes, designed for outdoor and industrial work.",
    price: 27.00,
    sizesAvailable: ["M", "L", "XL", "XXL"],
    image: safetyjacket2
  },
  {
    id: 5,
    name: "Green & Gray Uniform Shirt",
    category: "Uniforms",
    description: "Two-tone professional uniform shirt with red stripe detail and chest pocket.",
    price: 14.00,
    sizesAvailable: ["S", "M", "L", "XL"],
    image: shirt2
  },
  {
    id: 6,
    name: "Two Piece worksuit",
    category: "Uniforms",
    description: "Full work uniform with reflective stripes, available in multiple colors for safety.",
    price: 13.00,
    sizesAvailable: ["M", "L", "XL", "XXL"],
    image: worksuits
  },
  {
    id: 7,
    name: "Reflective Work Uniform Set",
    category: "Sets",
    description: "Flame and acid resistant workwear set with matching hat, available in multiple colors.",
    price: 30.00,
    sizesAvailable: ["S","M", "L", "XL", "XXL"],
    image: set
  },
  {
    id: 8,
    name: "Black and Gray Uniform Shirt",
    category: "Uniforms",
    description: "Two-tone professional uniform shirt with double pockets",
    price: 14.00,
    sizesAvailable: ["S", "M", "L", "XL", "XXL"],
    image: shirt1
  },
  {
    id: 9,
    name: "Safety Shoe",
    category: "Safety Footwear",
    description: "Heavy-duty boots with thick soles and reinforced design, ideal for industrial use.",
    price: 45.00,
    sizesAvailable: ["6", "7", "8", "9", "10", "11"],
    image: safetyshoe
  },
  {
    id: 10,
    name: "Black Safety Set",
    price: 65.00,
    description: "Durable black safety workwear set designed for comfortable and reliable protection in demanding work environments.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Sets",
    image: blackset,
  },
  {
    id: 11,
    name: "Dark Multi-Colour Safety Set",
    price: 50.00,
    description: "Practical multi-colour safety workwear set offering durability, comfort, and visibility for everyday work.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Sets",
    image: darkmultiset,
  },
  {
    id: 12,
    name: "Green Stripe Two-Piece Set",
    price: 50.00,
    description: "Comfortable two-piece workwear set with green reflective striping for improved visibility and workplace safety.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Sets",
    image: greenset,
  },
  {
    id: 13,
    name: "Grey & Orange Safety Set",
    price: 50.00,
    description: "High-visibility grey and orange workwear set designed for durability and improved visibility on the job.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Sets",
    image: greyOrangeSet,
  },
  {
    id: 14,
    name: "Lime Reflective Jacket",
    price: 35.00,
    description: "Bright lime safety jacket with high-visibility reflective detailing, ideal for construction, roadwork, and industrial environments.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Reflective Jackets",
    image: limeJacket,
  },
  {
    id: 15,
    name: "Lime Safety Set",
    price: 55.00,
    description: "High-visibility lime workwear set designed to provide comfort, durability, and excellent visibility in low-light environments.",
    sizesAvailable:["S", "M", "L", "XL"],
    category: "Sets",
    image: limeSet,
  },
  {
    id: 16,
    name: "Multi-Colour Safety Set",
    price: 55.00,
    description: "Durable multi-colour safety set suitable for industrial, construction, and general work environments.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Sets",
    image: multicolorset1,
  },
  {
    id: 17,
    name: "Orange Reflective Jacket",
    price: 35.00,
    description: "High-visibility orange safety jacket with reflective detailing for increased visibility and workplace protection.",
    sizesAvailable: ["S", "M", "L", "XL"],
    category: "Reflective Jackets",
    image: orangeJacket,
  },
  {
    id: 18,
    name: "Orange Safety Set",
    price: 50.00,
    description: "High-visibility orange workwear set designed for comfort, durability, and increased visibility in demanding work environments.",
    sizesAvailable:["S", "M", "L", "XL"],
    category: "Sets",
    image: orangeSet,
  },
  {
    id: 19,
    name: "Reflective Shirt Set",
    price: 50.00,
    description: "Comfortable reflective workwear set designed to improve visibility while providing practical everyday workplace protection.",
    sizesAvailable:["S", "M", "L", "XL"],
    category: "Sets",
    image: reflectiveShirtset,
  },
  {
    id: 20,
    name: "Reflective Hoodie",
    price: 35.00,
    description: "Warm and comfortable reflective hoodie designed for workers who need additional visibility and protection in cooler conditions.",
    sizesAvailable:["S", "M", "L", "XL"],
    category: "Reflective Jackets",
    image: reflectiveHoodie1,
  },
  {
    id: 21,
    name: "Silver Stripe Worksuit",
    price: 30.00,
    description: "Durable worksuit featuring reflective silver striping for enhanced visibility and protection in industrial and construction environments.",
    sizesAvailable:["S", "M", "L", "XL"],
    category: "Uniforms",
    image: silverstripWorksuit,
  },
];

const WHATSAPP_NUMBER = "263715337733";
 
function WhatsappIcon({ className = "h-4 w-4" }) {
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
 
function getWhatsappEnquiryLink(productName) {
  const message = `Hi! I'd like to enquire about the ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const ProductListCard= ({product}) =>{
    const [showImage,setShowImage] = useState(false);
    
  return (
    <>
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:border-orange-500">

      {/* Image */}
      <div 
      onClick={() => setShowImage(true)}
      className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-300 "
        />

      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1">

        <h2 className="text-lg font-bold text-black">
          {product.name}
        </h2>

        <p className="text-sm text-darkGray mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">

          <p className="text-xl font-bold text-orange">
            ${product.price.toFixed(2)}
          </p>

        </div>

        <div className="mt-3">
          <p className="text-sm text-darkGray">
            <span className="font-semibold">
              Sizes:
            </span>{" "}
            {product.sizesAvailable.join(", ")}
          </p>
        </div>

         <a
          href={getWhatsappEnquiryLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600
          text-white font-medium text-sm px-4 py-2.5 rounded-lg transition duration-300"
        >
          <WhatsappIcon className="h-4 w-4" />
          Enquire on WhatsApp
        </a>
        
      </div>

    </div>

    {/* FULL IMAGE MODAL */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowImage(false)}
        >

          {/* Modal Content */}
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setShowImage(false)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-orange transition"
              aria-label="Close image"
            >
              ✕
            </button>

            {/* Full Image */}
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />

          </div>
        </div>
      )}
</>

  );

}


function ProductCard() {
  const [searchTerm, setSearchTerm] = useState("");

  // The categories we want to display
  const categories = [
    "Safety Footwear",
    "Reflective Jackets",
    "Uniforms",
    "Sets",
  ];

  // Search products
  const searchResults = products.filter((product) => {
    const search = searchTerm.toLowerCase();

    return (
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  // Autocomplete suggestions
  const suggestions =
    searchTerm.length > 0
      ? products
          .filter((product) =>
            product.name
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          )
          .slice(0, 5)
      : [];

  return (
    <div className="px-6 mt-10">

      {/* SEARCH BAR */}
      <div className="max-w-2xl mx-auto relative">

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a product..."
          className="w-full px-5 py-4 pr-12 rounded-xl border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-orange focus:border-orange
          shadow-sm"
        />

        {/* SEARCH ICON */}
        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
          🔍
        </span>

        {/* AUTOCOMPLETE */}
        {suggestions.length > 0 && (
          <div className="absolute z-40 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 overflow-hidden">

            {suggestions.map((product) => (
              <button
                key={product.id}
                onClick={() => setSearchTerm(product.name)}
                className="w-full flex items-center gap-4 px-4 py-3 text-left hover:bg-gray-50 transition"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 object-contain rounded-lg bg-gray-100"
                />

                <div>
                  <p className="font-semibold text-black">
                    {product.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>
                </div>

              </button>
            ))}

          </div>
        )}

      </div>


      {/* CATEGORY SECTIONS */}

      {categories.map((category) => {

        // Get products belonging to this category
        const categoryProducts = searchResults.filter(
          (product) => product.category === category
        );

        // Don't show empty categories
        if (categoryProducts.length === 0) {
          return null;
        }

        return (
          <section key={category} className="mt-16">

            {/* CATEGORY HEADING */}
            <div className="flex items-center gap-4 mb-6">

              <h2 className="text-2xl md:text-3xl font-bold text-black whitespace-nowrap">
                {category}
              </h2>

              <div className="h-px bg-gray-300 flex-1"></div>

            </div>


            {/* PRODUCTS IN THIS CATEGORY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

              {categoryProducts.map((product) => (
                <ProductListCard
                  key={product.id}
                  product={product}
                />
              ))}

            </div>

          </section>
        );
      })}


      {/* NO RESULTS */}
      {searchResults.length === 0 && (
        <div className="text-center py-16">

          <h2 className="text-xl font-semibold text-gray-700">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching for another product.
          </p>

        </div>
      )}

    </div>
  );
};


export default ProductCard;