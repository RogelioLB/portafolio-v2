import Icon from "./Icon"

const icons = [
    {
        icon:"/tailwind.svg",
        alt:"tailwind svg"
    },
    {
        icon:"/html.png",
        alt:"html logo"
    },
    {
        icon:"/css.png",
        alt:"css png logo"
    },
    {
        icon:"/js.png",
        alt:"javascript logo png"
    },
    {
        icon:"/react.png",
        alt:"react icon png"
    },
    {
        icon:"/mongodb.png",
        alt:"mongo db png"
    },
    {
        icon:"/nodejs.png",
        alt:"nodejs logo png"
    },
    {
        icon:"/nextjs.png",
        alt:"nextjs icon png"
    }
]
export default function ListIcons(){
    return(
        <div className="flex overflow-hidden animate-fade animate-once mb-16">
            <ul className="shrink-0 min-w-full animate-marquee flex gap-4">
                {icons.map((icon)=><Icon {...icon} key={icon.alt}/>)}
            </ul>
            <ul className="min-w-full shrink-0 animate-marquee flex gap-4" >
                {icons.map((icon)=><Icon {...icon} key={icon.alt}/>)}
            </ul>
        </div>
    )
}