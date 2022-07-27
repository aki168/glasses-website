


export default function CustomerCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (
    <div className="w-[100%] md:w-[49%] lg:w-[24%]
                    mb-4 md:mb-6 lg:mb-0
                    rounded drop-shadow border border-hairo-300">
      <img src={path+'/'+props.img} alt="Customer-feedback" className="w-[100%]" />
      <div className="p-4 min-h-[205px]">
        <h4 className="font-medium mb-2">{props.name}</h4>
        <p>{props.text}</p>
      </div>
        <p className="text-[14px] text-hairo-600 p-4">{props.date}</p>
    </div>
  )
}