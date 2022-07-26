


export default function GlassesCard(props){

  return(
  <li className="w-[100%] md:w-[336px] lg:w-[416px] mb-6">
    <img src={props.img} alt="glasses" />
    <h4 className="text-wine-300 text-[48px] text-center font-bold italic">{props.title}</h4>
  </li>
  )

}