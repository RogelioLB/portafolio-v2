import { useStore } from "@nanostores/react";
import { links } from "../stores/linksStore"

export default function Links(){
    const $links = useStore(links)
    return(
        <div className="hidden md:flex gap-4 [&>a]:flex [&>a]:gap-2 [&>a]:items-center [&>a]:text-slate-50">
            {$links.map(link=>(<a key={link.url} href={link.url}><link.Icon />{link.text}</a>))}
        </div>
    )
}