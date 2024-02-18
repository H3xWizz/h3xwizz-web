import { NavItemsModule } from "@/types/nav-types";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import {Code2Icon} from "lucide-react";

export const NavItems: NavItemsModule[] = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon
    },
    {
        name: "About me",
        href: "/about-me",
        icon: UserIcon
    },
    {
        name: "Projects",
        href: "/projects",
        icon: Code2Icon
    },
    {
        name: "Contact",
        href: "/contact",
        icon: EnvelopeIcon
    }
]