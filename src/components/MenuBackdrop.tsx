import { useStore } from "@nanostores/react";
import Hamburguer from "./Icons/Hamburguer";
import { show } from "../stores/menuStore";
import {BiBookAlt, BiHomeAlt2} from "react-icons/bi/index"
import {CgProfile} from 'react-icons/cg/index'
import type { MouseEvent } from "react";
import { links } from "../stores/linksStore";

export default function MenuBackdrop(){
    const $show = useStore(show)
    const $links = useStore(links)

    const handleClick = (e:MouseEvent<HTMLDivElement, globalThis.MouseEvent>)=>{
        e.stopPropagation()
        show.set(false)
    }

    return(
        <div className="md:hidden relative">
            <Hamburguer />
            <div onClick={()=>show.set(false)} className={`fixed top-0 left-0 w-screen h-screen z-0 ${$show ? "pointer-events-auto" : "pointer-events-none"}`}>
                <div onClick={handleClick} className={`flex flex-col gap-4 [&>a]:text-sm bg-slate-500 text-slate-50 font-medium rounded-md py-2 px-4 z-i-20 absolute right-6 top-14 md:right-[7.3rem] transition-all ${$show ? "opacity-1" : "opacity-0"} [&>a]:flex [&>a]:gap-2 [&>a]:items-center`}>
                    {$links.map(link=>(<a key={link.url} href={link.url}><link.Icon />{link.text}</a>))}
                </div>
            </div>
        </div>
    )
}