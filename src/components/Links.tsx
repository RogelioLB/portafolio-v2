import { BiBookAlt, BiHomeAlt2 } from "react-icons/bi/index";
import { CgProfile } from "react-icons/cg/index";

export default function Links(){
    return(
        <div className="hidden md:flex gap-4 [&>a]:flex [&>a]:gap-2 [&>a]:items-center [&>a]:text-slate-50">
            <a href="#"><BiHomeAlt2 /> Home</a>
            <a href="#"><CgProfile /> Personal Info</a>
            <a href="#"><BiBookAlt />Blog</a>
        </div>
    )
}