// import ProductsHeader from "../components/ProductsHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OPTICALData from "../data/OPTICALData";
import SUNGLASSESData from "../data/SUNGLASSESData";
import ProductsCard from "../components/ProductsCard";
import ProductsCardThreeType from "../components/ProductsCardThreeType";
import Pagination from "../components/Pagination";
import { useState } from "react";
// import Pagination from "../components/Pagination";

// const checkDataPage = (data) => (data.length/12);

const OPTICALs = OPTICALData.map(item=>{
  return(
    <ProductsCard
    key={item.id}
    {...item}
    />
    )
  })
  
  const SUNGLASSESs = SUNGLASSESData.map(item=>{
    return(
      <ProductsCardThreeType
      key={item.id}
      {...item}
    />
  )
})


export default function Products() {
  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  const [isClick, setIsClick] = useState({
    OPTICAL: true,
    SUNGLASSES: false,
    FUNCTIONAL: false
  });


  const clickHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setIsClick(prevIsClick => ({
      [name]: !value
    }))
  }

  function clsx(...str) {
    return str.join(" ");
  }


  const Tabs = ({ children, className }) => {
    return (
      <a className={clsx("border-x border-hairo-200 w-[33%] pt-[24px] pb-[16px] text-8 text-center border-b-8 border-b-white hover:border-b-8 hover:border-b-wine-300", className)}
        href="/" onClick={clickHandler} name={children}>
        {children}
      </a>
    )
  }


  return (
    <>
      <Navbar />

      <div className="font-bold leading-normal flex justify-center my-container p-0">
        <Tabs className={`${isClick.OPTICAL && "border-b-8 border-b-wine-300"}`}>
          OPTICAL
        </Tabs>
        <Tabs className={`${isClick.SUNGLASSES && "border-b-8 border-b-wine-300"}`}>
          SUNGLASSES
        </Tabs>
        <Tabs className={`${isClick.FUNCTIONAL && "border-b-8 border-b-wine-300"}`}>
          FUNCTIONAL
        </Tabs>
      </div>

      <section className="flex">
        <img className="w-[50%]" src={`${path}/product-header-${isClick.SUNGLASSES? 3 : 1}.png`} alt="" />
        <img className="w-[50%]" src={`${path}/product-header-${isClick.SUNGLASSES? 4 : 2}.png`} alt="" />
      </section>

      <main className="py-[80px] my-container leading-normal">
        <h3 className="roboto md:text-[42px] text-[24px] font-bold text-center">
          {isClick.OPTICAL && 'Celluloid Combi' }
          {isClick.SUNGLASSES && '2020 NEW COLLECTION' }
          {isClick.FUNCTIONAL && '2022 冬季系列' }
        </h3>
        <h2 className="md:text-[32px] text-[24px] text-center tracking-tight mb-8">
          {isClick.FUNCTIONAL? "準備中敬請期待....":"賽璐珞鈦金屬混合鏡框"}
        </h2>

        <ul className={`flex flex-wrap justify-between ${!isClick.OPTICAL && 'hidden'}`}>
        {OPTICALs} 
        </ul>

        <ul className={`flex flex-wrap justify-between ${!isClick.SUNGLASSES && 'hidden'}`}>
        {SUNGLASSESs}
        </ul>

        <Pagination />

      </main>

      <Footer />
    </>
  )

}