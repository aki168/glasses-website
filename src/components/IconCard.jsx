

export default function IconCard(props) {

  return (
    <li className="w-[100%] md:w-[49%] lg:w-[24%] mb-11">
      <div className="mx-auto w-[83px] text-wine-600">{props.icon}</div>
      <h4 className="text-wine-600 font-bold text-[24px] text-center
                      pt-6 pb-2">{props.title}</h4>
      <p>{props.text}</p>
    </li>
  )
}