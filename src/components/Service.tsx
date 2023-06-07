import type { IconType } from "react-icons"
export default function Service({Icon,title}:{Icon:IconType,title:string}){
    return(
        <>
            <Icon className="text-orange-500 text-6xl sm:text-7xl"/>
            <h4 className="text-xs font-bold sm:text-base">{title}</h4>
        </>
    )
}