import { useStore } from "@nanostores/react"
import { show } from "../../stores/menuStore"

export default function Hamburguer(){
    const $show = useStore(show)
    return(
        <div onClick={()=>show.set(!$show)} className={`hamburguer ${$show ? 'close' : ''} cursor-pointer relative w-7 aspect-square items-center justify-center flex flex-col gap-1`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}