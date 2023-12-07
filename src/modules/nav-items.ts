import { NavItemsModule } from "@/types/nav-types";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
import {Code2Icon, PencilIcon} from "lucide-react";

export const NavItems: NavItemsModule[] = [
    {
        name: "Home",
        href: "/",
        icon: HomeIcon
    },
    {
        name: "About me",
        href: "/",
        icon: UserIcon
    },
    {
        name: "Projects",
        href: "/",
        icon: Code2Icon
    },
    {
        name: "Blog",
        href: "/",
        icon: PencilIcon
    },
    {
        name: "Contact",
        href: "/",
        icon: EnvelopeIcon
    }
]