"use client";
import CategorySection from "@/components/CategorySection";
import DealOffer from "@/components/DealOffer";
import MainCategory from "@/components/MainCategory";
import OurService from "@/components/Services/OurService";
import SupplierQuoteForm from "@/components/SupplierQuoteForm";
import SuppliersRegion from "@/components/SuppliersRegion";
import ProductCard from "@/components/Products/ProductCard";
import ProductItem from "@/components/Products/ProductItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { faPalette, faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShieldHalved } from "@fortawesome/free-solid-svg-icons/faShieldHalved";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 2
  }
};
export default function Home() {
  const products = [
    { title: "Soft chairs", price: "USD 19", srcImg: './1.png', url: "#" },
    { title: "Soft & chairs", price: "USD 19", srcImg: './12.png', url: "#" },
    { title: "Kitchen dishes", price: "USD 19", srcImg: './13.png', url: "#" },
    { title: "Smart watches", price: "USD 19", srcImg: './4.png', url: "#" },
    { title: "Kitchen mixer", price: "USD 100", srcImg: './14.png', url: "#" },
    { title: "Blenders", price: "USD 39", srcImg: './15.png', url: "#" },
    { title: "Home appliance", price: "USD 19", srcImg: './16.png', url: "#" },
    { title: "Coffee maker", price: "USD 10", srcImg: './17.png', url: "#" }
  ]
  const gadgets = [
    { title: "Smart watches", price: "USD 19", srcImg: './watch.png', url: "#" },
    { title: "Cameras", price: "USD 89", srcImg: './camera.png', url: "#" },
    { title: "Headphones", price: "USD 10", srcImg: './9.png', url: "#" },
    { title: "Smart watches", price: "USD 90", srcImg: './Kettle.png', url: "#" },
    { title: "Gaming set", price: "USD 35", srcImg: './headphone.png', url: "#" },
    { title: "Laptops & PC", price: "USD 340", srcImg: './laptop.png', url: "#" },
    { title: "Smartphones", price: "USD 19", srcImg: './mobile.png', url: "#" },
    { title: "Electric kattle", price: "USD 240", srcImg: './mobile.png', url: "#" }
  ]
  return (
    <section className="py-6">
      <MainCategory />
      <DealOffer />
      <CategorySection
        leftImage="/image92.png"
        heading="Home and outdoor"
        btnLink="#">
        <div className="md:grid grid-cols-2 col-span-3 gap-0.5 pt-1 md:grid-cols-4 hidden">
          <ProductItem title="Soft chairs" price="USD 19" srcImg={'./1.png'} url="#" />
          <ProductItem title="Soft & chairs" price="USD 19" srcImg={'./12.png'} url="#" />
          <ProductItem title="Kitchen dishes" price="USD 19" srcImg={'./13.png'} url="#" />
          <ProductItem title="Smart watches" price="USD 19" srcImg={'./4.png'} url="#" />
          <ProductItem title="Kitchen mixer" price="USD 100" srcImg={'./14.png'} url="#" />
          <ProductItem title="Blenders" price="USD 39" srcImg={'./15.png'} url="#" />
          <ProductItem title="Home appliance" price="USD 19" srcImg={'./16.png'} url="#" />
          <ProductItem title="Coffee maker" price="USD 10" srcImg={'./17.png'} url="#" />
        </div>
        <div className="block md:hidden">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet","mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {products.map((product, index) => (
              <div key={index}>
                <ProductItem {...product} />
              </div>
            ))}
          </Carousel>
        </div>
      </CategorySection>
      <CategorySection
        leftImage="/image98.png"
        heading="Consumer electronics and gadgets"
        btnLink="#"
      >
        <div className="md:grid grid-cols-2 col-span-3 gap-0.5 pt-1 md:grid-cols-4 hidden">
          <ProductItem title="Smart watches" price="USD 19" srcImg={'./watch.png'} url="#" />
          <ProductItem title="Cameras" price="USD 89" srcImg={'./camera.png'} url="#" />
          <ProductItem title="Headphones" price="USD 10" srcImg={'./9.png'} url="#" />
          <ProductItem title="Smart watches" price="USD 90" srcImg={'./Kettle.png'} url="#" />
          <ProductItem title="Gaming set" price="USD 35" srcImg={'./headphone.png'} url="#" />
          <ProductItem title="Laptops & PC" price="USD 340" srcImg={'./laptop.png'} url="#" />
          <ProductItem title="Samrtphones" price="USD 19" srcImg={'./mobile.png'} url="#" />
          <ProductItem title="Electric Kattle" price="USD 240" srcImg={'./mobile.png'} url="#" />
        </div>
        <div className="block md:hidden">
          <Carousel
            responsive={responsive}
            ssr={true}
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet","mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {gadgets.map((gadget, index) => (
              <div key={index}>
                <ProductItem {...gadget} />
              </div>
            ))}
          </Carousel>
        </div>


      </CategorySection>
      <SupplierQuoteForm />
      {/* Recomedned section */}
      <div className="px-4 md:px-0 mt-6">
        <h1 className="mb-6 text-2xl font-bold">Recommended items</h1>

        {/* <!-- Grid Container --> */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {/* <!-- Item 1 --> */}
          <ProductCard url="#" imageUrl={"/2.png"} imageAlt="T-shirt" price="$10.30" description="T-shirts with multiple colors, for men" />
          {/* <!-- Item 2 --> */}
          <ProductCard url="#" imageUrl={"/3.png"} imageAlt="Winter jacket" price="$10.30" description="Jeans shorts for men blue color" />
          {/* <!-- Item 3 --> */}
          <ProductCard url="#" imageUrl={"/7.png"} imageAlt="Blue blazer" price="$12.50" description="Brown winter coat medium size" />
          {/* <!-- Item 4 --> */}
          <ProductCard url="#" imageUrl={"/6.png"} imageAlt="Wallet" price="$34.00" description="Jeans bag for travel for men" />
          {/* <!-- Item 5 --> */}
          <ProductCard url="#" imageUrl={"/5.png"} imageAlt="Backpack" price="$99.00" description="Leather wallet" />
          {/* <!-- Item 6 --> */}
          <ProductCard url="#" imageUrl={"/11.png"} imageAlt="Denim shorts" price="$9.99" description="Canon camera black, 100x zoom" />
          {/* <!-- Item 7 --> */}
          <ProductCard url="#" imageUrl={"/9.png"} imageAlt="Headphones" price="$8.99" description="Headset for gaming with mic" />
          {/* <!-- Item 8 --> */}
          <ProductCard url="#" imageUrl={"/5.png"} imageAlt="Smartwatch" price="$10.30" description="Smartwatch silver color modern" />
          {/* <!-- Item 9 --> */}
          <ProductCard url="#" imageUrl={"/4.png"} imageAlt="Wallet" price="$10.30" description="Blue wallet for men leather metarfial" />
          {/* <!-- Item 10 --> */}
          <ProductCard url="#" imageUrl={"/10.png"} imageAlt="Travel bag" price="$80.95" description="Jeans bag for travel for men" />
        </div>
      </div>
      {/* Service sections */}
      <div className="px-4 md:px-0 mt-6">
        <h2 className="relative inline-block mb-8 text-3xl font-bold">
          Our extra services
          {/* <span className="absolute bottom-0 left-0 w-full h-1 transform -translate-y-2 bg-blue-500"></span> */}
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- Source from Industry Hubs --> */}
          <OurService url="#" iconName={faPalette} image="/image108.png" imgAlt="Warehouse with boxes" heading="Source from Industry Hubs" />
          {/* <!-- Customize Your Products --> */}
          <OurService url="#" iconName={faSearch} image="/image104.png" imgAlt="Color palette" heading="Customize Your Products" />

          {/* <!-- Fast, reliable shipping --> */}
          <OurService url="#" iconName={faPaperPlane} image="/image106.png" imgAlt="Product inspection" heading="Fast, reliable shipping by ocean or air" />

          {/* <!-- Product monitoring --> */}
          <OurService url="#" iconName={faShieldHalved} image="/image107.png" imgAlt="Cargo plane and containers" heading="Product monitoring and inspection" />

        </div>
      </div>
      <SuppliersRegion/>
    </section>
  );
}
