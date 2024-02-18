import { NavItem } from "@/types/nav-types";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import {Code2Icon} from "lucide-react";

export const NavItems: NavItem[] = [
    {
        name: "Home",
        href: "#Home",
        icon: HomeIcon
    },
    {
        name: "About me",
        href: "#About",
        icon: UserIcon
    },
    {
        name: "Projects",
        href: "#Projects",
        icon: Code2Icon
    },
    {
        name: "Contact",
        href: "#Contact",
        icon: EnvelopeIcon
    }
]