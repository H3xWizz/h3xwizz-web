"use client"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import NavItems from "@/modules/nav-items"
import Link from "next/link"
import Image from "next/image"

export default function NavMenu() {
    return (
        <div className={"h-12 w-screen px-[calc(100vh-35rem)] flex justify-between items-center"}>
            <Image src={"/logo.svg"} height={50} width={50} alt="Logo"/>
            <NavigationMenu>
                <NavigationMenuList className={"flex gap-3 items-center"}>
                    {NavItems.map((item, key) => (
                        <NavigationMenuItem key={key}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink>
                                    {item.slug}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}