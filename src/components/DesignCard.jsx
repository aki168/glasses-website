

export default function DesignCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';


  return (
    <li className="w-[100%] md:w-[700px] lg:w-[650px] mb-6">
      <a href="/">
      <img src={path+'/'+props.img} alt="design-glasses" />
      <h4 className="text-wine-300 bg-white text-[48px] text-center font-bold italic
                lg:border-r lg:border-stone-200">{props.title}</h4>
      </a>
    </li>
  )
}
