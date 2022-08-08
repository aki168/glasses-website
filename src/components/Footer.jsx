import { Link } from "react-router-dom";
import Icon from '@mdi/react'
import { mdiPhoneOutline, mdiEmailOutline } from '@mdi/js';

export default function Footer() {
  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (
    <footer className="wrap bg-wine-300 text-white py-4 px-3 md:px-2">
      <section className="flex md:block justify-between">
        <nav className="justify-between my-container mb-9
                        hidden md:flex">
          <ul className="items-center text-white leading-normal flex
                        ">
            <li>
              <Link to="/glasses-website" className="pr-6 mb-12">首頁</Link>
            </li>
            <li>
              <Link to="/products" className="px-6">系列鏡框</Link>
            </li>
            <li>
              <Link to="/stores" className="px-6">門市據點</Link>
            </li>
            <li>
              <Link to="/blog" className="px-6">部落格</Link>
            </li>
            <li>
              <Link to="/FAQ" className="pl-6">常見問題</Link>
            </li>
          </ul>
          <ul className="flex" onClick={(e)=>{e.preventDefault()}}>
            <li><a href="!#"><img className="w-6 md:w-11 hover:scale-125 transition-all" src={`${path}/ic_social_ig.png`}  alt="IG" /></a></li>
            <li><a href="!#"><img className="w-6 md:w-11 ml-8 hover:scale-125 transition-all" src={`${path}/ic-social-fb.png`} alt="FB" /></a></li>
            <li><a href="!#"><img className="w-6 md:w-11 ml-8 hover:scale-125 transition-all" src={`${path}/ic_social_line.png`} alt="LINE" /></a></li>
          </ul>
        </nav>


        <ul className="contact pb-6 md:pb-8 my-container p-0 py-4">
          <li className="align-middle mb-2">
              <Icon
                className="md:w-9 w-5 md:mr-5 mr-3 inline-block"
                path={mdiPhoneOutline}
                title="Menu"
                color="white"
              />
            <a className="md:text-[36px] leading-normal" href="tel:+886800000000">
              0800-000-000
            </a>
          </li>
          <li className="align-middle">
              <Icon
                className="md:w-9 w-5 md:mr-5 mr-3 inline-block"
                path={mdiEmailOutline}
                title="Menu"
                color="white"
              />
            <a className="md:text-[36px] leading-normal" href="mailto:glasses@business.com">
              glasses@business.com
            </a>
          </li>
        </ul>

        <ul className="flex md:hidden" onClick={(e)=>{e.preventDefault()}}>
            <li>
              <a href="!#">
                <img className="w-11" src={`${path}/ic_social_ig.png`} alt="IG" />
              </a>
            </li>
            <li>
              <a href="!#">
                <img className="w-11 ml-1" src={`${path}/ic-social-fb.png`} alt="FB" />
              </a>
            </li>
            <li>
              <a href="!#">
                <img className="w-11 ml-1" src={`${path}/ic_social_line.png`} alt="LINE" />
              </a>
            </li>
        </ul>
      </section>

      <h5 className="md:flex justify-between py-8 leading-normal border-t border-white
                      my-container">
        <span className="pb-2">
          Copyright © 2020 Glasses.All rights reserved.
        </span>
        <ul className="md:flex" onClick={(e)=>{e.preventDefault()}}>
          <li className="py-2 md:py-0 md:px-2"><a href="/">隱私權政策</a></li>
          <li ><a href="/">服務條款</a></li>
        </ul>
        
      </h5>
    </footer>
  )
}