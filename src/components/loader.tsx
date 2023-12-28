import {LoaderIcon} from "lucide-react";

export default function Loader() {
    return(
        <div className={'h-full w-full'}>
            <LoaderIcon className={'animate-spin'}/>
        </div>
    )
}