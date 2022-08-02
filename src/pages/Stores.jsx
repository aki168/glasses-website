import { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import data from "../data/StoresCardData";
import StoreCard from "../components/StoreCard";
import Title from "../components/Title";
import Footer from "../components/Footer";
// import StoreWithMap from "../components/StoreWithMap";

export default function Stores() {

  const [dataCon, setDataCon] = useState(data);
  console.log(dataCon)


  const storeCards = dataCon.map(item => {
    return <StoreCard
      key={nanoid()}
      {...item}
    />
  })

  // const storeCardsWithMap = dataCon.map(item => {
  //   return <StoreWithMap
  //     key={nanoid()}
  //     {...item}
  //   />
  // })


  const handleChange = event => {
    console.log(event.target.value);
    if (event.target.value !== 'all') {
      setDataCon(prevDataCon => data.filter(prevDataCon => prevDataCon.id === event.target.value))
    } else {
      setDataCon(data)
    }
    console.log(dataCon);
  };



  return (
    <>
      <Navbar />
      <main className="my-container py-10 md:py-20 leading-normal">
        <Title text="門市據點" />
        <form className="w-[100%] mb-6 lg:mb-12 lg:w-[32%] flex items-center">
          <label htmlFor="store-select" className="text-[16px] md:text-[24px]  lg:text-[20px] mb-10 mr-1 md:mr-2">選擇地區</label>
          <select name="store-select"
            // value={selected}
            onChange={handleChange}
            className="mb-10 w-[80%] md:w-[75%] border border-hairo-400 py-2 md:py-1 px-3 
                      text-[18px] text-hairo-350">
            <option value="all">顯示全部</option>
            <option disabled={true} value="">
              台北市
            </option>
            <option value="1">台北中山旗艦店</option>
            <option value="2">台北綠園店</option>
            <option value="tc" disabled={true}>台中市</option>
            <option value="3">台中清水旗艦店</option>
            <option value="kh" disabled={true}>高雄市</option>
            <option value="4">高雄中正形象店</option>
            <option value="5">高雄夢時代店</option>
          </select>
        </form>


        <ul className="flex flex-wrap gap-5">
          {storeCards}
        </ul>
        
      </main>
      <Footer />
    </>
  )
}