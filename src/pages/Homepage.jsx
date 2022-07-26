import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IconCard from "../components/IconCard";
import GlassesCard from "../components/GlassesCard";
import DesignCard from "../components/DesignCard";
import CustomerCard from "../components/CustomerCard";
import Icon from "@mdi/react";
import { mdiCurrencyUsd, mdiClockTimeFourOutline, mdiCardsHeartOutline, mdiGlasses } from '@mdi/js';


export default function Homepage() {

  return (
    <>
      <Navbar />
      <header className="bg-hero-sm md:bg-hero  py-[300px] bg-cover bg-center
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
                        px-9 my-container md:pb-10 lg:pb-16">

          <IconCard
            icon={<Icon path={mdiCurrencyUsd} />}
            title="單一價格"
            text="無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。"
          />
          <IconCard
            icon={<Icon path={mdiClockTimeFourOutline} />}
            title="20 分鐘即可取件"
            text="為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快 20 分鐘即可完成。"
          />
          <IconCard
            icon={<Icon path={mdiCardsHeartOutline} />}
            title="安心售後服務"
            text="我們提供長達 120 天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。"
          />
          <IconCard
            icon={<Icon path={mdiGlasses} />}
            title="關於鏡片"
            text="使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。"
          />
        </ul>
      </main>

      {/* 經典系列 */}
      <section className="py-20 px-4 leading-normal">
        <h2 className="my-title mb-12">經典系列鏡框</h2>
        <ul className="flex flex-wrap flex-col 
                      md:justify-center md:flex-row gap-6"
                      onClick={(e)=>{e.preventDefault()}}>
          <GlassesCard
            img="home-section3-1.png"
            title="OPTICAL"
          />
          <GlassesCard
            img="home-section3-2.png"
            title="SUNGLASSES"
          />
          <GlassesCard
            img="home-section3-3.png"
            title="FUNCTIONAL"
          />
        </ul>
      </section>

      {/* 聯名系列 */}
      <section className="py-20 px-4 leading-normal
                bg-index-sm md:bg-index-md lg:bg-index bg-cover bg-center">
        <h2 className="my-title mb-12 text-white">聯名系列鏡框</h2>
        <ul className="flex justify-center flex-wrap" onClick={(e)=>{e.preventDefault()}}>
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
      <section className="py-20 px-4 leading-normal">
        <h2 className="my-title mb-12">顧客推薦</h2>
        <ul className="flex justify-between flex-wrap">
          <CustomerCard
            img="home-section5-1.png"
            name="Jessy"
            text="眼鏡品質優良，下次還會想來這邊購買！"
            date="2021/06/20"
          />

          <CustomerCard
            img="home-section5-2.png"
            name="凱倫"
            text="做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！"
            date="2021/04/18"
          />

          <CustomerCard
            img="home-section5-3.png"
            name="悠悠"
            text="謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！"
            date="2020/12/25"
          />

          <CustomerCard
            img="home-section5-4.png"
            name="Kyuan"
            text="服務很好，品質沒有任何問題，非常喜歡。"
            date="2020/10/31"
          />
        </ul>
      </section>

      {/* 聯絡我們：待製作 */}

      <Footer />

    </>
  )
}