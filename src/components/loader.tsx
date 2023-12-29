import {LoaderIcon} from "lucide-react";

export default function Loader() {
    return(
        <div className={'h-full w-full flex justify-center items-center'}>
            <LoaderIcon className={'animate-spin'}/>
        </div>
    )
}