import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <div className="p-6 md:p-12 md:flex  justify-between items-center">
      <div className="md:flex justify-start items-center flex-col-2 gap-6 text-white text-opacity-80">
        <div className="flex justify-start mb-2 md:mb-0 md:px-4 gap-2 items-center md:border-r-2 md:border-white">
          <Link href="/">
            <span className="font-bold  text-[16px] leading-[150%] font-kinn ">
              Ecosystem
            </span>
          </Link>
          <Image src="/ei.svg" alt="external link" width={25} height={25} />
        </div>
        <div className="flex justify-start mb-2 md:mb-0 gap-2 items-center md:border-r-2 md:border-white md:px-4">
          <Link href="/">
            <span className="font-bold  text-[16px] leading-[150%] font-kinn ">
              Careers
            </span>
          </Link>
          <Image src="/ei.svg" alt="external link" width={25} height={25} />
        </div>

        <div className="flex justify-start mb-2 md:mb-0 gap-2 items-center md:border-r-2 md:border-white md:px-4">
          <Link href="/">
            <span className="font-bold  text-[16px] leading-[150%] font-kinn ">
              Blog
            </span>
          </Link>
          <Image src="/ei.svg" alt="external link" width={25} height={25} />
        </div>
        <div className="flex justify-start gap-2 items-center md:border-r-2 md:border-white md:px-4">
          <Link href="/">
            <span className="font-bold  text-[16px] leading-[150%] font-kinn ">
              Support
            </span>
          </Link>
          <Image src="/ei.svg" alt="external link" width={25} height={25} />
        </div>
      </div>

      <div className="flex flex-row items-center mt-6 md:mt-0  gap-4">
        <Link href="/">
          <span className="font-bold text-white font-kinn text-[24px] leading-[80px] ">
            Go to home
          </span>
        </Link>
        <Image
          className=""
          src="/arrow.svg"
          alt="arrow image"
          width={34}
          height={34}
        />
      </div>
    </div>
  );
}
