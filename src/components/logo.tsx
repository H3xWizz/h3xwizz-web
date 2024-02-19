"use client"

import Image from "next/image";
import {useTheme} from "next-themes";

type Props = {
    size: number
}

export default function Logo({
    size
}: Props) {
    const {resolvedTheme} = useTheme()

    return resolvedTheme === 'light'
        ? <Image src={'/logo-dark.png'} alt={'Logo'} width={size} height={size}/>
        : <Image src={'/logo-light.png'} alt={'Logo'} width={size} height={size}/>
}