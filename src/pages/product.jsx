import React, { useState, useEffect } from "react";
import { useMedia } from "@/helpers/useMedia";
import Link from "next/link";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/products?populate=*"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { getUrl } = useMedia();

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Product List - MyShop
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {data?.data?.map((item) => {
            return (
              <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-96 rounded w-full object-center mb-6"
                    src={getUrl(item.attributes.image)}
                    alt="product image"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.attributes.catagries}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    {item.attributes.title}
                  </h2>
                  <div className="hidden bg-gray-800 bg-orange-800"></div>
                  <button
                    class={
                      "rounded-full w-6 h-6 p-0 border-0 " +
                      `bg-${item.attributes.color}-800`
                    }
                  ></button>
                  <p className="leading-relaxed text-base">
                    {item.attributes.description}
                  </p>
                 <Link href={`/product/${item.attributes.slug}`}> <button className=" text-white bg-black border-0 py-2 px-4 mt-4  focus:outline-none hover:bg-gray-700 rounded text-sm">
                    But Now
                  </button></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
