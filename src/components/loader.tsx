import {Loader2} from "lucide-react";

export default function Loader() {
    return(
        <div className={'h-full w-full flex justify-center items-center'}>
            <Loader2 className={'animate-spin'}/>
        </div>
    )
}