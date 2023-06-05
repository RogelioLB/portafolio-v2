export interface Props{
    name:string,
    description?:string,
    demo?:string,
    repository?:string,
    image: {url:string}
}

export default function Project(props:Props){
    const {description,name,demo,repository} = props
    return (
        <div className="flex animate-once animate-fade-down p-8 flex-col gap-4">
            <div className="p-4">
                <h3 className="text-bold md:text-2xl">{name}</h3>
                <p className="font-light text-sm max-sm:h-20">{description}</p>
                <div className="my-4 text-sm capitalize">
                    {demo && <a href={demo} target="_blank" className="bg-orange-600 rounded text-white px-3 py-1 md:text-md">See demo</a>}
                </div>
            </div>
        </div>
    )
}