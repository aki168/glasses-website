import React from 'react'
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const SubNav = () => {
  return (
    <nav className="hidden md:block text-white bg-wine-600 leading-normal text-[20px]">
    <div className='my-container flex py-3 justify-between'>
      <ul className='flex gap-12' onClick={(e)=>e.preventDefault()}>
        <li> <a href="!#">最新消息</a> </li>
        <li> <a href="!#">特別企劃</a> </li>
        <li> <a href="!#">新品上市</a> </li>
        <li> <a href="!#">鏡框小知識</a> </li>
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