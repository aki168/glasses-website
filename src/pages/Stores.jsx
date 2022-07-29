import { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import data from "../data/StoresCardData";
import StoreCard from "../components/StoreCard";
import Title from "../components/Title";
import Footer from "../components/Footer";
import StoreWithMap from "../components/StoreWithMap";

export default function Stores() {


  const storeCards = data.map(item => {
    return <StoreCard
      key={nanoid()}
      show={true}
      {...item}
    />
  })

  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };





  return (
    <>
      <Navbar />
      <main className="my-container py-10 md:py-20 leading-normal">
        <Title text="門市據點" />
        <form className="w-[100%] mb-6 lg:mb-12 lg:w-[32%] mb-6 flex items-center">
          <label htmlFor="store-select" className="text-[16px] md:text-[24px]  lg:text-[20px] mb-10 mr-1 md:mr-2">選擇地區</label>
          <select name="store-select" value={selected} onChange={handleChange}
            className="mb-10 w-[80%] md:w-[75%] border border-hairo-400 py-2 md:py-1 px-3 
                      text-[18px] text-hairo-350">
            <option disabled={true} value="">
              台北市
            </option>
            <option value="1">台北中山旗艦店</option>
            <option value="2">台北綠園店</option>
            <option value="tc" disabled>台中市</option>
            <option value="3">台中清水旗艦店</option>
            <option value="kh" disabled>高雄市</option>
            <option value="4">高雄中正形象店</option>
            <option value="5">高雄夢時代店</option>
          </select>
        </form>
        <ul className="flex flex-wrap gap-5">
          {storeCards}
      </ul>
          {/* <StoreWithMap
            id="1"
            img="store-1.png"
            title="台北中山旗艦店"
            tel="(02)000-1234"
            openTime="10:00-21:00"
            add="台北市中山區南京東路25巷2-1號"
            /> */}
      </main>
      <Footer />
    </>
  )
}