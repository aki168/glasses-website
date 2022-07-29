export default function Title(props){

  return(
    <h2 className="border-l border-l-8 border-wine-500 
                  text-[24px] md:text-[48px]  font-bold pl-4 mb-8 md:mb-10">
      {props.text}
    </h2>
  )
}