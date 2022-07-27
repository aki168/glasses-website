


export default function GlassesCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (
    <li className="w-[100%] md:w-[336px] lg:w-[416px] mb-6">
      <a href="/">
        <img src={path+'/'+props.img} alt="glasses" />
        <h4 className="text-wine-300 text-[48px] text-center font-bold italic">{props.title}</h4>
      </a>
    </li>
  )

}