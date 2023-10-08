// import React, { useState, useEffect } from 'react';

const Products = (props) => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:1337/api/products?populate=*');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data)

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
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {props.umar}
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Chichen Itza
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat.
                Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

export async function getServerSideProps() {
  let headers = {
    Authorization:
      "Bearer c0f2abd1bda90ec3c9c5b2b9718dea400117577a06d746075851e4127586c22c90e44916c17ce7d32f60ea34a23805a220b5283b731e5a941986a710b6ea1b07d48ca0d23c15caadba570708590fdefffa8aa43c183fc11e8180db4fdf32c40dcc4496278b44613ab0d7c82112e2680916f4c37d918d3b451cf35322cd75920f",
  };
  let data = await fetch(
    "http://localhost:1337/api/products?populate=*",
    { get: headers }
  );
  let allData = await data.json();
  console.log("allData: ", allData);

  return {
    props: { allData },
  };
}
