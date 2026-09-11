import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Catalog() {
  return (
    <>
      <section className="min-h-screen bg-white shadow-md p-4 px-6 md:px-12 lg:px-24">

        <div className="p-4 text-center">

          <h1 className="text-4xl font-bold text-orange">
            Our Products
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our range of safety equipment and protective
            products designed for different environments and industries.
          </p>

        </div>

        <ProductCard />

      </section>

      <Footer />
    </>
  );
}

export default Catalog;
