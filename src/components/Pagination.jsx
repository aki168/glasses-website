// import { useEffect, useState } from "react"

export default function pagination(props) {

  // const pageBox = ({children}) => {
  //   <a className="roboto py-3 px-4 border border-r-0 border-hairo-500 hover:bg-black hover:text-white active:bg-black active:text-white" 
  //   href="/" onClick={(e) => e.preventDefault()}>{children}</a>
  // }




  return (
    <div className="flex justify-center">
      <a className="roboto py-3 px-2 border border-r-0 border-hairo-500       hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>上一頁</a>
      <a className="roboto py-3 px-4 border border-r-0 border-hairo-500 hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>1</a>
      <a className="roboto py-3 px-4 border border-r-0 border-hairo-500 hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>2</a>
      <a className="roboto py-3 px-4 border border-r-0 border-hairo-500 hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>3</a>
      <a className="roboto py-3 px-4 border border-r-0 border-hairo-500 hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>4</a>
      <a className="roboto py-3 px-4 border border-r-0 border-hairo-500 hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>5</a>
      <a className="roboto py-3 px-2 border border-hairo-500                  hover:bg-black hover:text-white active:bg-black active:text-white" href="/" onClick={(e) => e.preventDefault()}>下一頁</a>
    </div>
  )
}