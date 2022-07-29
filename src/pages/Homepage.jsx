import {nanoid} from "nanoid";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IconCard from "../components/IconCard";
import GlassesCard from "../components/GlassesCard";
import DesignCard from "../components/DesignCard";
import CustomerCard from "../components/CustomerCard";

// 引用資料
import IconCardData from '../data/IconCardData';
import GlassesCardData from '../data/GlassesCardData';
import CustomerCardData from '../data/CustomerCardData';

export default function Homepage() {

  const IconCards = IconCardData.map(item => {
    return (
      <IconCard
        key={nanoid()}
        {...item}
      />
    )
  })

  const GlassesCards = GlassesCardData.map(item => {
    return (
      <GlassesCard
        key={nanoid()}
        {...item}
      />
    )
  })

  const CustomerCards = CustomerCardData.map(item => {
    return (
      <CustomerCard
        key={nanoid()}
        {...item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <header className="bg-hero-sm md:bg-hero py-[300px] bg-cover bg-center
                      text-wine-600 leading-normal text-end">
        <section className="my-container">
          <h3 className="text-[36px]">Promise-Desert 2020 早春系列</h3>
          <h2 className="text-[64px] font-bold">看得清，才能看得遠</h2>
          <button className="bg-wine-300 text-white text-[20px] py-[6px] px-2 font-medium">立即購買</button>
        </section>
      </header>

      {/* 品牌聲明 */}
      <main className="py-20 leading-normal bg-wine-100">
        <h2 className="my-title mb-8">用專業的心，做專業的事</h2>
        <ul className="flex flex-wrap justify-center md:justify-between 
                        px-9 my-container md:pb-10 lg:pb-0">
          {IconCards}
        </ul>
      </main>

      {/* 經典系列 */}
      <section className="py-20 px-4 leading-normal">
        <h2 className="my-title mb-12">經典系列鏡框</h2>
        <ul className="flex flex-wrap flex-col 
                      md:justify-center md:flex-row gap-6"
          onClick={(e) => { e.preventDefault() }}>
          {GlassesCards}
        </ul>
      </section>

      {/* 聯名系列 */}
      <section className="py-20 px-4 leading-normal
                bg-index-sm md:bg-index-md lg:bg-index bg-cover bg-center">
        <h2 className="my-title mb-12 text-white">聯名系列鏡框</h2>
        <ul className="flex justify-center flex-wrap" onClick={(e) => { e.preventDefault() }}>
          <DesignCard
            className="border-r border-stone-400"
            title="DOUBLE A+"
            img="home-section4-1.png"
          />
          <DesignCard
            title="YOUTH"
            img="home-section4-2.png"
          />
        </ul>
      </section>

      {/* 顧客推薦 */}
      <section className="py-20 px-4 leading-normal my-container">
        <h2 className="my-title mb-12">顧客推薦</h2>
        <ul className="flex justify-between flex-wrap">
          {CustomerCards}
        </ul>
      </section>

      {/* 聯絡我們：待製作 */}

      <Footer />

    </>
  )
}