"use client";

import Logo from "@/components/logo";
import { NavItems } from "@/modules/nav-items";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
    return (
        <div className={'z-50 h-[3.5rem] w-screen border-b-[1px] border-border px-56 flex justify-between items-center backdrop-blur fixed'}>
            <Logo size={25}/>
            <NavigationMenu>
                <NavigationMenuList className={'flex gap-4'}>
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
    );
}
