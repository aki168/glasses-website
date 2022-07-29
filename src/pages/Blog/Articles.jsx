import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Articles(props){
  return(
    <>
    <Navbar/>
    <main className="my-container py-4">
      <h4>首頁 / 部落格 / 特別企劃 / 
        <span className="text-wine-300">{props.title}</span>
      </h4>
      <h5 className="text-wine-300">{props.tags}</h5>
      
      
    </main>
    <Footer/>
    </>
  )
}