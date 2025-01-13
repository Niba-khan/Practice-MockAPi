'use client';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define a type for the product data
type Product = {
  id: string;
  image: string;
  productname: string;
  productdesc: string;
  discount: number;
  rating: number;
};

const Client: React.FC = () => {
  // Use the Product[] type for the state
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [cartModeVisibility, setCartModeVisibility] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://67826dbac51d092c3dcf75cd.mockapi.io/practice");
        if (!res.ok) {
          throw new Error(`Failed to Fetch Data: ${res.statusText}`);
        }

        const data: Product[] = await res.json(); // Ensure the data matches the Product[] type
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = () => {
    setCartModeVisibility(true);
  };

  const closeModel = () => {
    setCartModeVisibility(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-500 to-slate-900 py-4 ">
      <Navbar />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-orange-500">Welcome to Fetch Mock API Data</h1>
        <p className="text-xl font-mono text-sky-400 mt-2 mb-4">
          Explore the Product from the API, GIAIC 3 Hackathon Practice
        </p>
      </div>

      {loading && (
        <div className="h-screen flex justify-center items-center flex-col">
          <div className="flex space-x-2">
            <div
              className="h-[50px] w-[40px] bg-red-600 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="h-[50px] w-[40px] bg-orange-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="h-[50px] w-[40px] bg-yellow-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
          <span className="mt-4 text-amber-800 text-4xl">Loading...</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-black h-[35rem] w-[20rem] px-10 rounded-lg overflow-hidden transition-transform hover:scale-105 duration-300 mb-10"
          >
            <div className="relative ">
              <Image
                src={item.image}
                alt={item.productname}
                width={500}
                height={500}
                className="w-60 h-56 object-cover rounded-t-lg"
              />

              <div className="absolute top-2 left-2 bg-sky-600 text-white py-1 px-3 text-xs font-semibold rounded-full shadow-md">
                {item.discount}% off
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{item.productname}</h2>
              <p className="text-sm text-gray-600">{item.productdesc}</p>

              <div className="mt-4 space-y-2">
                <div>
                  <span className="font-semibold text-slate-600">Price:</span>
                  <span className="text-xl font-bold text-slate-600">{item.discount} Rupees</span>
                </div>

                <div>
                  <span className="flex justify-between items-center text-lg text-slate-600">Rating:</span>
                  <span className="text-orange-400">{item.rating}⭐</span>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="mt-6 bg-cyan-700 text-white rounded-lg py-3 px-6 text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-sky-900"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {cartModeVisibility && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl text-gray-700 font-semibold mb-4">Product Added To Cart</h2>
            <p className="text-gray-700 mb-6">
              You have added a product to your cart. Would you like to view your cart?
            </p>

            <div>
              <button
                onClick={closeModel}
                className="mt-6 bg-cyan-700 text-white rounded-lg py-3 px-6 text-lg font-bold transition-colors hover:bg-sky-900"
              >
                Continue Shopping
              </button>

              <button
                onClick={() => alert("Navigation to Cart")}
                className="mt-6 bg-cyan-700 text-white rounded-lg py-3 px-6 text-lg font-bold transition-colors hover:bg-sky-900"
              >
                Visit Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Client;
