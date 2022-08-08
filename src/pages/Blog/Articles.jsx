import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SubNav from "./SubNav";
import { useLocation } from "react-router-dom";
import Icon from '@mdi/react'
import { mdiLabelOutline } from '@mdi/js';

export default function Articles(){
  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';
  const { state: { whichArticle } = {} } = useLocation();//把前一頁點擊的id值記錄下來
  console.log(whichArticle);

  const {img, article, tagsAll} = whichArticle;

  const contentData = [];
  for (let i=0; i<img.length; i++){
    contentData.push({img:img[i],article:article[i]})
  }

  console.log('new Arr',contentData)
  const contentCards = contentData.map( item => (
    <div className="mb-4 md:mb-10">
      <img className="mb-2" src={path+'/'+item.img} alt="article-content-pic" />
      <p className="text-hairo-500">{item.article}</p>
    </div>
  ) )

  const allTags = tagsAll.map( item => ( <span className="text-[24px]"> {item}　</span> ))



  return(
    <>
    <Navbar/>
    <SubNav/>
    <section className="my-container py-4 leading-normal md:flex">
      <main className="w-[100%] md:w-2/3 py-6">
      <h4>首頁 / 部落格 / 特別企劃 / 
        <span className="text-wine-300"> {whichArticle.title}</span>
      </h4>
      <h5 className="text-wine-300 font-bold md:text-[24px]">{whichArticle.tags.map(item => item+'　')}</h5>
      <h2 className="text-[24px] md:text-[48px]">{whichArticle.title}</h2>
      <h3 className="font-medium md:text-[24px] mb-4">{whichArticle.subtitle}</h3>
      {contentCards}
      </main>

      <div className="leading-normal font-bold text-wine-500 hidden md:block md:w-[30%] lg:w-[19%] pl-6">
        <h3 className="text-[32px] pt-[100px] align-middle">
          <Icon className="w-[45px] inline-block" path={mdiLabelOutline} /> TAGS
        </h3>
        {allTags}
      </div>
    </section>
    <Footer/>
    </>
  )
}