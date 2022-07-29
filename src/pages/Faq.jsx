import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Title from '../components/Title';
import FaqData from '../data/FaqData';
import FaqCard from '../components/FaqCard';
import { nanoid } from 'nanoid';

const FaqCards = FaqData.map(item => {
  return(
    <FaqCard
      key={nanoid()}
      {...item}
    />
  )
})
export default function Faq(){


  return(
    <>
    <Navbar/>
    <main className="my-container py-10 md:py-20 leading-normal">
      <Title text="常見問題"/>
      <h2 className="text-[24px] font-bold mb-6">我想詢問配鏡問題</h2>
      {FaqCards}
    </main>
    <Footer/>
    </>
  )
}