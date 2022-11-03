import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-12 w-full">
        <Link href="/">
          <Image
            className=" cursor-pointer"
            width={200}
            height={57}
            src="/logo.svg"
            alt="logo"
          />
        </Link>
        <div className="flex justify-between items-center gap-12">
          <ul className="flex justify-between gap-6 items-center text-[18px] font-bold leading-[18px] text-white">
            <li>
              <Link href="/">
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>Buy $SAP</span>
              </Link>
            </li>
            <li>
              <Link href="/">
                <span>Staking</span>
              </Link>
            </li>
          </ul>

          <button className="bg-black p-2 rounded-[6px]">
            <span className="text-white font-[700] text-[14px]">
              <Link href="/">Connect wallet</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
