"use client";

import Image from "next/image";

const stores = [
  {
    image: "/images/stat.png",
    quote: "We will make it possible for you to get big money",
    name: "Jenny",
  },
  // {
  //   image: "/images/shop-2.jpeg",
  //   quote:
  //     "We had no idea how to get started, but Bird showed us the way. And we were able to create something amazing.",
  //   name: "John Prency",
  // },

  // {
  //   image: "/images/s-2.webp",
  //   quote:
  //     "The team at Bird is amazing. They helped us create a stunning store that we are proud of.",
  //   name: "Miguel Martinez",
  // },
];

const ShopifyStores = () => {
  return (
    <section
      className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
    rounded-3xl
  
  "
    >
      <div className=" p-4   mx-auto relative z-10  w-full ">
        <div className="text-4xl py-10 md:pb-8 md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 bg-opacity-50">
        Results of our models <br />
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
        Due to high discretion, we do not show the data of our models.

This is an example account statement and the minimum amount that our experienced models earn
        </p>
        <div className="md:flex items-center justify-center  px-10 ">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
            >
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={store.image}
                  alt="shopify store"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                  &quot;{store.quote}&quot;
                </p>
                <p className="text-neutral-800 font-bold text-lg mt-4">
                  {" "}
                  - {store.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyStores;
