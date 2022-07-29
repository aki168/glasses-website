export default function BlogCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (
    <div className="w-[100%] mb-6 md:flex md:justify-between">
      <img src={`${path}/${props.img[0]}`} alt="article-pic" 
          className="w-[100%] md:w-[48%] pb-2" />
      <article className="roboto flex justify-between flex-wrap md:w-[48%]">
        <h3 className="text-wine-600 text-[24px] lg:text-[32px] w-[100%]">{props.title}</h3>
        <h2 className="inline-block font-medium lg:text-[20px]">{props.subtitle}</h2>
        <span className=" text-stone-400 md:mb-1">{props.date}</span>
        <p className="hidden md:block lg:text-[20px] text-hairo-250">{props.content}</p>
        <a href="/" className="lg:text-[36px] lg:text-wine-600 lg:font-bold self-end ml-auto
                    md:text-[16px] md:text-hairo-250 hidden md:block 
                    lg:uppercase">more</a>
      </article>
    </div>
  )

}