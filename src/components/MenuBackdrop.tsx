import { useStore } from "@nanostores/react";
import Hamburguer from "./Icons/Hamburguer";
import { show } from "../stores/menuStore";
import {BiBookAlt, BiHomeAlt2} from "react-icons/bi/index"
import {CgProfile} from 'react-icons/cg/index'
import type { MouseEvent } from "react";

export default function MenuBackdrop(){
    const $show = useStore(show)

    const handleClick = (e:MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
        e.stopPropagation()
        show.set(false)
    }

    return(
        <div className="relative">
            <Hamburguer />
            <div onClick={()=>show.set(false)} className={`fixed top-0 left-0 w-screen h-screen z-0 ${$show ? "pointer-events-auto" : "pointer-events-none"}`}>
                <div onClick={handleClick} className={`flex flex-col gap-4 [&>a]:text-sm bg-slate-500 text-slate-50 font-medium rounded-md py-2 px-4 z-i-20 absolute right-6 top-14 transition-all ${$show ? "opacity-1" : "opacity-0"} [&>a]:flex [&>a]:gap-2 [&>a]:items-center`}>
                    <a href="#"><BiHomeAlt2 /> Home</a>
                    <a href="#"><CgProfile/> Personal Info</a>
                    <a href="#"><BiBookAlt />Blog</a>
                </div>
            </div>
        </div>
    )
}