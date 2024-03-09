"use client";

import { NavItems } from "@/modules/nav-items";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {ThemeToggle} from "@/components/theme-toggle";
import Logo from "@/components/logo";
import {MenuIcon, XIcon} from "lucide-react";
import {useState} from "react";
import {cn} from "@/lib/utils";

export default function Navbar() {
    const [extended, setExtended] = useState(false)

    return (
        <div className={cn('z-50 w-screen border-b-[1px] border-border backdrop-blur fixed top-0 transition-all', !extended ? 'h-[3.5rem]' : 'h-screen bg-background')}>
            {/*DESKTOP NAVBAR*/}
            <div className={'hidden md:flex h-full w-full px-48 justify-between items-center'}>
                <Logo size={25}/>
                <NavigationMenu>
                    <NavigationMenuList className={'md:flex gap-4'}>
                        {NavItems.map(item => (
                            <NavigationMenuItem key={item.name}>
                                <Link href={item.href}>
                                    <p className={'hover:text-muted-foreground transition-colors'}>{item.name}</p>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <ThemeToggle/>
            </div>
            {/*MOBILE NAVBAR*/}
            <div className={cn('md:hidden flex flex-col transition-all', !extended ? 'h-[3.5rem] justify-center' : 'h-screen flex-col-reverse justify-around')}>
                <div className={cn('h-[3.5rem] flex justify-around items-center', extended && 'border-t-[1px] border-border')}>
                    {!extended ? (
                        <>
                            <Logo size={25}/>
                            <MenuIcon onClick={() => setExtended(true)}/>
                        </>
                    ) : (
                        <>
                            <Logo size={25}/>
                            <ThemeToggle/>
                            <XIcon onClick={() => setExtended(false)}/>
                        </>
                    )}
                </div>
                <NavigationMenu className={!extended ? 'hidden' : 'block'}>
                    <NavigationMenuList className={'flex flex-col'}>
                        {NavItems.map(item => (
                            <NavigationMenuItem key={item.name}>
                                <Link href={item.href} className={'h-[3.5rem] w-screen px-12 border-t-[1px] border-b-[1px] border-border flex items-center hover:text-black hover:bg-foreground transition-colors'} onClick={() => setExtended(false)}>
                                    <p>{item.name}</p>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}
