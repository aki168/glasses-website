


export default function CustomerCard(props) {

  return (
    <div className="w-[100%] md:w-[49%] lg:w-[24%]
                    rounded drop-shadow border border-hairo-300">
      <img src={props.img} alt="Customer-feedback" />
      <div className="p-4 min-h-[205px]">
        <h4 className="font-medium mb-2">{props.name}</h4>
        <p>{props.text}</p>
      </div>
        <p className="text-[14px] text-hairo-600 p-4">{props.date}</p>
    </div>
  )
}