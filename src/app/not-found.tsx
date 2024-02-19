import Logo from "@/components/logo";

export default function NotFound() {
    return (
        <div className={'h-screen flex flex-col gap-8 justify-center items-center text-center'}>
            <Logo size={100}/>
            <div>
                <p className={'text-4xl font-bold'}>404</p>
                <p className={'text-sm font-light'}>Not Found</p>
            </div>
        </div>
    )
}