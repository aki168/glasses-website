export default function ProductsCard(props){

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return(
    <div className="text-[24px] leading-normal
                    w-[100%] mb-6 md:w-[48%] md:mb-10 lg:w-[23%] lg:mb-20">
      <img src={`${path}/${props.icon}`} alt="product-pic" className="w-[100%]" />
      <ul className="flex justify-between roboto">
        <li>{props.title}</li>
        <li className="text-wine-300 font-bold">NTD{props.price}</li>
      </ul>
      <div className="inline-block w-6 h-6 bg-choco rounded mr-2"></div>
      <div className="inline-block w-6 h-6 bg-kaki rounded"></div>
    </div>
    
  )
}