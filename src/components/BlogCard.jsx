import { useNavigate } from "react-router-dom";

export default function BlogCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  const navigate = useNavigate();

  const getArticleDetail = (e) => {
    e.preventDefault();
    navigate('/blog/article', { state: { whichArticle: props } }, { replace: true });

  }

  return (
    <div className="w-[100%] mb-6 md:flex md:justify-between">
      <a href="!#" onClick={getArticleDetail} className="w-[100%] md:w-[47%] pb-2">
        <img src={`${path}/${props.img[0]}`} alt="article-pic" />
      </a>
      <article className="roboto flex justify-between flex-wrap md:w-[46%]">
        <h3 className="text-wine-600 text-[24px] lg:text-[32px] w-[100%]">{props.title}</h3>
        <h2 className="inline-block font-medium lg:text-[20px]">{props.subtitle}</h2>
        <span className=" text-stone-400">{props.date}</span>
        <p className="hidden lg:block lg:text-[20px] text-hairo-250">
          {props.content}
        </p>          
        <a href="!#" onClick={getArticleDetail} 
              className="lg:text-[36px] text-wine-600 lg:font-black 
              self-end ml-auto hidden lg:block hover:scale-125 transition-all">MORE
          </a>

          {/* PAD */}
        <p className="hidden md:block lg:hidden  text-hairo-250">
          {props.contentPad} 
          <a href="!#" onClick={getArticleDetail} 
              className="text-[16px] text-hairo-250 hidden md:inline-block hover:scale-125 transition-all">more
          </a>
        </p>

      </article>
    </div>
  )

}