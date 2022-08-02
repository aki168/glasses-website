import Icon from "@mdi/react";
import { mdiPhoneOutline, mdiClockOutline, mdiMapMarkerOutline } from '@mdi/js';

export default function storeCard(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  

  return (
    <li className="leading-normal w-[100%] mb-6 md:w-[47%] lg:mb-12 lg:w-[32%]
                text-[20px] ">
      <img src={`${path}/${props.img}`} alt="store-pic" />
      <h4 className="text-[24px] border border-hairo-100 py-2 px-6">{props.title}</h4>
      <ul className="border border-hairo-100 py-4 px-6 md:px-7">
        <li className="px-2 flex gap-2 pb-2">
          <Icon
            path={mdiPhoneOutline}
            size={1}
          />
          電話：
          {props.tel}
        </li>
        <li className="px-2 flex gap-2 pb-2">
          <Icon
            path={mdiClockOutline}
            size={1}
          />
          營業時間：
          {props.openTime}
        </li>
        <li className="px-2 flex gap-2">
          <Icon
            path={mdiMapMarkerOutline}
            size={1}
          />
          地址：
          {props.add}
        </li>
      </ul>
      <button className="py-4 w-[100%] bg-black text-white text-[20px]"
        // onClick={checkShop}
        >
        詳情資訊
      </button>
    </li>
  )

}