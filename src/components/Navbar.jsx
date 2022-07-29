import { Link } from "react-router-dom"
import Icon from '@mdi/react'
import { mdiMenu } from '@mdi/js';
import { useState } from "react";


export default function Navbar() {


  const [menu, setMenu] = useState(false)

  const showMenu = () => {
    setMenu(prevSetMenu => !prevSetMenu)
  }

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (
    <section className="wrap bg-wine-300">
      <nav className="flex justify-between my-container">
        <Link to={ menu || `/glasses-website`} onClick={ menu && showMenu  }
          className={menu && "mx-auto"} >
          <h1 className="hidden">眼鏡形象官網</h1>
          <img className="w-20" src={path + '/logo-white.png'} alt="LOGO" />
        </Link>

        {/* 平板 PC 選單 */}
        <ul className="items-center text-white leading-7 hidden md:flex">
          <li>
            <Link to="/products" className="px-8">系列鏡框</Link>
          </li>
          <li>
            <Link to="/stores" className="px-8">門市據點</Link>
          </li>
          <li>
            <Link to="/blog" className="px-8">部落格</Link>
          </li>
          <li>
            <Link to="/FAQ" className="pl-8">常見問題</Link>
          </li>
        </ul>

        {/* 手機漢堡選單 */}
        {menu ||
          <button className="md:hidden">
            <Icon
              path={mdiMenu}
              title="Menu"
              size={2}
              color="white"
              onClick={showMenu}
            />
          </button>
        }

      </nav>

      {
        menu &&
        <ul className="text-white leading-7 flex flex-wrap md:hidden">
          <li className="w-[50%] text-center border py-3">
            <Link to="/products">系列鏡框</Link>
          </li>
          <li className="w-[50%] text-center border py-3">
            <Link to="/stores" >門市據點</Link>
          </li>
          <li className="w-[50%] text-center border py-3">
            <Link to="/blog">部落格</Link>
          </li>
          <li className="w-[50%] text-center border py-3">
            <Link to="/FAQ">常見問題</Link>
          </li>
        </ul>
      }

    </section>

  )
}