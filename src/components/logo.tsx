"use client"

import Image from "next/image";
import {useTheme} from "next-themes";

type Props = {
    size: number
}

export default function Logo({
    size
}: Props) {
    const {theme} = useTheme()

    return <Image src={theme === 'dark' ? '/logo-light.png' : '/logo-dark.png'} alt={'Logo'} width={size} height={size}/>
}