"use client";
import { ColorEnum } from "@/enum/color.enum";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiAccountCircleFill } from "react-icons/ri";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname()
  function clickHandler() {
    setOpen(!open);
  }
  if(pathName !=='/login')
  return (
    <div className="bg-pennBlueD-100 h-14 flex px-2 justify-between ">
      <button onClick={clickHandler}>
        <HiOutlineMenuAlt3 size={30} color={ColorEnum["moonstone-200"]} />
      </button>
      <Link href="/login" className="flex items-center">
        <RiAccountCircleFill size={30} color={ColorEnum["moonstone-200"]} />
      </Link>
      <Slider isOpen={open} setOpen={clickHandler} />
    </div>
  );
}

function Slider({ isOpen, setOpen }: { isOpen: boolean; setOpen: () => void }) {
  const a = isOpen
    ? "ease-in bg-slate-500/25 w-screen top-0 right-0"
    : "ease-in bg-slate-500/0 w-40 translate-x-44";
  return (
    <div
      className={`absolute transition duration-150 backdrop-blur-lg h-screen delay-100 ${a}`}
      onClick={setOpen}
    >
      <nav className="bg-pennBlueD-100 w-40 h-screen p-2 transition delay-100">
        <button onClick={setOpen}>
          <HiOutlineMenuAlt3 size={30} color={ColorEnum["moonstone-200"]} />
        </button>
        <ul>
          <li className="text-moonstone-700">
            <Link href="/contact-us">گوشواره</Link>
          </li>
          <li className="text-moonstone-700">
            <Link href="/about-us">گوشواره</Link>
          </li>
          <li>
            <ul>
              <li className="text-moonstone-700">
                <Link href="/shop/گوشواره">گوشواره</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/زنجیر">زنجیر</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/آویز">آویز</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/دستبند">دستبند</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/انگشتر">انگشتر</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/آویز-ساعت">آویز ساعت</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/سرویس">سرویس</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/نیمست">نیمست</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/پیرسینگ">پیرسینگ</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/پابند">پابند</Link>
              </li>
              <li className="text-moonstone-700">
                <Link href="/shop/گل-سینه">گل سینه</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
