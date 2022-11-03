import Link from "next/link";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";

export default function Presail() {
  return (
    <div>
      <div className="md:flex justify-between items-start gap-6 p-6 md:p-12">
        <div className="flex justify-start gap-2 items-center mb-4 md:mb-0">
          <Image
            className="w-[50px] md:w-[100px] h-[50px] md:h-[100px] "
            src="/devil-dust.svg"
            alt="devildust logo"
            width={100}
            height={100}
          />
          <span className=" md:hidden block font-bold text-[24px] leading-[24px] text-white ">
            DevilDust <br /> Presale
          </span>
        </div>
        <div className="flex justify-start items-center flex-1 gap-4">
          <div className="flex flex-col gap-4">
            <span className=" hidden md:block font-bold text-[40px] leading-[40px] text-white ">
              DevilDust <br /> Presale
            </span>
            <span className="font-normal text-white text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] ">
              DEVIL DUST 🔥 Devil dust is going to be the biggest support token
              for one of the greatest tokens to launch on BSC. Go from a fallen
              angel to an angel by holding Devil Dust😈 Devil Dust holders will
              be rewarded in Angel Dust tokens. 🔥 Low MC 🔥 Safu Team 🔥
              Competitions after launch 🔥 Marketing campaign planned & ready to
              roll. 10/10 taxes 4% to Angeldust ( rewards) 😇 4% to demons
              (marketing) 👹 2% to HELL (Liquidity)🔥
            </span>
          </div>
        </div>

        <div className="border-2 bg-[#7e7ba0] md:mt-o mt-6 bg-opacity-50 rounded-3xl flex-col flex flex-1 ">
          <div className="flex flex-col p-6 ">
            <div className="flex flex-row-reverse">
              <span className=" flex p-1 justify-center font-kinn bg-[#04cf00] bg-opacity-20 w-[62.27px] font-bold text-[16px] leading-[16px] text-[#36CF00] ">
                Live
              </span>
            </div>

            <div className="flex flex-col font-bold mb-6">
              <span className="text-[#9A999C] font-poppins text-[10px] leading-[15px] ">
                Sale end in
              </span>
              <span className="text-white text-[24px] leading-[24px] font-kinn ">
                00 : 12 : 28 : 04
              </span>
            </div>

            <div className="flex flex-col font-bold mb-2">
              <span className="text-white text-[16px] leading-[16px] font-kinn mb-2 ">
                Progress (65%)
              </span>
              <Image
                className="mb-2"
                src="/progress.png"
                alt="progress bar"
                width={486.9}
                height={7.12}
              />
              <div className="flex justify-between items-center">
                <span className="text-[10px] leading-[15px] font-poppins text-[#9A999C]  ">
                  23.365096308565307375 $SAP
                </span>
                <span className="text-[10px] leading-[15px] font-poppins text-[#9A999C] ">
                  40$SAP
                </span>
              </div>
            </div>

            <div className="flex flex-col font-bold">
              <span className="font-poppins text-white text-[14px] leading-[21px] ">
                Buy
              </span>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex  justify-between items-start gap-6 p-6 md:p-12 md:ml-[120px] ">
        <div className="border-2 bg-[#7e7ba0]  md:mt-o mt-6 bg-opacity-50 rounded-3xl flex-col flex flex-1 ">
          <div className="flex flex-col p-4 md:p-6 ">
            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Presale Address
              </span>
              <div className="flex justify-start items-center gap-1 md:gap-4">
                <span className="font-normal font-poppins text-[#FFD549] text-[14px] leading-[21px] underline ">
                  0x695182EDd7064....
                </span>
                <Image src="/svg.svg" alt="svg" width={15} height={15} />
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Token Name
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                DevilDust
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Token Decimals
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                9
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <div className="flex flex-col font-kinn gap-[2px] ">
                <span className=" font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                  Token Address
                </span>
                <span className="text-[#9A999C] text-[12px] md:text-[14px] leadinng-[12px] md:leading-[14px] ">
                  (Don’t send tokens)
                </span>
              </div>
              <div className="flex justify-start items-center gap-1 md:gap-4">
                <span className="font-normal font-poppins text-[#FFD549] text-[14px] leading-[21px] underline ">
                  0x695182EDd7064....
                </span>
                <Image src="/svg.svg" alt="svg" width={15} height={15} />
              </div>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Total Supply
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                666,666,666 DD
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Tokens For Liquidity
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                121,599,984.8 DD
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Presale Rate
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                1 $SAP = 7,999,999 DD
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Listing Rate
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                1 $SAP = 7,999,999 DD
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Listing Rate
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                1 $SAP = 7,999,999 DD
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Soft Cap
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                10 SAP
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Hard Cap
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                20 SAP
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Unsold Tokens
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                Refund
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Presale Start Time
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                2022.10.29 21:52 (UTC)
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Presale End Time
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                2022.10.30 14:00 (UTC)
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Listing On
              </span>
              <span className="font-normal font-poppins text-[#FFD549] underline text-[14px] leading-[21px] ">
                3swap launchpad
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Liquidity Percent
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                80%
              </span>
            </div>

            <div className="flex justify-between items-center mb-2">
              <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                Liquidity Lockup Time
              </span>
              <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                30 days after pool ends
              </span>
            </div>

            <div className="mt-6">
              <div className="flex justify-start items-center gap-6">
                <div className="flex justify-start gap-2 items-center">
                  <span className="font-bold text-white text-[16px] leading-[32px] font-kinn ">
                    Whitepaper
                  </span>
                  <Image
                    src="/ei.svg"
                    alt="external link"
                    width={25}
                    height={25}
                  />
                </div>

                <div className="flex justify-start gap-2 items-center">
                  <span className="font-bold text-white text-[16px] leading-[32px] font-kinn ">
                    Social
                  </span>
                  <Image
                    src="/ei.svg"
                    alt="external link"
                    width={25}
                    height={25}
                  />
                </div>
              </div>

              <div className="flex justify-start gap-2 items-center">
                <span className="font-bold text-white text-[16px] leading-[32px] font-kinn ">
                  Community
                </span>
                <Image
                  src="/ei.svg"
                  alt="external link"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
        {/* end of first card section */}

        <div className="flex flex-1 flex-col">
          <div className="border-2 bg-[#7e7ba0] md:mt-o mt-6 bg-opacity-50 rounded-3xl flex-col flex flex-1 ">
            <div className="flex flex-col p-6 ">
              <div className="flex justify-between items-center mb-2">
                <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                  Status
                </span>
                <span className="font-normal font-poppins text-[#FFD549] underline text-[14px] leading-[21px] ">
                  Inprogress
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                  Sale Type
                </span>
                <span className="font-normal font-poppins text-[#FFD549] text-[14px] leading-[21px] ">
                  Public
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                  Minimum Buy
                </span>
                <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                  0.1 SAP
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                  Total Contributors
                </span>
                <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                  4
                </span>
              </div>

              <div className="flex justify-between items-center mb-2">
                <span className="font-kinn font-bold text-white text-[14px] md:text-[16px] leading-[14px] md:leading-[16px] ">
                  Maximum Buy
                </span>
                <span className="font-normal font-poppins text-white text-[14px] leading-[21px] ">
                  0.5 SAP
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-6">
            <button className="bg-black flex mb-8 justify-center rounded-md p-2 w-[311.57px] ">
              <div className="flex justify-start gap-1 items-center">
                <Link href="/">
                  <span className="font-bold text-white text-[16px] leading-[16px] ">
                    Discuss in community
                  </span>
                </Link>
                <span className="text-white text-[18px] ">
                  <FaTelegramPlane />
                </span>
              </div>
            </button>

            <span className="font-bold font-kinn text-[20px] md:text-[22px] mb-4 leading-[20px] md:leading-[22px] text-white ">
              Remind me about this project
            </span>

            <button className="border-2 bg-[#7e7ba0] bg-opacity-50 flex mb-4 justify-center rounded-md p-2 w-[334.05px] md:w-[445.35px] ">
              <Link href="/">
                <span className="font-normal font-poppins text-white text-[20px] leading-[30px] ">
                  Input E-mail
                </span>
              </Link>
            </button>

            <button className="bg-black flex  justify-center rounded-md p-2 w-[311.57px] ">
              <Link href="/">
                <span className="font-normal font-poppins text-white text-[20px] leading-[30px] ">
                  Input E-mail
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
