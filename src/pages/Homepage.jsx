import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Homepage(){

  return(
    <>
    <Navbar/>
      <header className="header text-wine-600 leading-normal
                          ">
        <h3 className="text-[36px]">Promise-Desert 2020 早春系列</h3>
        <h2 className="text-[64px] font-bold">看得清，才能看得遠</h2>
        <button className="bg-wine-300 text-white text-[20px] py-[6px] px-2 font-medium">立即購買</button>
      </header>

    <Footer/>
    </>
  )
}