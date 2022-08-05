import { useState } from "react";
import { nanoid } from "nanoid";
import Navbar from "../components/Navbar";
import data from "../data/StoresCardData";
import StoreCard from "../components/StoreCard";
import Title from "../components/Title";
import Footer from "../components/Footer";
import StoreWithMap from "../components/StoreWithMap";

export default function Stores() {

  const [dataCon, setDataCon] = useState(data);
  const [selected, setSelected] = useState('tp');

    // 寫給子層的函式，子層回傳按鈕的name，則設定選單value，進行渲染資料過濾
    // const showCard = (BtnName) => {
    //   setSelected(BtnName);
    //   console.log('按到',BtnName)
    //   // setDataCon(prevDataCon => data.filter(prevDataCon => prevDataCon.id === selected))
    // }
  
  const storeCards = dataCon.map(item => {
    return <StoreCard
      key={nanoid()}
      onItemClick={setSelected}
      {...item}
    />
  })

  const storeCardsWithMap = dataCon.map(item => {
    return <StoreWithMap
      key={nanoid()}
      // click={(e)=> handleClick(e)}
      {...item}
    />
  })

  const handleChange = (event) => {
    console.log(event.target.value);
    // 設定選單選取value
    setSelected(event.target.value);
    // 判斷選單value非all時，篩選原資料
    // 是all時就不再篩選
    event.target.value !== 'all' ?
      setDataCon(prevDataCon => data.filter(prevDataCon => prevDataCon.id === event.target.value))
      : setDataCon(data);
    
    console.log(dataCon);
  };

  const handleClick = (e) => {
    // console.log(event.target.id);
    // // 設定選單選取value
    // setSelected(event.target.id);
    // // 判斷選單value非all時，篩選原資料
    // // 是all時就不再篩選
    // event.target.id !== 'all' ?
    //   setDataCon(prevDataCon => data.filter(prevDataCon => prevDataCon.id === event.target.id))
    //   : setDataCon(data);
    
    console.log(e);
  };




  return (
    <>
      <Navbar />
      <main className="my-container py-10 md:py-20 leading-normal">
        <Title text="門市據點" />
        <form className="w-[100%] mb-6 lg:mb-12 lg:w-[32%] flex items-center">
          <label htmlFor="store-select" className="text-[16px] md:text-[24px]  lg:text-[20px] mb-10 mr-1 md:mr-2">選擇地區</label>
          <select name="store-select"
            value={selected}
            onChange={handleChange}
            className="mb-10 w-[80%] md:w-[75%] border border-hairo-400 py-2 md:py-1 px-3 
                      text-[18px] text-hairo-350">
            <option value="all">顯示全部</option>
            <option disabled={true} value="tp">
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

          {/* 無地圖模式 */}
        {/* {mode && */}
        <ul className="flex flex-wrap gap-5">
          {storeCards}
        </ul>
        {/* } */}
          {/* {storeCardsWithMap} */}
        
      </main>
      <Footer />
    </>
  )
}