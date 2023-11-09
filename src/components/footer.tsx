import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Linkedin, Github, Twitter } from "lucide-react/";
import Link from "next/link";

export default function Footer() {
    return(
        <div className="h-12 w-screen px-[calc(100vh-50rem)] font-light text-xs flex justify-between items-center">
            <p>H3xWizz &copy; 2023</p>
            <div className="p-0 m-0 bg-transparent flex justify-center items-center">
                <Link href="/">
                    <Button
                    variant="ghost"
                    className="m-0"
                    disabled
                    >
                        <Twitter strokeWidth={1.15} size={20}/>
                    </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/ksawier-malkiewicz-6704a6189/" target="_blank">
                    <Button
                    variant="ghost"
                    className="m-0"
                    >
                        <Linkedin strokeWidth={1.15} size={20}/>
                    </Button>
                </Link>
                <Link href="https://github.com/H3xWizz" target="_blank">
                    <Button
                    variant="ghost"
                    className="m-0"
                    >
                        <Github strokeWidth={1.15} size={20}/>
                    </Button>
                </Link>
                <ThemeToggle/>
            </div>
        </div>
    )
}