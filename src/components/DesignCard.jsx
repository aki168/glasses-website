

export default function DesignCard(props) {


  return (
    <li className="w-[100%] md:w-[700px] lg:w-[650px] mb-6">
      <img src={props.img} alt="design-glasses" />
      <h4 className="text-wine-300 bg-white text-[48px] text-center font-bold italic
                lg:border-r lg:border-stone-200">{props.title}</h4>
    </li>
  )
}
