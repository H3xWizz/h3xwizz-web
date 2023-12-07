"use client"

import Image from "next/image"
import {useTheme} from "next-themes";

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className={'h-screen w-[calc(100vw-4.2rem)] flex flex-col justify-center items-center'}>
      <Image src={theme === 'light' ? '/logo-dark.png' : '/logo-light.png'} height={100} width={100} alt={"Logo"}/>
      <p className={'text-2xl font-bold'}>Next.js Front-end Developer / Server administrator</p>
    </div>
  )
}
