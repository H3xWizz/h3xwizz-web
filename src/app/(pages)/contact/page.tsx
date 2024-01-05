import type {Metadata} from "next";
import ContactCardForm from "@/app/(pages)/contact/components/contact-card-form";

export const metadata: Metadata = {
    title: 'Contact',
}

export default function Page() {

    return (
        <div className={'h-screen w-[calc(100vw-4.2rem)] flex flex-col gap-8 justify-center items-center'}>
            <p className={'text-4xl font-bold'}>Contact</p>
            <ContactCardForm/>
        </div>
    )
}
