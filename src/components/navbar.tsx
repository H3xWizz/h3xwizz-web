"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NavItems } from "@/modules/nav-items"
import Link from "next/link"
import {ThemeToggle} from "@/components/theme-toggle";
import Image from "next/image"
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {useTheme} from "next-themes";
import {ChevronsLeftIcon, ChevronsRightIcon} from "lucide-react";
import {cn} from "@/lib/utils";

export default function Navbar() {
    const [ expanded, setExpanded ] = useState(false)
    const { theme } = useTheme()
    
    return(
        <div className={cn("sticky h-screen py-3.5 flex flex-col justify-around items-center border-r-[1px] border-border", !expanded ? 'w-[4.2rem]' : 'w-[15.2rem]', "transition-width duration-300")}>
            <Image src={theme === 'light' ? '/logo-dark.png' : '/logo-light.png'} height={30} width={30} alt={"Logo"}/>
            <NavigationMenu>
                <NavigationMenuList className={'flex flex-col gap-2 items-center justify-center'}>
                    {NavItems.map(item => (
                        <NavigationMenuItem key={item.name}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    {!expanded ?
                                    <Button
                                        variant={"ghost"}
                                        size={"icon"}
                                        className={'p-0.5'}>
                                        <item.icon className='h-6 w-6'/>
                                    </Button>
                                        :
                                    <Button
                                        variant={"ghost"}
                                        size={"default"}
                                        className={'flex-shrink-0'}
                                        >
                                        <div className={'flex h-fit w-fit justify-center items-center gap-3'}>
                                            <item.icon className='h-6 w-6'/>
                                            {item.name}
                                        </div>
                                    </Button>}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className={'flex flex-col gap-2 items-center justify-center'}>
                <ThemeToggle/>
                <Button
                    variant={'ghost'}
                    size={'icon'}
                    onClick={() => setExpanded(!expanded)}
                >
                    {!expanded ? <ChevronsRightIcon/> : <ChevronsLeftIcon/>}
                </Button>
            </div>
        </div>
    )
}