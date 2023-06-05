import { useStore } from "@nanostores/react"
import Icon from "./Icon"
import { icons } from "../stores/iconsStroe"

export default function ListIcons(){
    const $icons = useStore(icons)
    return(
        <div className="flex overflow-hidden animate-fade animate-once mb-16">
            <ul className="shrink-0 min-w-full animate-marquee flex gap-4">
                {$icons.map((icon)=><Icon {...icon} key={icon.alt}/>)}
            </ul>
            <ul className="min-w-full shrink-0 animate-marquee flex gap-4" >
                {$icons.map((icon)=><Icon {...icon} key={icon.alt}/>)}
            </ul>
        </div>
    )
}