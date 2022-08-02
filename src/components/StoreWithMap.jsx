import Icon from "@mdi/react";
import { mdiPhoneOutline, mdiClockOutline, mdiMapMarkerOutline } from '@mdi/js';

export default function StoreWithMap(props) {

  const path = 'https://raw.githubusercontent.com/aki168/glasses-website/main/public';

  return (
    <ul className="md:flex">
      <li className="leading-normal w-[100%]
                    mb-6 lg:mb-12] text-[20px] lg:flex gap-4">
        <div className="md:flex md:flex-wrap md:justify-between lg:flex-col lg:gap-4
                        md:mb-4">
          <img src={`${path}/${props.img}`} alt="store-pic" className="md:w-[49%] lg:w-[100%]" />
          <div className="md:w-[49%] lg:w-[100%]">
            <h4 className="text-[24px] border border-hairo-100 py-2 px-6">{props.title}</h4>
            <ul className="border border-hairo-100 py-4 px-6 md:px-7 mb-6 md:m-0">
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
          </div>
        </div>
        <iframe
          className="md:mb-4 w-[100%] h-[206px] md:h-[414px] lg:h-auto"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBZePdRreAm5l5QGnzThnJr-0FRMJ0eCO0&q=${props.add}`}
          >
        </iframe>
      </li>
    </ul>
  )

}

