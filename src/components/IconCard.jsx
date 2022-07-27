

export default function IconCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (

    <li className="w-[100%] md:w-[49%] lg:w-[24%] mb-11">
      <img className="mx-auto w-[83px] text-wine-600" 
            src={path+'/'+props.icon} alt="icon"/>
      <h4 className="text-wine-600 font-bold text-[24px] text-center
                        pt-6 pb-2">{props.title}</h4>
      <p>{props.text}</p>
    </li>
  )
}