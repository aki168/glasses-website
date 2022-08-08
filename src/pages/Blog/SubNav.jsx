import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const SubNav = () => {
  return (
    <nav className="hidden md:block text-white bg-wine-600 leading-normal text-[20px]">
    <div className='my-container flex py-3 justify-between'>
      <ul className='flex gap-12'>
        <li> <a href="/" onClick={(e)=>e.preventDefault()}>最新消息</a> </li>
        <li> <a href="/" onClick={(e)=>e.preventDefault()}>特別企劃</a> </li>
        <li> <a href="/" onClick={(e)=>e.preventDefault()}>新品上市</a> </li>
        <li> <a href="/" onClick={(e)=>e.preventDefault()}>鏡框小知識</a> </li>
      </ul>
      <Icon
            className="w-7 inline-block"
            path={ mdiMagnify }
            title="Menu"
            color="white"
          />
    </div>
  </nav>
  )
}

export default SubNav