import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Listing() {
  return (
    <div className="p-6 md:p-12">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-[16px] md:text-[32px] leading-[16px] md:leading-[32px] text-white ">
            Live sales
          </span>
          <button className="bg-black p-[4px] md:p-2  rounded-lg flex justify-start items-center gap-2">
            <Image
              className="w-[15px] md:w-[32px]"
              src="/bsclogo.svg"
              alt="bsclogo"
              width={25}
              height={25}
            />
            <span className="font-bold text-[14px] leading-[14px] text-white">
              BSC Chain
            </span>
            <span className="text-white text-[30px] ">
              <RiArrowDropDownLine />
            </span>
          </button>
        </div>

        <div className="md:flex flex-col">
          <div className="md:flex justify-between items-center">
            <Image
              className="md:mb-0 mb-6"
              src="/frieght.png"
              alt="freight"
              width={525}
              height={445}
            />
            <Image src="/devil.png" alt="freight" width={525} height={445} />
          </div>
        </div>

        <div className="mt-20">
          <div className="md:flex justify-between items-center mb-6 ">
            <span className="font-bold text-[16px] md:text-[32px] leading-[16px] md:leading-[32px] text-white ">
              Previous launch
            </span>
          </div>

          <div className="md:flex flex-col">
            <div className="md:flex  justify-between  items-center mb-6">
              <Image
                className="md:mb-0 mb-6"
                src="/freight-end.png"
                alt="freight"
                width={525}
                height={445}
              />
              <Image
                src="/freight-end.png"
                alt="freight"
                width={525}
                height={445}
              />
            </div>
            <div className=" md:flex  justify-between items-center">
              <Image
                className="md:mb-0 mb-6"
                src="/freight-end.png"
                alt="freight"
                width={525}
                height={445}
              />
              <Image
                src="/freight-end.png"
                alt="freight"
                width={525}
                height={445}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
